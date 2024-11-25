/* eslint-disable @next/next/no-img-element */
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ProductType } from "@/types/product";
import IconButton from "@/components/icon-button";


type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;  
  const router = useRouter();

  return (
    <Link
  href={`/page/product/${product.slug}`}
  className="flex items-center justify-center bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-50 transition-all duration-200 p-4 w-full max-w-xs mx-auto"
>
  <p className="text-center text-xl font-semibold uppercase tracking-wider">
    {product.origin}
  </p>
  <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() =>
                      router.push(`/product/${product.slug}`)
                    }
                    icon={<Expand size={20} className="text-gray-600" />}
                  />
  </div>
</Link>

  );
};

export default ProductCard;