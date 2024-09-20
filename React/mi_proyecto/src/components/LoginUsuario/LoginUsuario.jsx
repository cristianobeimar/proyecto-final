import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../fireBase/credenciales";
import "./usuario.css";

export const LoginUsuario = () => {
  const [Registrado, setRegistrado] = useState(false);
  const [email, setemail] = useState("");
  const [contraseña, setcontrasena] = useState("");
  const [Usuario, setUsuario] = useState(null);

  // Función para registrar usuario
  const RegistrarUsuario = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, contraseña);
    } catch (error) {
      console.log(error);
    }
  };

  // createUserWithEmailAndPassword esta Función es de fireBase el cual me permite crear nuevo usuario
  const crearUsuario = async (e) => {
    e.preventDefault();
    try {
      const UsuarioCredenciales = await createUserWithEmailAndPassword(
        auth,
        email,
        contraseña
      );
      console.log("Se creó el usuario");
      const user = UsuarioCredenciales.user;

      // Hacer fetch para guardar los datos del usuario en la base de datos
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo: email, id_usuario: user.uid }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // onAuthStateChanged me sirve para realizar Verificación de si hay un usuario autenticado
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUsuario(user);
  //       console.log("Hay usuario autenticado:", user.email);
  //     } else {
  //       setUsuario(null);
  //       console.log("No hay usuario autenticado");
  //     }
  //   });
  // }, []);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
        console.log("Hay usuario autenticado:", user.email);
  
        // Inicializar carrito vacío si es un nuevo inicio de sesión
        const existingCart = localStorage.getItem('cart');
        if (!existingCart) {
          localStorage.setItem('cart', JSON.stringify([]));
        }
      } else {
        setUsuario(null);
        console.log("No hay usuario autenticado");
      }
    });
  }, []);
  return (
    <>
      <form
        onSubmit={(e) => (Registrado ? RegistrarUsuario(e) : crearUsuario(e))}
      >
        <h1>{Registrado ? "Ingresar" : "Crear Cuenta"}</h1>
        <input
          value={email}
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email o número de celular"
        />
        <input
          value={contraseña}
          type="password"
          onChange={(e) => setcontrasena(e.target.value)}
          placeholder="Contraseña"
        />

        <button className="buut" type="submit">
          {Registrado ? "Ingresar" : "Crear Cuenta"}
        </button>
      </form>
      <button
        className="button"
        onClick={() => {
          setRegistrado(!Registrado);
        }}
      >
        {Registrado
          ? "¿Aún no tienes cuenta? Crea una aquí"
          : "¿Ya tienes cuenta? Inicia sesión aquí"}
      </button>
    </>
  );
};
