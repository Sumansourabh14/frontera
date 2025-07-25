import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Aarav Mehta",
    username: "@aaravm",
    body: "Smooth, fast, and actually useful — finally something that works.",
    img: "https://avatar.vercel.sh/aarav",
  },
  {
    name: "Sofia García",
    username: "@sofia",
    body: "It does exactly what I needed, without any of the fluff.",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Liam Johnson",
    username: "@liamj",
    body: "Was skeptical at first, but now I use it every day.",
    img: "https://avatar.vercel.sh/liam",
  },
  {
    name: "Elena Petrova",
    username: "@elenap",
    body: "Simple, clean, and actually thought through. Love it.",
    img: "https://avatar.vercel.sh/elena",
  },
  {
    name: "Kabir Singh",
    username: "@kabir",
    body: "Tiny detail: it just feels good to use. That’s rare.",
    img: "https://avatar.vercel.sh/kabir",
  },
  {
    name: "Noah Williams",
    username: "@noahw",
    body: "Tried a bunch of tools — this one finally stuck.",
    img: "https://avatar.vercel.sh/noah",
  },
];

const reviews2 = [
  {
    name: "Neha Kapoor",
    username: "@nehak",
    body: "Exactly what I was looking for. Super clean and efficient.",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Carlos Martínez",
    username: "@carlosm",
    body: "It’s rare to find something this polished right out of the box.",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Emma Fischer",
    username: "@emmaf",
    body: "Lightweight, fast, and no unnecessary steps. Love it.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Rohan Desai",
    username: "@rohand",
    body: "This replaced three other tools I was using. That says a lot.",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Lucas Brown",
    username: "@lucasb",
    body: "I’ve been recommending this to everyone on my team.",
    img: "https://avatar.vercel.sh/lucas",
  },
  {
    name: "Isabella Rossi",
    username: "@isabellar",
    body: "The attention to detail here is seriously impressive.",
    img: "https://avatar.vercel.sh/isabella",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews2.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ReviewMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
