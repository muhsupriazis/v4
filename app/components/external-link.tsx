import Link from "next/link";

export default function ExLink({
  children, url
} : {
  children: React.ReactNode, url: string
}) {
  return (
    <Link className="underline" href={url}>{children}</Link>
  )
}