"use client";

import { useOrderItemsState } from "@/hooks/state/useOrderItemsState";
import React, { FC, ReactElement } from "react";

type Props = {
  item: {
    name: string;
    image: string | null;
    id: number;
    price: number;
  };
};

const ProductItem: FC<Props> = ({ item }): ReactElement => {
  const { orderItems, setOrderItems } = useOrderItemsState();

  const addOrderItems = () => {
    const copy = orderItems.map((item) => ({ ...item })); // Deep copy tiap item

    const index = copy.findIndex((val) => val.product_id === item.id);

    // Jika item ditemukan, tambahkan quantity
    if (index !== -1) {
      copy[index].quantity += 1;
      setOrderItems(copy);
    } else {
      setOrderItems([
        ...copy,
        {
          product_id: item.id,
          quantity: 1,
          name: item.name,
          price: item.price,
        },
      ]);
    }
  };

  const abbrevation =
    item.name.charAt(0).toUpperCase() + item.name.charAt(1).toLowerCase();

  return (
    <button onDoubleClick={addOrderItems} className="bg-white shadow-sm">
      <div className="flex flex-col gap-y-1">
        <div
          style={{
            backgroundImage: `url('${item.image ? item.image : ""}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="relative overflow-hidden w-full h-[120px]"
        >
          {!item.image && (
            <div className="absolute top-0 left-0 w-full h-full bg-grey-primary place-content-center">
              <div className="text-6xl font-medium text-white">
                {abbrevation}
              </div>
            </div>
          )}
        </div>
        <div className="p-[2px] text-center font-medium capitalize">
          {item.name}
        </div>
      </div>
    </button>
  );
};

export default ProductItem;
