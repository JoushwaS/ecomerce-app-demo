import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Suspense } from "react";
import { Loader } from "./components/Shared/Loader";
const HomePage = React.lazy(() => import("./app/Home/HomePage"));
const CartPage = React.lazy(() => import("./app/Cart/CartPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<Loader />}>
                <CartPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
