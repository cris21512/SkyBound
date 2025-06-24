

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] w-[100%] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I booked Silver class and couldn’t believe how comfy the seats were for that price. Great service and no delays. I totally recommend flying with Skybound!",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Skybound Gold was a top-tier experience for way less than I expected. Spacious seats, tasty meals, and first-class service. I won’t fly with anyone else again!",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "Platinum class is next level. Private lounge, gourmet food, and an ultra-smooth flight. The best part? It didn’t break the bank. Skybound nailed it!",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It’s rare to find quality and affordable prices in one airline, but Skybound does it. Flew to Europe in Silver class and everything was perfect and on time.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "From booking to landing, it was a premium experience. I've tried all classes and always leave satisfied. Best value-for-money airline, hands down!",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
