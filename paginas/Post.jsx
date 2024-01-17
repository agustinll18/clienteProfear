import React, { useState } from "react";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/footer/Footer";
import { useAuth } from "../AuthContext"; // Ajusta la ruta según tu estructura de archivos

const Post = () => {
  const { username, isLoggedIn } = useAuth();
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isLoggedIn) {
        console.error("Debes iniciar sesión para realizar un post");
        return;
      }

      const response = await fetch("http://localhost:3002/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          content,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Post exitoso:", result);

        // Restablece el contenido después de realizar el post
        setContent("");
      } else {
        console.error("Error al realizar el post");
        // Manejo del error
      }
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      // Manejo del error
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="formulario">
        <form className="row g-3" onSubmit={handleSubmit}>
          <textarea
            placeholder="Max. 300 caracteres"
            tabIndex="5"
            maxLength="300"
            className="inputs"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="col-12 buttonS">
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Post;
