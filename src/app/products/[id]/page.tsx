export default async function product( { params }: { params: { id: string } }) {
  const { id } = await params;
  return <h1>Products: {id}</h1>;
}