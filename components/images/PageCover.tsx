import { PageCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PageCover = ({ url, image, name, category }: PageCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            alt={`Screenshot`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex justify-between items-baseline">
        <p className="text-center font-bold text-lg">{name}</p>
        <p className="text-center text-sm text-muted-foreground">{category}</p>
      </div>
    </div>
  );
};

export default PageCover;
