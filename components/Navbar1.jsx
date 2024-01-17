import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

function Navbar1({ isLoggedIn, username, handleLogin, handleLogout }) {
  const handleLoginClick = () => {
    if (isLoggedIn) {
      // Si hay una sesión activa, se hace clic en "Cerrar sesión"
      handleLogout();
    } else {
      // Si no hay una sesión activa, se hace clic en "Iniciar sesión / Registro"
      handleLogin();
    }
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <h1>
            <b>Profears <span className="stars">★★★</span> </b>
          </h1>
        </Navbar.Brand>
        <DarkModeToggle></DarkModeToggle>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <div className="nav-link">
                  <strong>Bienvenido, {username}!</strong>
                </div>
                <button className="loginB" onClick={handleLoginClick}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link className="nav-link links" to={`/login`}>
                <button className="loginB" onClick={handleLoginClick}>
                  Iniciar sesión / Registro
                </button>
              </Link>
            )}
            <Link className="nav-link links" to={`/campeones`}>
              <strong className="stars">★★★</strong>
            </Link>
            <Link className="nav-link links" to={`/foro`}>
              <strong>FORO</strong>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
