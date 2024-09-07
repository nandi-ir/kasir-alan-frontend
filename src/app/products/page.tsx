import React, { ReactElement } from "react";
import { NextPage } from "next";
import ProductsModule from "@/modules/products/module";

const ProductsPage: NextPage = (): ReactElement => {
  return <ProductsModule />;
};

export default ProductsPage;
