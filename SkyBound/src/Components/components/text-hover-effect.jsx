import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";

export default function TextHoverEffectDemo() {
  return (
    <div className="h-[20rem] flex items-center justify-center" style={{fontSize: "0.9rem"}} >
      <TextHoverEffect text="Beyond the horizon, closer to your dreams."/>
    </div>
  );
}
