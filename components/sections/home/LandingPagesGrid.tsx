import PagesGrid from "@/components/grid/PagesGrid";
import H2 from "@/components/text/H2";

const LandingPagesGrid = () => {
  return (
    <section id="gallery" className="px-8 py-20">
      <H2 title="Home Pages" />
      <section className="my-8">
        <PagesGrid />
      </section>
    </section>
  );
};

export default LandingPagesGrid;
