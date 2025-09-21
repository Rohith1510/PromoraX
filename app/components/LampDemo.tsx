"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { SparklesText } from "@/components/ui/sparkles-text";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 py-4 text-center font-medium tracking-tight space-y-4"
      >
        <div className="text-white mb-6 text-6xl md:text-9xl">
          Your gateway to the
        </div>
        <div className="text-white">
          {/* <div className="mb-4 text-4xl md:text-7xl">the future of</div> */}
          <div><SparklesText className="text-5xl md:text-7xl font-medium tracking-tight">AI Creation</SparklesText></div>
        </div>
      </motion.div>
    </LampContainer>
  );
}
