"use client";

import { useState } from "react";

const QUOTES_BY_DAY: Record<number, string> = {
  1: "Take me to the sky",
  4: "Take me to the sky",
  2: "Life is not about speed. It is about direction.",
  5: "Life is not about speed. It is about direction.",
  3: "You worked hard today too.",
  6: "You worked hard today too.",
};

export default function QuoteOfTheDay() {
  const [quote] = useState(() => {
    const day = new Date().getDay();
    return QUOTES_BY_DAY[day] ?? "Let us sing together";
  });

  return (
    <div className="text-center">
      <h3 className="font-serif-alt text-3xl text-ink sm:text-5xl">&ldquo;{quote}&rdquo;</h3>
      <p className="mt-2 font-quote text-xl text-ink sm:text-2xl">&mdash;BTS</p>
    </div>
  );
}
