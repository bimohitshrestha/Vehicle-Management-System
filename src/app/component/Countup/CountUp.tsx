"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CountUpProps {
  start: number | string;
  end: number | string;
  suffix?: number | string;
  duration: number;
}

const CountUp: React.FC<CountUpProps> = ({
  start,
  end,
  suffix = "",
  duration,
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    let frameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const startValue =
        typeof start === "string" ? parseInt(start, 10) : start;
      const endValue = typeof end === "string" ? parseInt(end, 10) : end;

      const currentCount = Math.round(
        startValue + progress * (endValue - startValue)
      );
      setCount(currentCount);

      if (progress < 1) {
        frameId = requestAnimationFrame(animateCount);
      }
    };

    frameId = requestAnimationFrame(animateCount);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [start, end, duration]);

  return (
    <motion.div>
      {count}
      {suffix}
    </motion.div>
  );
};

export default CountUp;
