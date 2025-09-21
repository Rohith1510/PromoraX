"use client";
import React from "react";
import { WobbleCard } from "../../components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Discover Premium AI Prompts
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Unlock exclusive AI prompts crafted by experts. Get access to high-value content that drives results.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          ZK-Powered Voting
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Experience sybil-resistant voting with zero-knowledge proofs. One person, one vote.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Earn ETH from Your Prompts
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Get tipped directly in ETH for your valuable AI prompts. Build your reputation and earn on the Base network.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
