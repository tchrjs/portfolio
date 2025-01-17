"use client";

import { getRandomElement } from "@/lib/utils";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

interface AnimatedBackgroundProps {
  shapeCount?: number;
  delay?: number;
}

interface ShapeProps {
  style?: object;
  animate?: object;
  transition?: object;
  state: boolean;
}

const box = {
  width: 100,
  height: 100,
  borderRadius: 5,
};

const circle = {
  width: 100,
  height: 100,
  borderRadius: "50%",
};

const shapeTypes = [box, circle];
const colors = ["#EAE0CC", "#D14081", "#C9ADA1", "#04A777", "#023436"];

export default function AnimatedBackground(props: AnimatedBackgroundProps) {
  const [shapes, setShapes] = useState<ShapeProps[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getRandomPosition = () => {
    const left = containerRef.current
      ? Math.random() * containerRef.current.offsetWidth
      : 0;
    const top = containerRef.current
      ? Math.random() * containerRef.current.offsetHeight
      : 0;
    return { left: left, top: top };
  };

  const createShape = (delay: number) => {
    const { left, top } = getRandomPosition();

    const shape: ShapeProps = {
      style: {
        ...getRandomElement(shapeTypes),
        backgroundColor: getRandomElement(colors),
        left: left + "px",
        top: top + "px",
      },
      animate: {
        scale: [0, 1, 0],
        rotate: [0, 360, 0],
        opacity: [0, 1, 0],
      },
      transition: {
        duration: Math.random() * 5 + 5,
        repeatType: "reverse",
        delay: delay,
      },
      state: true,
    };
    return shape;
  };

  const randomizeShape = async (index: number) => {
    setShapes((prevShapes) => {
      const newShapes = [...prevShapes];
      newShapes[index].state = false;
      return newShapes;
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    const { left, top } = getRandomPosition();
    setShapes((prevShapes) => {
      const newShapes = [...prevShapes];
      newShapes[index].state = true;
      newShapes[index].style = {
        ...newShapes[index].style,
        ...getRandomElement(shapeTypes),
        backgroundColor: getRandomElement(colors),
        left: left + "px",
        top: top + "px",
      };
      return newShapes;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < (props.shapeCount || 0); i++) {
        setShapes((prevShapes) => [...prevShapes, createShape(i * 0.5)]);
      }
    }, props.delay);
  }, []);

  return (
    <div className="absolute w-full h-full" ref={containerRef}>
      {shapes.map(
        (shape, index) =>
          shape.state && (
            <motion.div
              className="absolute"
              key={index}
              style={{ ...shape.style }}
              animate={{ ...shape.animate }}
              transition={{ ...shape.transition }}
              onAnimationComplete={() => randomizeShape(index)}
            />
          )
      )}
      <div className="absolute w-full h-full bg-gradient-to-b from-0% from-transparent via-50% via-background to-100% to-transparent"></div>
    </div>
  );
}
