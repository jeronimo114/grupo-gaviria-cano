"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  amount?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "ul" | "span" | "h1" | "h2" | "h3" | "p";
};

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.85,
  direction = "up",
  distance,
  amount = 0.25,
  once = true,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const off = OFFSET[direction];
  const dist = distance ?? 32;
  const dx = direction === "left" ? dist : direction === "right" ? -dist : off.x;
  const dy = direction === "up" ? dist : direction === "down" ? -dist : off.y;

  const variants: Variants = {
    hidden: { opacity: 0, x: reduce ? 0 : dx, y: reduce ? 0 : dy, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealStagger({
  children,
  className,
  delayChildren = 0.05,
  stagger = 0.08,
  amount = 0.2,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
  amount?: number;
  once?: boolean;
  as?: "div" | "section" | "ul";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: reduce
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
