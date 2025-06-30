"use client";
import React, { use, useEffect } from "react";

import Silvertwo from '../../assets/images/Silvertwo.jpg';
import Goldtwo from '../../assets/images/Goldtwo.jpg';
import Platiniumtwo from '../../assets/images/Platiniumtwo.jpg';

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

import AOS from "aos";
import "aos/dist/aos.css";

export default function TracingBeamDemo() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  })

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
Experience <span>affordable comfort</span> with our <span>Silver Class</span>. Designed for smart travelers who seek <span>efficiency and ease</span>, Silver offers <span>ergonomic leather seats</span>, complimentary snacks and drinks, a personal entertainment screen, and <span>in flight Wi-Fi</span>. <br />

Includes <span>flexible baggage options</span> and <span>24/7 customer support</span>. Whether for business or leisure, <span>Silver gets you there with Skybound’s trusted quality and safety</span>.
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
Take your travel to the next level with <span>Gold Class</span>. Enjoy <span>20% more legroom</span>, <span>wider reclining seats</span>, <span>priority boarding</span>, and <span>enhanced gourmet meals</span>. Upon arrival, premium beverages and priority check-in await you.

Includes <span>extra cabin luggage space</span>, noise canceling headphones, <span>and exclusive content access</span>, ensuring a truly <span>immersive travel experience</span>.
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
Fly in ultimate luxury with <span>Platinum Class</span>, where <span>travel becomes a lifestyle</span>. Featuring <span>fully lie flat seats, private suites</span>, <span>access to VIP lounges</span>, <span>dedicated onboard service</span>, and a gourmet menu by award-winning chefs.

Enjoy <span>express immigration</span>, <span>private check-in</span>, <span>extra luggage allowance</span>, and soundproof cabins for total relaxation.

Every moment in <span>Platinum</span> is crafted to <span>exceed your expectations</span>.
        </p>
      </>
    ),
    badge: "From $850- $1500+ ",
    image:
      Platiniumtwo,
  },
];
