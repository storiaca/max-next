export default function MealSinglePage({ params }) {
  return (
    <main>
      <h1>Meals single page</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
