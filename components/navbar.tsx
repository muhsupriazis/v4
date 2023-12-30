import { CommandIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import clsx from "clsx";
import { Button } from "./ui/button";
import { DrawerMenu } from "./drawer-menu";

export default function Navbar() : JSX.Element {
  return (
    <nav className={clsx(
      "border-b-[1px] border-solid",
      "p-4"
    )}>
      <DrawerMenu />
    </nav>
  );
}
