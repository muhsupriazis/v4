import { client } from "@/lib/contentful";
import RichText from "./components/rich-text";

async function getData() {
  const res = await client.getEntries({ content_type: 'profile' })
  return res.items[0].fields;
}

export default async function Home() {
  const {description} = await getData();
  return (
    <main className="p-4">
      <div className="prose">
        <RichText content={description} />
      </div>
    </main>
  );
}
