import { ProductType } from "@/types/product";


export type InfoProductProps = {
    product: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
    const { product } = props;
    return (
    <>
        <div className="max-w-3xl mx-auto p-6 space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
                {product.Titulo}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
                {product.Descripcion}
            </p>
        </div>
    </>
    );
};

export default InfoProduct; 