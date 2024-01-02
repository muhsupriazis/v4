import { toLongDate } from "@/lib/utils";
import { A } from "../components/a";
import Wrapper from "../wrapper";

async function getData() {
  const res = await fetch(`${process.env.BASEURL}/api/writing`, {
    cache: 'no-cache',
  })
  return res.json();
}

export default async function Writing() {
  const { error, message, data } = await getData();

  if(error){
    return(
      <main className="p-5">
        <div className="prose">
          <p className="text-center text-sm md:text-base">{message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="p-4">
      <p className="mb-4">Some things I have learned in life I usually write below</p>
      {data.map((posts: any) => (
        <Wrapper key={posts.year} year={posts.year}>
          {posts.posts.map((post:any) => (
            <div className="my-3" key={post.slug}>
              <A href={`/writing/${post.slug}`}>{post.title}</A>
              <p className="text-zinc-600 font-light text-sm">{toLongDate(post.createdAt)} | {post.category}</p>
            </div>
          ))}
        </Wrapper>
      ))}
    </main>
  );
}
