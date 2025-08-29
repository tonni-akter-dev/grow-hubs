import { Product } from "@/app/utils/type";
import Image from "next/image";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div
            className={`cursor-pointer group flex items-start gap-[18px] p-4 rounded-lg transition-all ease-in-out duration-100 ${product.bgEffect}`}>
            <Image className="size-[45px]" src={product.icon} alt={product.title} />
            <div>
                <h3 className={`font-bold text-neutral-10 text-body mb-1.5 transition-colors duration-200 ${product.textEffect}`}>
                    {product.title}
                </h3>
                <p className={`text-caption text-neutral-8 font-medium transition-colors duration-200 ${product.textEffect}`}>
                    {product.description}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
