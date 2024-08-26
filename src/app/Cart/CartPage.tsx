// src/components/CartPage.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Col, Row, Typography } from "antd";
import CartItem from "../../components/CartItem";
import { RootState } from "../../redux/store";
import { formatCurrency } from "../../utils/helpers";
import AppLayout from "../../components/Shared/AppLayout";

const { Title } = Typography;

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <>
      <AppLayout>
        <Title level={2}>Shopping Cart</Title>
        <Row gutter={16}>
          <Col span={16}>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </Col>
          <Col span={8}>
            <Card style={{ marginTop: "20px" }}>
              <h3>Order Summary</h3>
              <p>Total Price: {formatCurrency(totalPrice || 0)}</p>
              <Button type="primary" block>
                Proceed to Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      </AppLayout>
    </>
  );
};

export default CartPage;
