// import { getProducts } from "@/utils/helper";
"use client";
import { BASE_URL } from "@/utils/instance";
import ViewProduct from "./_viewProduct";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";

// async function fetchProductIds() {
//   const response = await axios.get(`${BASE_URL}/drinks/product/`);
//   const products = response.data.results;
//   return products.map((product) => ({ id: product.id + "" }));
// }

export async function generateStaticParams() {
  const ids = [{ id: "1" }];
  return ids;
}

export default function ProductPage() {
  const params = useParams();

  useEffect(() => {
    console.log("params", params);
  }, [params]);

  return (
    <div>
      <ViewProduct id={params.id} />
    </div>
  );
}
