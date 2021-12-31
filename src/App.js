import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./routes/landingPage/LandingPage";
import ProductDetailPage from "./routes/ProductDetailPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
