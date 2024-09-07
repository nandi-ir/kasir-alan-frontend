export const formatCurrency = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Tidak menampilkan desimal
    maximumFractionDigits: 0, // Tidak menampilkan desimal
  }).format(price);
};
