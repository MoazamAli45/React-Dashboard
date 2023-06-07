import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Navbar from "./components/navbar";
import { useState } from "react";
import Analytics from "./pages/Analytics";
import DataProvider from "./store/list-context";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const openDrawerHandler = (toggle) => {
    setOpenDrawer(toggle);
  };
  return (
    <BrowserRouter>
      <DataProvider>
        <Navbar onOpen={openDrawerHandler} />
        <Layout open={openDrawer}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/products" element={<Products />} exact />
            <Route path="/settings" element={<Settings />} exact />
            <Route path="/analytics" element={<Analytics />} exact />
          </Routes>
        </Layout>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
