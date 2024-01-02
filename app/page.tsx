import RichText from './components/rich-text';

async function getData() {
  const res = await fetch(`${process.env.BASEURL}/api`, {
    cache: 'no-cache',
  })
  return res.json();
}

export default async function Home() {
  const { error, message, data: {description} } = await getData();

  if (error) {
    return (
      <main className="p-5">
        <div className="prose">
          <RichText content={message} />
        </div>
      </main>
    );
  }

  return (
    <main className="p-5">
      <div className="prose">
        <RichText content={description} />
      </div>
    </main>
  );
}
