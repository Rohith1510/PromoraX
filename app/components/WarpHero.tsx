"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";



export function WarpHero() {
  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center bg-black relative">
      {/* Content */}
      <div className="container px-4 md:px-6 flex items-center justify-center relative z-10">
        <div className="flex flex-col space-y-6 max-w-4xl text-center">
          <div className="flex justify-center">
            <div className="relative inline-flex items-center rounded-full p-[1px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              <div className="inline-flex items-center rounded-full bg-black/80 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold text-white">
                <Sparkles className="mr-1 h-6 w-6" />
                ZK-Powered AI Prompt Marketplace
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tighter sm:text-4xl md:text-7xl">
            Your <Highlighter action="underline" color="red" strokeWidth={4} animationDuration={800}>gateway</Highlighter> to the AI {" "}
            <br/>
            <SparklesText className="text-6xl sm:text-4xl md:text-7xl font-bold tracking-tighter text-cyan-600">
              Prompt Economy
            </SparklesText>
          </h1>
          <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
            Prompts. Verified. Rewarded.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/explore" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg">
              Explore Prompts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/submit" className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-colors">
              Submit Prompt
              <Sparkles className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}
