import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="py-40 2xl:py-60 px-8 flex flex-col items-center justify-center text-center bg-white text-black">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
        Frontera
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
        A curated view of the web’s most beautiful landing pages. Simple.
        Visual. Inspiring.
      </p>
      <Link
        href="#gallery"
        className="px-6 py-3 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white transition"
      >
        Explore Gallery
      </Link>
    </section>
  );
};

export default Hero;
