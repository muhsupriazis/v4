import { withHeadingId } from "./utils";

export function H1({ children }) {
  return (
    <h1 className="text-2xl text-gray-900 font-bold mb-1">
      {withHeadingId(children)}
    </h1>
  );
}
