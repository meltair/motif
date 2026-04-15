"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroVerticalShowcase() {
  const isMobileStatic = useMediaQuery("(max-width: 899px)");

  return (
    <div className="relative mx-auto -mt-20 -mb-18 h-[900px] w-full">
      <div className="pointer-events-none absolute inset-0 rounded-[12px] [background-size:18px_18px]" />

      <div className="relative z-10 flex h-full gap-[20px]">
        <ShowcaseColumn
          direction="up"
          duration={60}
          isMobileStatic={isMobileStatic}
          order={1}
        />
        <ShowcaseColumn
          direction="down"
          duration={60}
          isMobileStatic={isMobileStatic}
          order={2}
        />
      </div>
    </div>
  );
}

function ShowcaseColumn({
  direction,
  duration,
  isMobileStatic,
  order,
}: {
  direction: "up" | "down";
  duration: number;
  isMobileStatic: boolean;
  order: number;
}) {
  const unitRef = useRef<HTMLDivElement | null>(null);
  const [unitHeight, setUnitHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (unitRef.current) {
        setUnitHeight(unitRef.current.offsetHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const animateY =
    isMobileStatic || unitHeight === 0
      ? undefined
      : direction === "up"
        ? [0, -unitHeight]
        : [-unitHeight, 0];

  return (
    <div className="relative h-full min-w-[260px] flex-1 overflow-hidden rounded-[12px]">
      <motion.div
        className="flex flex-col"
        animate={animateY ? { y: animateY } : undefined}
        transition={
          isMobileStatic || unitHeight === 0
            ? undefined
            : {
                duration,
                repeat: Infinity,
                ease: "linear",
              }
        }
      >
        <div ref={unitRef}>
          <ShowcaseUnit order={order} />
        </div>

        <ShowcaseUnit order={order} />
      </motion.div>
    </div>
  );
}
function ShowcaseUnit({ order }: { order: number }) {
  return (
    <div className="pb-6">
      <div className="relative w-full overflow-hidden rounded-[12px]">
        <Image
          src={`/vertical_showcase_${order}.png`}
          alt="Showcase preview"
          width={260}
          height={1600}
          className="block h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}