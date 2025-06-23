import { FocusCards } from "../ui/focus-cards";
import React from "react";

import Silver from '../../assets/images/silver.jpg';
import Gold from '../../assets/images/gold.jpg';
import Platinium from '../../assets/images/platinium.jpg';
import { text } from "framer-motion/client";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Class Silvier",
      src: Silver,
    },
    {
      title: "Class Gold",
      src: Gold,
    },
    {
      title: "Class Platinium",
      src: Platinium,
    },
  ];

  return <FocusCards cards={cards} />;
}
