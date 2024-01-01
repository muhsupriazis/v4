'use client'

import * as React from "react"
import { CommandIcon, Minus, Plus } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Toggle } from "./ui/toggle"

import {
  ArrowUpRight,
  BookMarked,
  GitMergeIcon,
  Github,
  Instagram,
  PencilLine,
  ShoppingCartIcon,
  Smile,
  Twitter,
} from "lucide-react"

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function DrawerMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Toggle>
          <CommandIcon />
        </Toggle>
      </DrawerTrigger>
      <DrawerContent className="pb-5">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="pt-5">
            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage src="/profile.png" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <DrawerTitle>Muhammad Supri</DrawerTitle>
                <DrawerDescription>Frontend Engieneer</DrawerDescription>
              </div>
            </div>
          </DrawerHeader>
          <div>
            <DrawerClose asChild>
            <Command>
              <CommandList>
                <CommandGroup heading="Menu">
                  <CommandItem path="/">
                    <Smile className="mr-2 h-4 w-4" />
                    <DrawerClose asChild>
                      <span>Profile</span>
                    </DrawerClose>
                  </CommandItem>
                  <CommandItem path="/writing">
                    <PencilLine className="mr-2 h-4 w-4" />
                    <DrawerClose asChild>
                      <span>Writing</span>
                    </DrawerClose>
                  </CommandItem>
                  <CommandItem path="/reading">
                    <BookMarked className="mr-2 h-4 w-4" />
                    <DrawerClose asChild>
                      <span>Reading</span>
                    </DrawerClose>
                  </CommandItem>
                  {/* <CommandItem path="/product">
                    <ShoppingCartIcon className="mr-2 h-4 w-4" />
                    <DrawerClose asChild>
                      <span>Product</span>
                    </DrawerClose>
                  </CommandItem>
                  <CommandItem path="/journey">
                    <GitMergeIcon className="mr-2 h-4 w-4" />
                    <DrawerClose asChild>
                      <span>Journey</span>
                    </DrawerClose>
                  </CommandItem> */}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Online">
                  <CommandItem path="https://github.com/muhsupriazis">
                    <Github className="mr-2 h-4 w-4" />
                    <span>Github</span>
                    <CommandShortcut>
                      <ArrowUpRight className="h-4 w-4" />
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem path="https://twitter.com/muhsupriazis">
                    <Twitter className="mr-2 h-4 w-4" />
                    <span>Twitter</span>
                    <CommandShortcut>
                      <ArrowUpRight className="h-4 w-4" />
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem path="https://www.instagram.com/muhsupriazis">
                    <Instagram className="mr-2 h-4 w-4" />
                    <span>Instagram</span>
                    <CommandShortcut>
                      <ArrowUpRight className="h-4 w-4" />
                    </CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
