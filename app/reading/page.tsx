import ReadingBook from './components/reading';
import Wrapper from '../wrapper';

async function getData() {
  const res = await fetch(`${process.env.BASEURL}/api/reading`, {
    cache: 'no-cache',
  })
  return res.json();
}

export default async function Reading(){
  const {error, message, data} = await getData();

  if(error){
    return (
      <main className="p-5">
        <div className="prose">
          <p className="text-center text-sm md:text-base">{message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="p-4">
      <p className="mb-4">Books that I have read</p>
      {data.map((readingNnYear: any) => (
        <Wrapper key={readingNnYear.year} year={readingNnYear.year}>
          {readingNnYear.books.map((book: any) => (
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
