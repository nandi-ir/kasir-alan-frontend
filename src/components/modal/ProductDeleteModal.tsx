import React, {
  Dispatch,
  FC,
  FormEvent,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteProduct } from "@/hooks/api/product/useDeleteProduct";
import { toast } from "@/hooks/use-toast";
import { Button } from "../ui/button";

type Props = {
  children: ReactNode;
  id: number;
  setDeletedId: Dispatch<SetStateAction<number | null>>;
};

const ProductDeleteModal: FC<Props> = ({
  children,
  id,
  setDeletedId,
}): ReactElement => {
  const { mutate: deleteProduct } = useDeleteProduct();
  const [isOpen, setIsOpen] = useState(false);

  const onDeleteProduct = (e: FormEvent) => {
    e.preventDefault();

    deleteProduct(id, {
      onSuccess: () => {
        setIsOpen(false);
        setDeletedId(id);
        toast({
          title: "Berhasil menghapus",
          is: "success",
        });
      },
      onError: (error) => {
        toast({
          title: "Hapus gagal",
          description: JSON.stringify(error),
        });
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <form onSubmit={onDeleteProduct} action="">
            <DialogTitle>Kamu yakin ingin menghapus produk ini?</DialogTitle>
            <DialogDescription className="pt-8 flex justify-around">
              <Button type="submit" variant="destructive">
                Hapus
              </Button>
              <Button onClick={() => setIsOpen(false)} variant="ghost">
                Tidak
              </Button>
            </DialogDescription>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDeleteModal;
