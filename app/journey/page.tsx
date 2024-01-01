import { getJourney } from "@/lib/api";

export default async function Journey() {
  const {data} = await getJourney();
  return (
    <main className="p-4">
      <h1>Journey</h1>
    </main>
  );
}