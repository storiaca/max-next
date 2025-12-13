import Link from "next/link";

export default function NewsPage() {
  return(
    <div>
      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/1">Some news 1</Link></li>
        <li><Link href="/news/2">Some news 2</Link></li>
      </ul>
    </div>
  )
}