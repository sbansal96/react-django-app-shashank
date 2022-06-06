import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <div className="container">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/product/:id" element={<ProductPage />} exact />
            </Routes>
          </Container>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
