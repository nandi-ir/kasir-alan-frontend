"use client";

import React, { FC, FormEvent, Fragment, ReactElement, useState } from "react";
import { ImUser } from "react-icons/im";
import { GrUnorderedList } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa6";
import { useOrderItemsState } from "@/hooks/state/useOrderItemsState";
import { formatCurrency } from "@/utils/helpers/formatCurrency";
import PaymentModal from "@/components/modal/PaymentModal";
import { TOrderItemsPayload } from "@/utils/types/order";
import { toast } from "@/hooks/use-toast";
import { useCreatePayment } from "@/hooks/api/payment/useCreatePayment";
import html2pdf from "html2pdf.js";
import { GiShoebillStork } from "react-icons/gi";

const Bill: FC = (): ReactElement => {
  const { orderItems, setOrderItems } = useOrderItemsState();
  const { mutate: createPayment } = useCreatePayment();
  const [amountPaid, setAmountPaid] = useState<number>(0);
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const totalCounted = orderItems.reduce((prev, curr) => prev + curr.price, 0);
  const totalPrice = formatCurrency(totalCounted);

  const saveOrderAndPayment = (e: FormEvent) => {
    e.preventDefault();
    const order_items_payload: TOrderItemsPayload[] = orderItems.map(
      (orderItem) => ({
        product_id: orderItem.product_id,
        quantity: orderItem.product_id,
      })
    );

    if (amountPaid !== 0) {
      createPayment(
        {
          amount_paid: amountPaid,
          order_items: order_items_payload,
        },
        {
          onSuccess: () => {
            toast({
              title: "Berhasil melakukan pembayaran",
              is: "success",
            });
          },
          onError: (error) => {
            toast({
              title: "Pembayaran gagal",
              description: JSON.stringify(error),
            });
          },
        }
      );
    }
  };

  const printBill = async () => {
    const invoice = document.querySelector("#invoice");
    html2pdf(invoice);
  };

  return (
    <div className="">
      <section className="flex justify-between items-center bg-blue-base">
        <div className="py-2 px-4 bg-blue-grey">
          <div className="rounded-full p-1 border border-blue-primary text-blue-primary">
            <ImUser size={24} />
          </div>
          <div className="mt-[2px] text-[8px] leading-[8px]">customer</div>
        </div>
        <span className="text-center text-nowrap text-2xl font-semibold capitalize">
          new customer
        </span>
        <div className="py-2 px-4 bg-blue-grey text-blue-primary">
          <GrUnorderedList size={32} />
          <div className="text-[8px] leading-[8px]">Billing List</div>
        </div>
      </section>
      <section className="">
        <button
          onClick={() => setIsDrop((prev) => !prev)}
          className="bg-white py-3 w-full"
        >
          <div className="bg-white relative mx-auto text-blue-primary">
            <span>Dine in</span>
            <FaChevronDown
              size={14}
              className={`absolute top-[6px] inline-block ml-1 ${
                isDrop ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </button>
        {isDrop && (
          <div id="invoice" className="mt-1 px-4 py-3 bg-white space-y-5">
            <div className="flex justify-between">
              <span></span>
              <span className="text-blue-primary">View</span>
            </div>
            {orderItems.map((orderItem, i) => (
              <div key={i} className="grid grid-cols-[3fr_1fr]">
                <div className="flex justify-between">
                  <span className="capitalize">{orderItem.name}</span>
                  {orderItem.quantity > 1 ? (
                    <span>x {orderItem.quantity}</span>
                  ) : (
                    ""
                  )}
                </div>
                <span className="text-end">
                  {formatCurrency(orderItem.price * orderItem.quantity)}
                </span>
              </div>
            ))}
            <div className="flex justify-between">
              <span>Sub Total :</span>
              <span>{totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Total :</span>
              <span>{totalPrice}</span>
            </div>
          </div>
        )}
        <button
          onClick={() => setOrderItems([])}
          className="my-1 py-3 bg-white w-full text-center text-[#CBCBCB] hover:text-red-500"
        >
          Clear Sale
        </button>
        <div className="pt-8 bg-white">
          <div className="grid grid-cols-2 gap-x-1">
            <button
              onClick={saveOrderAndPayment}
              className="py-3 bg-blue-grey text-center"
            >
              Save Bill
            </button>
            <button
              onClick={printBill}
              className="py-3 bg-blue-grey text-center"
            >
              Print Bill
            </button>
          </div>
          <PaymentModal
            total_price={totalPrice}
            amountPaid={amountPaid}
            setAmountPaid={setAmountPaid}
          >
            <button type="submit" className="bg-blue-grey w-full">
              <div className="flex gap-x-1 ">
                <div className="p-4 w-1/5 bg-blue-primary text-white flex justify-center">
                  <GiShoebillStork size={32} />
                </div>
                <div className="p-4 bg-blue-primary w-full text-white text-2xl font-medium">
                  Charge {totalPrice}
                </div>
              </div>
            </button>
          </PaymentModal>
        </div>
      </section>
    </div>
  );
};

export default Bill;
