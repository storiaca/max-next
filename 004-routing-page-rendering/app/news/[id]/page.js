export default async function NewsSinglePage({params}) {
  const { id } = await params;
  return(
    <div>
      <h1>Single news {id}</h1>
    </div>
  )
}