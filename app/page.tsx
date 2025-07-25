import Hero from "@/components/sections/home/Hero";
import LandingPagesGrid from "@/components/sections/home/LandingPagesGrid";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Separator />
        <LandingPagesGrid />
      </main>
    </div>
  );
}
