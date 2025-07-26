import { NumberTicker } from "@/components/magicui/number-ticker";

const Stats = () => {
  return (
    <section className="px-8 py-20">
      <section className="my-8 text-center">
        <div>
          <NumberTicker
            value={47}
            className="whitespace-pre-wrap text-8xl font-bold tracking-tighter text-black dark:text-white"
          />
          <p className="text-muted-foreground mt-2">Websites and counting</p>
        </div>
      </section>
    </section>
  );
};

export default Stats;
