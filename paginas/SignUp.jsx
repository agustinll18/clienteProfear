import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [club, setClub] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const clubOptions = ["Boca", "River", "Racing"];

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignUp = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, club }),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", username);
        setIsLoggedIn(true);
        history.push("/foro");
      } else {
        console.error("Error al crear el usuario");
        alert("Error al crear el usuario");
      }
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      alert("Error en la solicitud POST");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar1 isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="containerL">
        <div className="message signup">
          <div className="btn-wrapper">
            <Link to={`/login`} className="button" id="login">
              {" "}
              Loguearse
            </Link>
          </div>
        </div>
        <div className="form form--signup">
          <div className="form--heading">Bienvenido! Sumate</div>
          <form autoComplete="off">
            <label>
              Usuario:
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
            <label>
              Equipo:
              <select
                value={club}
                onChange={(e) => setClub(e.target.value)}
                required
              >
                <option value="" disabled>
                  Selecciona un equipo
                </option>
                {clubOptions.map((club) => (
                  <option key={club} value={club}>
                    {club}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <button type="button" className="button" onClick={handleSignUp}>
              Sumarse
            </button>
          </form>
        </div>
        <div className="form form--login">
          <div className="form--heading">Hola de nuevo! </div>
          <form autoComplete="off">
            <input type="text" placeholder="Nombre" required />
            <input type="password" placeholder="Contraseña" required />
            <button className="button">Loguearse</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
