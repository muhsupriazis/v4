import clsx from "clsx";
import { DrawerMenu } from "./drawer-menu";

export default function Navbar() : JSX.Element {
  return (
    <nav className={clsx(
      "border-b-[1px] border-solid",
      "p-2"
    )}>
      <DrawerMenu />
    </nav>
  );
}
