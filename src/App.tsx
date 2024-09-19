import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { MyNavbar } from "./components/MyNavbar";
import Service from "./pages/Service";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsername(null);
    setEmail(null);
  };
  return (
    <>
      {/* <MyNavbar username={username} logout={handleLogout} /> */}
      <Routes>
        <Route path="/" element={<MyNavbar email={email} username={username} logout={handleLogout} />} >
          <Route path="/" element={<Home username={username} email={email} />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUsername} setEmail={setEmail} />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
