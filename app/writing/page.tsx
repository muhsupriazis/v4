import { getWriting } from "@/lib/api";
import Posts from "./components/posts";
import { toLongDate } from "@/lib/utils";
import { A } from "../components/a";

export default async function Writing() {
  const {data} = await getWriting();
  return (
    <main className="p-4">
      {data.map(posts => (
        <Posts key={posts.year} year={posts.year}>
          {posts.posts.map(post => (
            <div className="my-3" key={post.slug}>
              <A href={`/writing/${post.slug}`}>{post.title}</A>
              <p className="text-zinc-300 font-light text-sm">{toLongDate(post.createdAt)} ~ {post.category}</p>
            </div>
          ))}
        </Posts>
      ))}
    </main>
  );
}
