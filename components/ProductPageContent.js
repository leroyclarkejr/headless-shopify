import Image from "next/image";
import ProductForm from "./ProductForm";
import Container from "./Container";

const ProductPageContent = ({ product }) => {
  return (
    <Container className=" block lg:flex lg: flex-row lg:justify-center">
      <div className="mb-6 lg:mb-0 lg:mr-6 w-full lg:max-w-md">
        <h2 className="mb-4 text-2xl font-bold"> {product.title}</h2>
        <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
          <div className="relative h-72 hover:opacity-75">
            <Image
              src={product.images.edges[0].node.originalSrc}
              alt={product.images.edges[0].node.altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <ProductForm product={product} />
    </Container>
  );
};

export default ProductPageContent;
