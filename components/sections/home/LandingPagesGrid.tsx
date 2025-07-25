import PagesGrid from "@/components/grid/PagesGrid";
import H2 from "@/components/text/H2";

const LandingPagesGrid = () => {
  return (
    <section className="w-[1400px] mx-auto px-8 py-20">
      <H2 title="Home Pages" />
      <section className="my-8">
        <PagesGrid />
      </section>
    </section>
  );
};

export default LandingPagesGrid;
