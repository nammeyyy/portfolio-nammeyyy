"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function SpatialField() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0.25, 7);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const coreGeometry = new THREE.IcosahedronGeometry(1.45, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x5ee7ff,
      emissive: 0x003b48,
      emissiveIntensity: 0.65,
      metalness: 0.25,
      roughness: 0.35,
      transparent: true,
      opacity: 0.92
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const wireGeometry = new THREE.IcosahedronGeometry(2.05, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xc3f4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.32
    });
    const wire = new THREE.Mesh(wireGeometry, wireMaterial);
    group.add(wire);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 140;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.8 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x9df0ff,
      size: 0.025,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.85, 0.008, 8, 160),
      ringMaterial
    );
    ring.rotation.x = Math.PI / 2.8;
    group.add(ring);

    scene.add(new THREE.AmbientLight(0xffffff, 1.3));
    const key = new THREE.PointLight(0x5ee7ff, 12, 12);
    key.position.set(3, 4, 4);
    scene.add(key);
    const warm = new THREE.PointLight(0xffd166, 7, 10);
    warm.position.set(-4, -2, 3);
    scene.add(warm);

    const pointer = new THREE.Vector2(0, 0);
    const handlePointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointerMove);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = elapsed * 0.18 + pointer.x * 0.22;
      group.rotation.x = Math.sin(elapsed * 0.35) * 0.12 + pointer.y * 0.16;
      core.rotation.y = elapsed * 0.38;
      wire.rotation.z = -elapsed * 0.16;
      particles.rotation.y = -elapsed * 0.08;
      ring.rotation.z = elapsed * 0.24;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ring.geometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-[45vh] min-h-[330px] w-full lg:h-[min(68vh,680px)] lg:min-h-[420px]"
      aria-hidden="true"
    />
  );
}
