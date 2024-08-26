import React from "react";
import { useSelector } from "react-redux";
// import { selectFilteredProducts } from "../redux/filterSlice";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import { useProducts } from "../api/products";

const ProductList: React.FC = () => {
  //   const filteredProducts = useSelector(selectFilteredProducts);
  const { data, isPending } = useProducts();

  console.log("data ", { isPending, data });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {!isPending ? (
        data.map((product: Product) => (
          <ProductCard key={product.id} productId={product.id} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductList;
