"use client";
import React from "react";

import Silvertwo from '../../assets/images/Silvertwo.jpg';
import Goldtwo from '../../assets/images/Goldtwo.jpg';
import Platiniumtwo from '../../assets/images/Platiniumtwo.jpg';

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            <p >
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover" />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Silver",
    description: (
      <>
        <p>
Experience <span>affordable comfort</span> with our Silver Class. Designed for smart travelers who seek efficiency and ease, Silver offers ergonomic leather seats, complimentary snacks and drinks, a personal entertainment screen, and in-flight Wi-Fi.

Includes flexible baggage options and 24/7 customer support. Whether for business or leisure, Silver gets you there with Skybound’s trusted quality and safety.
        </p>
      </>
    ),
    badge: "from $199-$399",
    image:
      Silvertwo,
  },
  {
    title: "Gold",
    description: (
      <>
        <p>
Step up to Gold Class for a superior journey. With 20% more legroom, wider reclining seats, welcome drinks, and upgraded gourmet meal selections, your comfort is guaranteed. Gold passengers enjoy expedited check-in, priority boarding, and additional carry-on space.

You’ll also get access to exclusive in-flight content and noise-canceling headphones for a truly immersive flight. Gold Class ensures your journey feels premium from start to finish.

Priority. Prestige. Gold.
        </p>
      </>
    ),
    badge: "from $450-$799",
    image:
      Goldtwo,
  },
  {
    title: "Platinium",
    description: (
      <>
        <p>
Fly at the highest level of luxury with Platinum Class — where travel becomes a first-class lifestyle. Enjoy fully lie-flat seats in a private cabin setting, access to VIP lounges at all major airports, personalized service throughout your journey, and a curated menu of gourmet dishes prepared by award-winning chefs.

Includes fast-track immigration, private check-in counters, extra baggage allowance, and noise-insulated cabins for complete peace. Every moment in Platinum is designed to exceed expectations.
        </p>
      </>
    ),
    badge: "From $850- $1500+ ",
    image:
      Platiniumtwo,
  },
];
