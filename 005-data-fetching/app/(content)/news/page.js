import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

//import { DUMMY_NEWS } from "@/dummy-news";

export default async function NewsPage() {
  const news = getAllNews()

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
