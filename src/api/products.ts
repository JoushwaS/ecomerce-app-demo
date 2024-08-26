import { useQuery } from "@tanstack/react-query";

export const fetchProducts = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/benirvingplt/products/products"
  );
  return response.json();
};

export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};
