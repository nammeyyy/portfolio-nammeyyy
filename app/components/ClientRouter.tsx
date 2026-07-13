"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

type RouterContextValue = {
  path: string;
  navigate: (href: string, options?: { replace?: boolean }) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

function browserPath() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export function ClientRouter({
  initialPath,
  children,
}: {
  initialPath: string;
  children: ReactNode;
}) {
  const [path, setPath] = useState(initialPath);

  const navigate = useCallback(
    (href: string, options?: { replace?: boolean }) => {
      const url = new URL(href, window.location.href);

      if (url.origin !== window.location.origin) {
        window.location.assign(url);
        return;
      }

      const nextPath = `${url.pathname}${url.search}${url.hash}`;
      const method = options?.replace ? "replaceState" : "pushState";
      window.history[method]({}, "", nextPath);
      setPath(nextPath);
    },
    [],
  );

  useEffect(() => {
    setPath(browserPath());

    const handlePopState = () => setPath(browserPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const hash = path.includes("#") ? path.split("#")[1] : "";
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [path]);

  const value = useMemo(() => ({ path, navigate }), [navigate, path]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}

export function useClientRouter() {
  const router = useContext(RouterContext);

  if (!router) {
    throw new Error("useClientRouter must be used inside ClientRouter");
  }

  return router;
}

type RouterLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  replace?: boolean;
};

export function RouterLink({
  href,
  replace,
  onClick,
  target,
  ...props
}: RouterLinkProps) {
  const { navigate } = useClientRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const shouldUseBrowserNavigation =
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (target && target !== "_self") ||
      props.download !== undefined;

    if (shouldUseBrowserNavigation) {
      return;
    }

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    navigate(href, { replace });
  };

  return (
    <a {...props} href={href} target={target} onClick={handleClick} />
  );
}
