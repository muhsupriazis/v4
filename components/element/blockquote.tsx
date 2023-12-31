export default function Blockquote({ children } : {children: React.ReactNode}) {
  return (
    <blockquote className="text-base py-2">
      {children}
    </blockquote>
  );
}
