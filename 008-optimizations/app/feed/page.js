import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'Browse all our X posts',
//   description: 'Browse all our posts.'
// }

export async function generateMetadata() {
  const posts = await getPosts();
  const numberOPosts = posts.length;
  return {
    title: `Browse all our ${numberOPosts} posts.`,
    description: 'Browse all our posts.'
  }
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
