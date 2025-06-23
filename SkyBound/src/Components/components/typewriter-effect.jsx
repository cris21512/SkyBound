"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Fly ",
    },
    {
      text: "the ",
    },
    {
      text: "all ",
    },
    {
      text: "World",
    },
    {
      text: "SkyBound",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
