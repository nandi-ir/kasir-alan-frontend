"use client";

import { useCreateProduct } from "@/hooks/api/product/useCreateProduct";
import { toast } from "@/hooks/use-toast";
import React, { FC, FormEvent, ReactElement, useRef } from "react";

const ProductsCreate: FC = (): ReactElement => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const { mutate: createProduct } = useCreateProduct();

  const onCreateProduct = (e: FormEvent) => {
    e.preventDefault();

    createProduct(
      {
        name: nameRef.current?.value as string,
        price: parseInt(priceRef.current?.value as unknown as string),
        image: imageRef.current?.value as string,
      },
      {
        onSuccess: () => {
          toast({
            title: "Produk baru berhasil dibuat",
            is: "success",
          });
        },
        onError: (error) => {
          toast({
            title: "gagal",
            description: JSON.stringify(error),
          });
        },
      }
    );
  };

  return (
    <form onSubmit={onCreateProduct} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nama Produk
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Harga
        </label>
        <input
          type="number"
          id="price"
          ref={priceRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          URL Gambar
        </label>
        <input
          type="text"
          id="image"
          ref={imageRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductsCreate;
