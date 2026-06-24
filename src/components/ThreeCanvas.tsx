"use client";

import { Canvas } from "@react-three/fiber";

export default function ThreeCanvas({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return <Canvas {...props}>{children}</Canvas>;
}
