// Importa React, useState y useEffect
import React, { useState, useEffect } from "react";

// Importa imágenes y otros recursos
import imagenDefault from "../multimedia/afa.png";
import bocaJuniors from "../multimedia/clubes1ra/bj.png";
import riverPlate from "../multimedia/clubes1ra/Escudo_del_C_A_River_Plate.svg.png";
import racingClub from "../multimedia/clubes1ra/racing.png";

// Mapea los nombres de los clubes a las imágenes correspondientes
const clubImages = {
  "Boca": bocaJuniors,
  "River": riverPlate,
  "Racing": racingClub,
};

// Componente para mostrar un post individual
const Post = ({ post, userLiked, handleLike, username, club }) => (
  <div id="contenedor" className="postMessageContainer">
    <div className="dataUser">
      <div className="foto">
        <img src={clubImages[club] || imagenDefault} alt="" />
      </div>
      <h3>{username}</h3>
      <h5 className="date">
        <em>
          <small>{post.date}</small>
        </em>
      </h5>
    </div>

    <div className="pText">
      <p id="parrafo">{post.content}</p>
    </div>

    {/* Renderiza el botón de like para cada post */}
    <button onClick={() => handleLike(post.id)}>
      {userLiked ? "Unlike" : "Like"}
    </button>
  </div>
);

// Componente principal que obtiene y muestra los posts de un usuario
const GetApi = ({ userPost, order }) => {
  // Estado local para la cantidad de likes y si el usuario dio like
  const [likes, setLikes] = useState(userPost?.likes ? userPost.likes.length : 0);
  const [userLiked, setUserLiked] = useState(false);

  // Efecto para verificar si el usuario actual dio like al post
  useEffect(() => {
    // Verifica si userPost y userPost.likes son definidos antes de usar some
    if (userPost && userPost.likes) {
      // Verifica si el usuario actual ha dado like
      const currentUserLiked = userPost.likes.some(
        (like) => like.userId === "ID_DEL_USUARIO_ACTUAL"
      );
      setUserLiked(currentUserLiked);
    }
  }, [userPost.likes]);

  // Función para manejar el like/deslike de un post
  const handleLike = async (postId) => {
    try {
      // Realiza la petición al servidor para dar/quitar el like
      const response = await fetch(`/api/posts/${userPost.id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, userId: "ID_DEL_USUARIO_ACTUAL" }), // Reemplazar con el ID real del usuario actual
      });

      if (response.ok) {
        // Actualiza el estado local de los likes y el estado de usuario que dio like
        const updatedPost = await response.json();
        setLikes(updatedPost.likes.length);
        setUserLiked(!userLiked);
      } else {
        console.error("Error al dar/quitar like al post");
      }
    } catch (error) {
      console.error("Error al dar/quitar like al post", error);
    }
  };

  return (
    <>
      {/* Renderiza el botón de like para todo el usuario */}
      {/* <button onClick={() => handleLike(userPost._id)}>
        {userLiked ? "Unlike" : "Like"}
      </button> */}

      {userPost && userPost.posts ? (
        <div>
          {userPost.posts.map((post, index) => (
            <Post key={index} post={post} userLiked={userLiked} handleLike={handleLike} username={userPost.username} club={userPost.club} />
          ))}
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </>
  );
};

export default GetApi;
