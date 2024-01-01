import { getWriting } from "@/lib/api";
import { toLongDate } from "@/lib/utils";
import { A } from "../components/a";
import Wrapper from "../wrapper";

export default async function Writing() {
  const {data} = await getWriting();
  return (
    <main className="p-4">
      <p className="mb-4">Some things I have learned in life I usually write below</p>
      {data.map(posts => (
        <Wrapper key={posts.year} year={posts.year}>
          {posts.posts.map(post => (
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
