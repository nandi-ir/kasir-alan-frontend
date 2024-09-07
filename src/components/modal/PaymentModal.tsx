import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
  total_price: number | string;
  amountPaid: number;
  setAmountPaid: Dispatch<SetStateAction<number>>;
};

const PaymentModal: FC<Props> = ({
  children,
  total_price,
  amountPaid,
  setAmountPaid,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Pembayaran</DialogTitle>
          <DialogDescription>
            Jika belum yakin silahkan simpan pesanan dulu saja
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-between">
            <div className="">Total Biaya</div>
            <div className="">{total_price}</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="">
              Uang Pembeli
            </Label>
            <Input
              id="name"
              type="number"
              onChange={(e) =>
                setAmountPaid(e.currentTarget.value as unknown as number)
              }
              value={amountPaid}
              step={100}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="button">oke</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
