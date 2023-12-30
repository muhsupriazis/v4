'use client'

import * as React from "react"
import { CommandIcon, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Toggle } from "./ui/toggle"
import { CommandMenu } from "./command-menu"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerMenu() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Toggle>
          <CommandIcon />
        </Toggle>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <DrawerTitle>Muhammad Supri</DrawerTitle>
                <DrawerDescription>Frontend Engieneer</DrawerDescription>
              </div>
            </div>
          </DrawerHeader>
          <div>
            <CommandMenu />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
