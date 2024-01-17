/* import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { useAuth } from "../AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Inicio de sesión exitoso:", result);

        // Guarda el token en localStorage o en las cookies según tu preferencia
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.username);

        // Llama a la función login del contexto para actualizar la información del usuario
        login({ id: result.id, username: result.username });
      } else {
        console.error("Credenciales incorrectas");
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      alert("Error en la solicitud POST");
    }
  };

  // Si el usuario está autenticado, redirige a "/foro"
  if (isLoggedIn) {
    return <Redirect to="/foro" />;
  }

  return (
    <>
      <Navbar1 />
      <div className="containerL">
        <div className="message signup">
          <div className="btn-wrapper">
            <Link to={`/signUp`} className="button" id="login">
              Soy nuevo
            </Link>
          </div>
        </div>

        <div className="form form--login">
          <div className="form--heading">Hola de nuevo! </div>
          <form autoComplete="off">
            <label>
              Nombre de Usuario:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Contraseña:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" className="button" onClick={handleLogin}>
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
 */



import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Inicio de sesión exitoso:", result);

        // Guarda el token en localStorage o en las cookies según tu preferencia
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.username);

        // Actualiza el estado de autenticación
        setLoggedIn(true);
      } else {
        console.error("Credenciales incorrectas");
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      alert("Error en la solicitud POST");
    }
  };

  // Si el usuario está autenticado, redirige a "/foro"
  if (isLoggedIn) {
    return <Redirect to="/foro" />;
  }

  return (
    <>
      <Navbar1 />
      <div className="containerL">
        <div className="message signup">
          <div className="btn-wrapper">
            <Link to={`/signUp`} className="button" id="login">
              Soy nuevo
            </Link>
          </div>
        </div>

        <div className="form form--login">
          <div className="form--heading">Hola de nuevo! </div>
          <form autoComplete="off">
            <label>
              Nombre de Usuario:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Contraseña:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" className="button" onClick={handleLogin}>
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;