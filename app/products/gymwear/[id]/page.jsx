import { BASE_URL } from "@/utils/instance";
import ViewProductMerchandise from "./_viewProductMerchandise";
export async function generateStaticParams() {
  // const ids = await fetchProductIds();
  const ids = [{ id: "1" }];
  return ids;
}

export default function ProductPage({ params }) {
  return (
    <div>
      <ViewProductMerchandise id={params.id} />
    </div>
  );
}
