import Link from "next/link";
import React from "react";

const metadata = {
  title: "Product Details",
  description: "Product Details",
};

const ProductDetails = async ({ params }) => {
  let productId = await params.Id;
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await data.json();

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full dark:hidden" src={product.image} alt="" />
            <img
              className="w-full hidden dark:block"
              src={product.image}
              alt=""
            />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                {product.price}
              </p>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {product.description}
            </p>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <Link
              href="/"
              className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
