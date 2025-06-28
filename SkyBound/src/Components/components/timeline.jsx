import React, { useEffect } from "react";
import { Timeline } from "../ui/timeline";

import image_1 from '../../assets/images/image_1.jpg';
import image_2 from '../../assets/images/image_2.jpg';
import image_3 from '../../assets/images/image_3.webp';
import image_4 from '../../assets/images/image_4.jpg';
import image_5 from '../../assets/images/image_5.jpg';
import image_6 from '../../assets/images/image_6.jpg';

import AOS from "aos";
import "aos/dist/aos.css";

export default function TimelineDemo() {

  useEffect(() => {
    AOS.init({
      once: true, 
    });
  })

  const data = [
    {
      title: "2015",
      content: (
        <div>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200" 
            data-aos="fade-up" data-aos-duration="600">
            Skybound Airlines was born with a bold mission: to make air travel more accessible, comfortable, and memorable. We started with just one aircraft and a handful of passionate team members, committed to connecting people across Central America.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image_1}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-aos="fade-up" data-aos-duration="600" />
            <img
              src={image_2}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-aos="fade-up" data-aos-duration="600" />
          </div>
        </div>
      ),
    },
    {
      title: "Currently 2025",
      content: (
        <div>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200"
            data-aos="fade-up" data-aos-duration="600">
Today, Skybound Airlines connects over 60 destinations worldwide, offering three distinct seat classes and exclusive perks with Skybound Plus. 
          </p>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200" data-aos="fade-up" data-aos-duration="600">
Our commitment to innovation, comfort, and affordability has positioned us as a rising star in the aviation industry. The journey continues faster, farther, and bolder.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image_3}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-aos="fade-up" data-aos-duration="600" />
            <img
              src={image_4}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-aos="fade-up" data-aos-duration="600" />
          </div>
        </div>
      ),
    },
    {
      title: "Our Journey",
      content: (
        <div>
          <p
            className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200" data-aos="fade-up" data-aos-duration="600">
            2023 Takeoff Begins
          </p>
          <div className="mb-8" data-aos="fade-up" data-aos-duration="600">
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <p>✅ Launched our first commercial routes across Latin America</p>
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <p>✅ Introduced our signature Skybound Plus experience</p>
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <p>✅ Designed a fleet with next-gen eco-friendly aircraft</p>
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <p>✅ Built a reputation for affordable luxury in air travel</p>
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <p>✅ Partnered with 10+ airports worldwide</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image_5}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-aos="fade-up" data-aos-duration="600" />
            <img
              src={image_6}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              data-aos="fade-up" data-aos-duration="600" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
