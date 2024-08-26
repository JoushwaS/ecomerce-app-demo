// src/components/CartItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { Button, InputNumber, Row, Col, Card } from "antd";
import { removeItemFromCart, updateQuantity } from "../redux/cartSlice";
import { CartItem as CartItemType } from "../types";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Card bordered={false} style={{ marginBottom: "20px" }}>
      <Row gutter={16} align="middle">
        <Col span={4}>
          <img
            src={item.img} // Assuming `image` is the URL of the product's image
            alt={item.name}
            style={{ width: "100%", maxWidth: "80px", borderRadius: "8px" }}
          />
        </Col>
        <Col span={10}>
          <h4>{item.name}</h4>
          <p>Color: {item.colour}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            value={item.quantity}
            onChange={(value) =>
              dispatch(updateQuantity({ id: item.id, quantity: value }))
            }
          />
        </Col>
        <Col span={4}>
          <Button
            type="link"
            danger
            onClick={() => dispatch(removeItemFromCart(item.id))}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
