import Link from "next/link";

const ProductCard = ({
  productTitle,
  productPrice,
  productImage,
  productId,
}) => {
  return (
    <div
      key={productId}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="p-8 rounded-t-lg"
        src={productImage}
        alt="product image"
      />
      {/* Product Details (Title and Price) */}
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {productTitle}
        </h5>
        <footer className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${productPrice}
          </span>
          {/* View Product Button */}
          <Link
            href={`/product/${productId}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Product
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default ProductCard;
