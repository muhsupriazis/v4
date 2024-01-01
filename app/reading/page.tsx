import { getReading } from "@/lib/api";
import WrapReading from "./components/wrap-reading";
import ReadingBook from "./components/reading";
export default async function Reading(){
  const {data} = await getReading();
  return (
    <main className="p-4">
      {data.map(readingNnYear => (
        <WrapReading key={readingNnYear.year} year={readingNnYear.year}>
          {readingNnYear.books.map(book => (
            <ReadingBook key={book.title} title={book.title} author={book.author}/>
          ))}
        </WrapReading>
      ))}
    </main>
  );
}
