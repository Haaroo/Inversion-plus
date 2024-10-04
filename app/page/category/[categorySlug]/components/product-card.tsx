/* eslint-disable @next/next/no-img-element */
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ProductType } from "@/types/product";

type ProductCardProps = {
  product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
  const {product} = props
  return(
    <Link href={`/product/${product.slug}`}
    className="relative p-2 transition-all duration-100 rounded-lg hover:shadow"
    >
      <div className="flex items-center justify-between gap-3 px-2 z-[-1] top-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit">{product.genero}</p>
      </div>
    </Link>
  )
}

export default ProductCard;