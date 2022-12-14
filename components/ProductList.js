import ProductCard from "./ProductCard";
import Container from "./Container";
const ProductList = ({ products }) => {
  return (
    <div className="bg-white">
      <Container>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
