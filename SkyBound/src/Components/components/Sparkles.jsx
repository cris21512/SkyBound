"use client";
import React, { useEffect } from "react";
import { SparklesCore } from "../ui/sparkles";
import GradientText from "../../TextAnimations/GradientText/GradientText";
import './Sparkles.css';

import AOS from "aos";
import "aos/dist/aos.css";

export default function SparklesPreview() {

  useEffect(() => {
    AOS.init({
      once: true, 
    });
  })

  return (
    <div
      className="h-[13rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1
      className="h1-sparkles"
        style={{color: '#fff', textShadow: '0 0 10px rgba(0, 0, 0, 0.5)', fontWeight: 'bold'}} data-aos="fade-up" data-aos-duration="1000">
        SkyBound
      </h1>
      <div className="w-[50rem] h-40 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[8px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[10px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <h1 className="h2-sparkles" data-aos="fade-up" data-aos-duration="1500">
            Your journey begins with Skybound.
          </h1>
      </div>
    </div>
  );
}
