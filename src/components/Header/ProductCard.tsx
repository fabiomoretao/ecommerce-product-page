import Trash from "../../assets/icon-delete.svg";

type ProductCardProps = {
  thumbnail: string;
  productName: string;
  productPrice: number;
  quantity: number;
};

export default function ProductCard({
  thumbnail,
  productName,
  productPrice,
  quantity,
}: ProductCardProps) {
  return (
    <div className="flex max-h-[8vh] gap-4 items-center mx-4">
      <img src={thumbnail} className="max-h-[8vh] rounded-sm object-cover" />
      <div className="max-w-[50vw]">
        <p className="truncate">{productName}</p>
        <p>
          ${productPrice} X {quantity}{" "}
          <strong>${quantity * productPrice}</strong>
        </p>
      </div>
      <img src={Trash} className="ml-auto" />
    </div>
  );
}
