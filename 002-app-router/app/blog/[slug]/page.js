export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Single blog post page</h1>
      <p>{params.slug}</p>
    </main>
  );
}
