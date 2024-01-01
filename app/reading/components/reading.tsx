import ExLink from "@/app/components/external-link";
import { ArrowUpRight } from "lucide-react";

export default function ReadingBook({title, author, url}) {
  return (
    <li className="my-2 text-sm md:text-base">
      <ExLink url={url}>{title}</ExLink>, by {author}
    </li>
  );
}