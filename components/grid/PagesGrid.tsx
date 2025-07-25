import { PageCardProps } from "@/types";
import PageCover from "../images/PageCover";
import landingPagesData from "@/data/landingPagesData.json";

const PagesGrid = async () => {
  const pages = landingPagesData;

  return (
    <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {pages.map((item: PageCardProps, index: number) => (
        <PageCover key={index} url={item.url} image={item.image} />
      ))}
    </div>
  );
};

export default PagesGrid;
