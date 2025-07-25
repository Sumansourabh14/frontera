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
        <section className="max-w-3xl mx-auto py-30 px-8">
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mb-8">
            Have any queries?
          </h2>
          <FAQ />
        </section>
      </main>
    </div>
  );
}
