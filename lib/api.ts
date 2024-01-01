import { client } from "./contentful";

export async function fetchData(content: string) {
  const res = await client.getEntries({ content_type: content });
  return res.items;
}

export async function getWriting() {
  const writings  = await fetchData("writing");
  const postOnYear:any = []
  writings.forEach((post : any) => {
    const createdAt = new Date(post.sys.createdAt);
    const updatedAt = new Date(post.sys.updatedAt);
    const category = post.fields.category.fields.label;
    const year = createdAt.getFullYear();
    const blog  = {year, ...post.fields, createdAt, updatedAt, category}
    postOnYear.push(blog) 
  });

  const data:any = []
  postOnYear.forEach(post => {
    const year = post.year;
    const index = data.findIndex((item: any) => item.year === year);
    if(index === -1) {
      data.push({year, posts: [post]})
    } else {
      data[index].posts.push(post)
    }
  });

  const error = false;
  const message = 'Helo World';
  return {data, error, message};
}