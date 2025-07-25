import { PageCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PageCover = ({ url, image }: PageCardProps) => {
  return (
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
  );
};

export default PageCover;
