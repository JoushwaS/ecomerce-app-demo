// src/components/ProductCard.tsx
import React from "react";
import { Card, Button, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, updateQuantity } from "../redux/cartSlice";
import { Product } from "../types";
import { AppDispatch } from "../redux/store";
import { RootState } from "@reduxjs/toolkit/query";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item: any) => item.id === product.id)
  );

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  const handleIncreaseQuantity = () => {
    dispatch(
      updateQuantity({ id: product.id, quantity: cartItem.quantity + 1 })
    );
  };

  const handleDecreaseQuantity = () => {
    dispatch(
      updateQuantity({ id: product.id, quantity: cartItem.quantity - 1 })
    );
  };

  return (
    <Card
      title={product.name}
      className="text-md"
      cover={<img src={product.img} alt={product.name} />}
    >
      <p>Color: {product.colour}</p>
      <p>Price: ${product.price}</p>

      {cartItem ? (
        <div className="flex items-center justify-center space-x-2 w-100">
          <Button
            onClick={handleDecreaseQuantity}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            -
          </Button>
          <InputNumber
            min={1}
            value={cartItem.quantity}
            // onChange={(value) =>
            //   value && dispatch(increaseQuantity(product.id))
            // }
            readOnly
            className="text-center w-16"
          />
          <Button
            onClick={handleIncreaseQuantity}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            +
          </Button>
        </div>
      ) : (
        <Button
          type="primary"
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Add to Cart
        </Button>
      )}
    </Card>
  );
};

export default ProductCard;
