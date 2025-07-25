import { menuOptions, SITE_METADATA } from "@/data/constants";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

const Navbar = () => {
  return (
    <NavigationMenu className="flex gap-[12px] flex-wrap items-center justify-between max-w-[1400px] mx-auto px-8 py-6">
      <section>
        <Link href={`/`} className="text-xl font-light">
          {SITE_METADATA.title}
        </Link>
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
      <Separator />
    </NavigationMenu>
  );
};

export default Navbar;
