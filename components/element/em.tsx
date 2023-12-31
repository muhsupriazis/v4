export default function Em({ children } : {children: string}) {
  return (
    <em className="text-base py-2">
      {children}
    </em>
  );
}
