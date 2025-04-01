import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import TextHeader from "../common/headerText/TextHeader";


const steps = [
  {
    title: "Step 1: Boost Efficiency",
    description:
      "Easily manage your fleet by optimizing routes, tracking vehicles, and scheduling maintenance in one place.",
    image: "/bike1.png",
  },
  {
    title: "Step 2: Reduce Costs",
    description:
      "Cut fuel expenses, minimize maintenance costs, and make data-driven decisions to enhance fleet performance.",
    image: "/bike2.png",
  },
  {
    title: "Step 3: Real-Time Monitoring",
    description:
      "Monitor vehicles live to ensure safety, accountability, and timely deliveries.",
    image: "/bike3.png",
  },
  {
    title: "Step 4: Enhance Safety",
    description:
      "Track driver behavior, receive alerts for risky activities, and stay compliant with safety regulations.",
    image: "/bike4.png",
  },
  {
    title: "Step 5: Easy Maintenance Scheduling",
    description:
      "Automate maintenance reminders to keep your fleet in top shape, reducing downtime and prolonging vehicle lifespan.",
    image: "/bike5.png",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scrollProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, steps.length - 1]
  );

  scrollProgress.onChange((latest) => {
    setCurrentIndex(Math.min(Math.floor(latest), steps.length - 1));
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 50,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 1,
      scale: 1,
      y: -50,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full max-w-7xl mx-auto px-4 py-16 text-black mb-16"
    >
     
      <TextHeader title="5 Ways Our Website Benefits You"/>

      <div className="relative flex flex-col lg:flex-row gap-16 lg:gap-44 mt-8">
        <div className="space-y-16 w-full lg:w-1/2 flex flex-col justify-center items-start">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`py-16 transition-all duration-700 ease-out ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } flex items-center`}
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transform:
                  index === currentIndex ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <div className="h-48 w-2 bg-secondary mr-8" />

              <div>
                <h3 className="text-3xl font-semibold mb-4 text-[#333]">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sticky top-32 w-full lg:w-1/2 h-[400px] flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full flex justify-center items-center"
            >
              <Image
                src={steps[currentIndex].image}
                alt={steps[currentIndex].title}
                width={600}
                height={400}
                className="rounded-lg shadow-xl transition-transform transform duration-500 hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
