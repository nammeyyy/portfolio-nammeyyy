"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type RouteSceneProps = {
  label?: string;
};

export function RouteScene({ label = "Project route visual" }: RouteSceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.2, 7.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = "block";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.width = "100%";
    mount.appendChild(renderer.domElement);

    const pivot = new THREE.Group();
    const group = new THREE.Group();
    pivot.scale.set(2, 2, 2);
    scene.add(pivot);
    pivot.add(group);

    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0x7be7ff,
      emissive: 0x053b45,
      emissiveIntensity: 0.8,
      metalness: 0.2,
      roughness: 0.35,
    });
    const nodeGeometry = new THREE.SphereGeometry(0.085, 24, 24);
    const nodePositions = [
      new THREE.Vector3(-1.2, -0.52, 0.14),
      new THREE.Vector3(-0.5, 0.64, -0.1),
      new THREE.Vector3(0.44, -0.24, 0.32),
      new THREE.Vector3(1.08, 0.54, -0.18),
      new THREE.Vector3(0.07, 1.02, 0.18),
      new THREE.Vector3(-0.84, 0.04, -0.32),
    ];

    const nodes = nodePositions.map((position) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(position);
      group.add(node);
      return node;
    });

    const linePoints = [
      nodePositions[0],
      nodePositions[5],
      nodePositions[1],
      nodePositions[4],
      nodePositions[3],
      nodePositions[2],
      nodePositions[0],
      nodePositions[1],
      nodePositions[2],
      nodePositions[5],
    ];
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x7be7ff,
      transparent: true,
      opacity: 0.34,
    });
    const lines = new THREE.Line(lineGeometry, lineMaterial);
    group.add(lines);

    const ringGeometry = new THREE.TorusGeometry(1.32, 0.008, 8, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.48,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2.6;
    group.add(ring);

    const halo = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.9, 1),
      new THREE.MeshBasicMaterial({
        color: 0x7be7ff,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      })
    );
    group.add(halo);

    const bounds = new THREE.Box3().setFromObject(group);
    const center = bounds.getCenter(new THREE.Vector3());
    group.position.sub(center);

    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const key = new THREE.PointLight(0x7be7ff, 10, 10);
    key.position.set(2, 3, 4);
    scene.add(key);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height);
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
      pivot.rotation.y = elapsed * 0.26;
      pivot.rotation.x = Math.sin(elapsed * 0.45) * 0.14;
      ring.rotation.z = elapsed * 0.32;
      halo.rotation.x = -elapsed * 0.2;
      halo.rotation.y = elapsed * 0.16;
      nodes.forEach((node, index) => {
        const scale = 1 + Math.sin(elapsed * 1.8 + index) * 0.18;
        node.scale.setScalar(scale);
      });
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      halo.geometry.dispose();
      if (Array.isArray(halo.material)) {
        halo.material.forEach((material) => material.dispose());
      } else {
        halo.material.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-full min-h-0 w-full overflow-hidden rounded-lg"
      aria-label={label}
      role="img"
    />
  );
}
