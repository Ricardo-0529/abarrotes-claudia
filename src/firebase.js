// src/firebase.js (modo pruebas sin conexión real)

// Simulador de Firebase Authentication
export const auth = {
    createUserWithEmailAndPassword: async (email, password) => {
      console.log("🧪 [SIMULADO] Usuario creado:", email, password);
      return {
        user: {
          email,
          uid: "fake-uid-" + Math.floor(Math.random() * 10000),
        }
      };
    },
    signInWithEmailAndPassword: async (email, password) => {
      console.log("🧪 [SIMULADO] Usuario inició sesión:", email, password);
      return {
        user: {
          email,
          uid: "fake-uid-" + Math.floor(Math.random() * 10000),
        }
      };
    }
  };
  
  // Simulador de updateProfile
  export const updateProfile = async (user, data) => {
    console.log("🧪 [SIMULADO] Perfil actualizado para", user.email, "con nombre:", data.displayName);
  };