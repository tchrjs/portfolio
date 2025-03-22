"use client";

import { getRandomElement, getRandomInt } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";

interface AnimatedBackgroundProps {
  shapeCount?: number;
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
  clipPath: "",
};

const circle = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  clipPath: "",
};

const star = {
  width: 100,
  height: 100,
  borderRadius: 0,
  clipPath:
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
};

const shapeTypes = [box, circle, star];
const colors = ["#EAE0CC", "#D14081", "#C9ADA1", "#04A777", "#023436"];

export default function HeroBackground(props: AnimatedBackgroundProps) {
  const [shapes, setShapes] = useState<ShapeProps[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getRandomPosition = () => {
    const left = containerRef.current
      ? getRandomInt(-50, containerRef.current.offsetWidth - 50)
      : 0;
    const top = containerRef.current
      ? getRandomInt(-50, containerRef.current.offsetHeight - 50)
      : 0;
    return { left: left, top: top };
  };

  const randomizeShape = async (index: number) => {
    setShapes((prevShapes) => {
      const { left, top } = getRandomPosition();
      const newShapes = [...prevShapes];
      newShapes[index].state = false;
      newShapes[index].style = {
        ...newShapes[index].style,
        ...getRandomElement(shapeTypes),
        backgroundColor: getRandomElement(colors),
        left: left + "px",
        top: top + "px",
      };
      newShapes[index].animate = {
        ...newShapes[index].animate,
        rotate: [0, Math.random() < 0.5 ? -360 : 360, 0],
      };
      newShapes[index].transition = {
        ...newShapes[index].transition,
        duration: Math.random() * 5 + 5,
      };
      return newShapes;
    });
  };

  useEffect(() => {
    shapes.map((shape) => {
      if (!shape.state) {
        shape.state = true;
      }
    });
  }, [shapes]);

  useEffect(() => {
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
          rotate: [0, Math.random() < 0.5 ? -360 : 360, 0],
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

    setTimeout(() => {
      for (let i = 0; i < (props.shapeCount || 0); i++) {
        setShapes((prevShapes) => [...prevShapes, createShape(i * 1)]);
      }
    }, 2000);
  }, [props.shapeCount]);

  return (
    <div className="absolute w-full h-full" ref={containerRef}>
      {shapes.map(
        (shape, index) =>
          shape.state && (
            <motion.div
              className="absolute"
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              style={{ ...shape.style }}
              animate={{ ...shape.animate }}
              transition={{ ...shape.transition }}
              onAnimationComplete={() => randomizeShape(index)}
            />
          )
      )}
    </div>
  );
}
