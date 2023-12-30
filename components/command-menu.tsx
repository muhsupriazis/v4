import {
  ArrowUpRight,
  BookMarked,
  Calculator,
  Calendar,
  CircleUserRound,
  CreditCard,
  GitMergeIcon,
  Github,
  Instagram,
  PencilLine,
  Settings,
  ShoppingCartIcon,
  Smile,
  Twitter,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
  return (
    <Command className="px-4">
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Menu">
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <PencilLine className="mr-2 h-4 w-4" />
            <span>Writing</span>
          </CommandItem>
          <CommandItem>
            <BookMarked className="mr-2 h-4 w-4" />
            <span>Reading</span>
          </CommandItem>
          <CommandItem>
            <ShoppingCartIcon className="mr-2 h-4 w-4" />
            <span>Product</span>
          </CommandItem>
          <CommandItem>
            <GitMergeIcon className="mr-2 h-4 w-4" />
            <span>Journey</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Online">
          <CommandItem>
            <Github className="mr-2 h-4 w-4" />
            <span>Github</span>
            <CommandShortcut>
              <ArrowUpRight className="h-4 w-4" />
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Twitter className="mr-2 h-4 w-4" />
            <span>Twitter</span>
            <CommandShortcut>
              <ArrowUpRight className="h-4 w-4" />
            </CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Instagram className="mr-2 h-4 w-4" />
            <span>Instagram</span>
            <CommandShortcut>
              <ArrowUpRight className="h-4 w-4" />
            </CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
