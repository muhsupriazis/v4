import { Caption } from "./caption";

export const Snippet = ({ children, scroll = true, caption = null }) => (
  <div className="my-6">
    <pre
      className={`
      p-4
      text-sm
      bg-gray-800 text-white
      ${
        scroll
          ? "overflow-scroll"
          : "whitespace-pre-wrap break-all overflow-hidden"
      }
    `}
    >
      <code>{children}</code>
    </pre>

    {caption != null ? <Caption>{caption}</Caption> : null}
  </div>
);
