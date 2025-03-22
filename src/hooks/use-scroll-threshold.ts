import { useState, useEffect } from "react";

export default function useScrollThreshold(scrollThreshold: number = 50) {
  const [pastThreshold, setPastThreshold] = useState(false);

  const handleScroll = () => {
    setPastThreshold(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return pastThreshold;
}
