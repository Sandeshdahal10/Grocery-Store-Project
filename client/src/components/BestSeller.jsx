import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-6 mt-6 lg:grid-cols-5 ">
        {products.filter((product) => product.inStock).slice(0,5).map((product,index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
