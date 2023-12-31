export function Figure({ wide = false, children }) {
  return (
    <div
      className={`
    text-center
    ${
      wide
        ? `
      bg-gray-100
      relative
      before:bg-gray-100
      before:w-[10000%]
      before:h-[100%]
      before:content-[""]
      before:top-[0]
      before:left-[-1000px]
      before:absolute
      before:z-[-1]
      text-sm md:text-base
    `
        : ""
    }
  `}
    >
      {children}
    </div>
  );
}
