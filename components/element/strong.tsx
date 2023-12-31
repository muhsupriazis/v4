export default function Strong({ children } : {children: React.ReactNode}) {
  return (
    <strong className="text-base py-2">
      {children}
    </strong>
  );
}