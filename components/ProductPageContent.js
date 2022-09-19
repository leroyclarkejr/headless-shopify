import Image from "next/image";
import ProductForm from "./ProductForm";

const ProductPageContent = ({ product }) => {
  return (
    <div className="sm:flex flex-row">
      <div className="relative img-container w-72 h-72">
        <h2> {product.title}</h2>
        <Image
          src={product.images.edges[0].node.originalSrc}
          alt={product.images.edges[0].node.altText}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <ProductForm product={product} />
    </div>
  );
};

export default ProductPageContent;
