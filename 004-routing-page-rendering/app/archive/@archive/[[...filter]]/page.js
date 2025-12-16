import NewsList from "@/components/NewsList";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({params}) {
  const {filter} = await params
  const links = getAvailableNewsYears()
  const news = getNewsForYear(filter)

  console.log(filter);
  
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* <NewsList news={news}/> */}
    </>
  )
}