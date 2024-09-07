"use client";

import React, { FC, ReactElement } from "react";
import Bill from "./bill";
import ProductItem from "@/components/item/ProductItem";
import { useGetProducts } from "@/hooks/api/product/useGetProducts";

const HomeModule: FC = (): ReactElement => {
  const { data: products } = useGetProducts();

  return (
    <div className="grid grid-cols-7 p-8 gap-x-8 min-w-screen min-h-screen">
      <div className="col-span-4 grid grid-cols-4 gap-x-6 gap-y-4">
        {products?.data.map((productItem, i) => (
          <ProductItem key={i} item={productItem} />
        ))}
      </div>
      <div className="col-span-3">
        <Bill />
      </div>
    </div>
  );
};

export default HomeModule;
