import FAQ from "@/components/sections/home/FAQ";
import Hero from "@/components/sections/home/Hero";
import LandingPagesGrid from "@/components/sections/home/LandingPagesGrid";
import { ReviewMarquee } from "@/components/sections/home/ReviewMarquee";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Separator />
        <section className="max-w-[1400px] mx-auto">
          <LandingPagesGrid />
        </section>
        <Separator />
        <section className="py-30">
          <ReviewMarquee />
        </section>
        <Separator />
        <section className="relative py-30 overflow-hidden">
          {/* Decorative background blobs/rings */}
          <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-cyan-400/20 rounded-full blur-2xl opacity-25 pointer-events-none z-0"></div>
          <div className="absolute top-10 right-0 w-72 h-72 bg-amber-400/20 rounded-full blur-2xl opacity-30 pointer-events-none z-0"></div>

          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mb-8">
            Have any queries?
          </h2>
          <section className="max-w-3xl mx-auto px-8">
            <FAQ />
          </section>
        </section>
      </main>
    </div>
  );
}
