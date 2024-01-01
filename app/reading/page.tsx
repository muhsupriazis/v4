import { getReading } from "@/lib/api";
import WrapReading from "./components/wrap-reading";
import ReadingBook from "./components/reading";
import Wrapper from "../wrapper";
export default async function Reading(){
  const {data} = await getReading();
  return (
    <main className="p-4">
      <p className="mb-4">Books that I have read</p>
      {data.map(readingNnYear => (
        <Wrapper key={readingNnYear.year} year={readingNnYear.year}>
          {readingNnYear.books.map(book => (
            <ReadingBook 
              key={book.title}
              title={book.title}
              author={book.author}
              url={book.reference}
            />
          ))}
        </Wrapper>
      ))}
    </main>
  );
}
