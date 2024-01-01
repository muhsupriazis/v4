export default function ReadingBook({title, author}) {
  return (
    <li className="my-2">
      <span>{title}</span>, by {author}
    </li>
  );
}