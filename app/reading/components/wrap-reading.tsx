export default function WrapReading({children, year}: {children: React.ReactNode, year: number}){
  return (
    <div>
      <h2 className="text-lg font-semibold underline">{year}</h2>
      {children}
    </div>
  );
}