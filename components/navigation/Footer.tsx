import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { menuOptions, SITE_METADATA } from "@/data/constants";
import { AuroraText } from "../magicui/aurora-text";

const Footer = () => {
  return (
    <footer className="border-t py-6 px-8 bg-zinc-950">
      <NavigationMenu className="flex flex-col md:flex-row gap-[24px] flex-wrap items-center justify-between max-w-[1600px] mx-auto px-4">
        <section className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_METADATA.title}. All rights
          reserved.
        </section>
        <NavigationMenuList>
          {menuOptions.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link href={item.destination}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <section className="text-center mt-20">
        <p className="font-bold tracking-tighter text-7xl sm:text-8xl lg:text-[11rem] xl:text-[13rem] 2xl:text-[15rem]">
          <AuroraText>{SITE_METADATA.title}</AuroraText>
        </p>
      </section>
      <Separator className="mt-6" />
    </footer>
  );
};

export default Footer;
