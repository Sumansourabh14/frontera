import Hero from "@/components/sections/home/Hero";
import LandingPagesGrid from "@/components/sections/home/LandingPagesGrid";
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
      </main>
    </div>
  );
}
