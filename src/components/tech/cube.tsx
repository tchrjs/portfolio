"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

interface CubeProps {
  icon?: React.ReactNode;
}

export default function Cube({ icon }: CubeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    ref.current.style.transform = `rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="relative w-full h-full perspective-[800px]">
      <div ref={ref} className="relative w-49 h-49 transform-3d">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transform: "rotateY(0deg) translateZ(98px)" }}
        >
          {icon ? (
            <div className="absolute border border-foreground">{icon}</div>
          ) : (
            <div className="w-full h-full bg-red-500 border border-foreground"></div>
          )}
        </div>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transform: "rotateY(90deg) translateZ(98px)" }}
        >
          {icon ? (
            <div className="absolute border border-foreground">{icon}</div>
          ) : (
            <div className="w-full h-full bg-blue-500 border border-foreground"></div>
          )}
        </div>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transform: "rotateY(180deg) translateZ(98px)" }}
        >
          {icon ? (
            <div className="absolute border border-foreground">{icon}</div>
          ) : (
            <div className="w-full h-full bg-green-500 border border-foreground"></div>
          )}
        </div>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transform: "rotateY(-90deg) translateZ(98px)" }}
        >
          {icon ? (
            <div className="absolute border border-foreground">{icon}</div>
          ) : (
            <div className="w-full h-full bg-yellow-500 border border-foreground"></div>
          )}
        </div>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transform: "rotateX(90deg) translateZ(98px)" }}
        >
          {icon ? (
            <div className="absolute border border-foreground">{icon}</div>
          ) : (
            <div className="w-full h-full bg-purple-500 border border-foreground"></div>
          )}
        </div>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transform: "rotateX(-90deg) translateZ(98px)" }}
        >
          {icon ? (
            <div className="absolute border border-foreground">{icon}</div>
          ) : (
            <div className="w-full h-full bg-pink-500 border border-foreground"></div>
          )}
        </div>
      </div>
    </div>
  );
}
