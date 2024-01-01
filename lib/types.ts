export interface WritingsTypes {
  year: string
  posts: {
    slug: string,
    title: string,
    date: string,
    category: string,
  }[]
}