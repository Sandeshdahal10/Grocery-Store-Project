import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

/**
 * BestSeller
 *
 * Functional React component that renders a "Best Sellers" section.
 *
 * Behavior:
 * - Reads `products` from AppContext via useAppContext().
 * - Filters for in-stock items, takes up to 5 items, and renders each with ProductCard.
 * - Provides a responsive grid layout with a section title.
 *
 * Props: none (consumes products from AppContext).
 *
 * Returns: JSX element containing a section title and a responsive grid of ProductCard components.
 */

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-6 mt-6 lg:grid-cols-5 ">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
