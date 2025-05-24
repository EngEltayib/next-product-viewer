import ProductCard from "@/components/ProductCard";
export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productTitle={product.title}
          productPrice={product.price}
          productImage={product.image}
          productId={product.id}
        />
      ))}
    </div>
  );
}
