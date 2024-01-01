import { fetchData } from "@/lib/api";
import RichText from "./components/rich-text";

export default async function Home() {
  const profile = await fetchData("profile");
  const data =  profile[0].fields;
  const { description } = data;
  return (
    <main className="p-5">
      <div className="prose">
        <RichText content={description} />
      </div>
    </main>
  );
}
