"use client";

import ProductDeleteModal from "@/components/modal/ProductDeleteModal";
import { Button } from "@/components/ui/button";
import { useGetProducts } from "@/hooks/api/product/useGetProducts";
import Link from "next/link";
import React, { FC, ReactElement, useEffect, useState } from "react";

const ProductsModule: FC = (): ReactElement => {
  const { data: productList, refetch } = useGetProducts();
  const [deletedId, setDeletedId] = useState<number | null>(null);
  let productData = productList?.data;

  useEffect(() => {
    if (deletedId) {
      productData = productData?.filter((item) => item.id !== deletedId);
      // refetch();
    }
  }, [deletedId]);

  return (
    <div className="mt-12 px-12">
      <div className="p-8 relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <Button asChild className="bg-blue-600 px-12 mb-8">
          <Link href="/products/create">Add +</Link>
        </Button>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productData?.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4 flex gap-x-2">
                  <ProductDeleteModal
                    id={product.id}
                    setDeletedId={setDeletedId}
                  >
                    <Button variant="destructive">Hapus</Button>
                  </ProductDeleteModal>
                  <Button asChild>
                    <Link href={`/products/edit/${product.id}`}>Edit</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/products/${product.id}`}>Detail</Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsModule;
