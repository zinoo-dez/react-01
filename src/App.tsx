import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { MyNavbar } from "./components/MyNavbar";
import Service from "./pages/Service";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import CategoryProducts from "./components/CategoryProduct";


function App() {

  return (
    <>
      {/* <MyNavbar username={username} logout={handleLogout} /> */}
      <Routes>
        <Route path="/" element={<MyNavbar />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path={`/categories/:id/products`} element={<CategoryProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
