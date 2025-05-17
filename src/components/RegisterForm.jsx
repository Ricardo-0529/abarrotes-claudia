import { useState } from "react";
import { auth, updateProfile } from "../firebase";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validarCorreo = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarCorreo(correo)) {
      setError("Correo inválido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
     // RegisterForm.jsx
const userCredential = await auth.createUserWithEmailAndPassword(correo, password);
await updateProfile(userCredential.user, { displayName: nombre });

      alert("Registro exitoso");
      navigate("/login");

    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado.");
      } else {
        setError("Ocurrió un error al registrar el usuario.");
      }
    }
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