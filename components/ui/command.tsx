import Link from "next/link";

const Command = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <div className="p-2">
      {children}
    </div>
  )
};

const CommandGroup = ({ heading, children } : {
  heading: string,
  children: React.ReactNode
}) => {
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-2 ml-3">{heading}</p>
      <div>
        {children}
      </div>
    </div>
  )
}

const CommandList = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {children}
    </div>
  )
};

const CommandItem = ({ children, path } : {
  children: React.ReactNode
  path: string
}) => {
  return (
    <Link href={path} className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-zinc-100">
      {children}
    </Link>
  )
};

const CommandSeparator = () => {
  return (
    <div>
      <hr />
    </div>
  )
}

const CommandShortcut = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <div className="text-zinc-400">
      {children}
    </div>
  )
};

export {
  Command,
  CommandGroup,
  CommandList,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
}
