"use client";

import React, { useEffect, useState, useRef } from "react";

import { cn } from "@/lib/utils"; // Optional, remove if not using

interface EmojiScrollerProps {
  emojis: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  fontSize?: number;
  className?: string;
}

const EmojiScroller: React.FC<EmojiScrollerProps> = ({
  emojis,
  direction = "left",
  speed = "normal",
  fontSize = 28,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const content = Array.from(scrollerRef.current.children);
    content.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollerRef.current?.appendChild(clone);
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const duration =
      speed === "fast" ? "10s" : speed === "normal" ? "20s" : "40s";

    containerRef.current.style.setProperty("--animation-duration", duration);
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller overflow-hidden w-full",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-2",
          start && "animate-scroll"
        )}
      >
{emojis.map((src, idx) => (
  <li key={idx} className="shrink-0 ">
    <img
      src={src}
      alt={`emoji-${idx}`}
      style={{
        height: fontSize,
        width: fontSize,
        objectFit: "contain",
      }}
      loading="lazy"
    />
  </li>
))}
      </ul>
    </div>
  );
};

export default EmojiScroller;
