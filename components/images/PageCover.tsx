import Image from "next/image";
import Link from "next/link";

const PageCover = ({ url }: { url: string }) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-md group">
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={`https://api.microlink.io/?url=${encodeURIComponent(
            url
          )}&screenshot=true&meta=false&embed=screenshot.url`}
          alt={`Screenshot`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default PageCover;
