// src/components/AppLayout.tsx
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const { Header, Content, Footer } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <Layout>
      <Header>
        <div
          className="text-lg font-bold text-white"
          style={{
            float: "left",
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            E-Commerce Demo App
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ float: "right" }}
          className="w-100"
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cart">
            <a href="/cart">
              Cart <FaShoppingCart />
            </a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{ padding: "20px 50px", minHeight: "calc(100vh - 134px)" }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>E-Commerce App ©{year}</Footer>
    </Layout>
  );
};

export default AppLayout;
