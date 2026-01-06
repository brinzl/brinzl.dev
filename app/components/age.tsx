"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Age() {
  const birthDate = new Date("2000-09-05");
  const [ageInYears, setAgeInYears] = useState("0.00000000");

  useEffect(() => {
    const calculateAge = () => {
      const now = new Date();
      const diffTime = now.getTime() - birthDate.getTime();
      const years = diffTime / (1000 * 60 * 60 * 24 * 365.25);
      return years.toFixed(8);
    };

    setAgeInYears(calculateAge());

    // Update every second
    const interval = setInterval(() => {
      setAgeInYears(calculateAge());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Split the age into static and changing parts
  const staticPart = ageInYears.slice(0, -1);
  const changingDigit = ageInYears.slice(-1);

  return (
    <span className="inline-block min-w-[110px] text-center text-neutral-500 dark:text-neutral-500">
      <span>{staticPart}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={changingDigit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="inline-block"
        >
          {changingDigit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
