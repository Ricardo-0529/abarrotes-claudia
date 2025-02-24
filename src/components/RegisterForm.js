import { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validarCorreo = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarCorreo(correo)) {
      setError("Correo inválido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setError(""); // Si todo está bien, limpiar errores

    console.log("Registro exitoso:", { nombre, correo, password });
    alert("Registro exitoso");
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label>Correo:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterForm;