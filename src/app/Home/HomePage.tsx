// src/components/HomePage.tsx
import React, { useState } from "react";
import { Row, Col, Spin } from "antd";
import ProductCard from "../../components/ProductCard";
import Filter from "../../components/Shared/Filter";
import { Product } from "../../types";
import { useProducts } from "../../api/products";
import AppLayout from "../../components/Shared/AppLayout";
const HomePage: React.FC = () => {
  const { data, error, isLoading } = useProducts();
  const [colorFilter, setColorFilter] = useState<string>("");

  if (isLoading) return <Spin />;
  if (error) return <p>Error loading products</p>;

  const filteredProducts = colorFilter
    ? data?.filter((product: Product) => product.colour === colorFilter)
    : data;

  return (
    <>
      <AppLayout>
        <Filter setColorFilter={setColorFilter} />
        <Row gutter={16}>
          {filteredProducts?.map((product: Product) => (
            <Col span={6} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </AppLayout>
    </>
  );
};

export default HomePage;
