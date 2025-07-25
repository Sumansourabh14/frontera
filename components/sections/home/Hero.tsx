import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="py-24 2xl:py-40 px-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 max-w-4xl">
        Your favorite pages, <AuroraText>all at one place</AuroraText>
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-8">
        A curated view of the web’s most beautiful landing pages. Simple.
        Visual. Inspiring.
      </p>
      <Link
        href="#gallery"
        className="px-6 py-3 text-sm font-medium border rounded-full transition"
      >
        Explore Gallery
      </Link>
    </section>
  );
};

export default Hero;
