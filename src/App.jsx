import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tienda" element={<div>Bienvenido a la tienda 🛒</div>} />
        
        {/* 👇 Redirige la raíz "/" hacia el registro */}
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;