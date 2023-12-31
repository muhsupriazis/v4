export default function P({ children } : {children: React.ReactNode}) {
  return (
    <p className="text-base py-2">
      {children}
    </p>
  );
}