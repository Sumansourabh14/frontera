import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-24 2xl:py-32 px-8 flex flex-col items-center justify-center text-center relative">
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
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Center Layered Ring */}
      <div className="absolute left-1/2 top-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-white/10 bg-white/5 blur-2xl opacity-20 pointer-events-none" />

      {/* Grid dotted pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)] [background-size:20px_20px] z-0" />
    </section>
  );
};

export default Hero;
