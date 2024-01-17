import React, { useState, useEffect } from "react";
import GetApi from "./GetApi";
import { getProd } from "../methods/getProd";

const Foro = () => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [usuario, setUsuario] = useState(""); // Nuevo estado para almacenar el nombre de usuario

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prods = await getProd();
        setItems(prods);
      } catch (error) {
        console.error("Error en el FETCH", error);
      }
    };

    fetchData();

    // Recupera el nombre de usuario del localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsuario(storedUsername);
    }
  }, []);

  const toggleOrder = () => {
    setOrder((prevOrder) => (prevOrder === "recent" ? "likes" : "recent"));
  };

  const sortedUsers = items.slice().sort((a, b) => {
    const dateA = a.posts[0]?.date ? new Date(a.posts[0].date).getTime() : 0;
    const dateB = b.posts[0]?.date ? new Date(b.posts[0].date).getTime() : 0;

    return order === "recent" ? dateB - dateA : a.posts.length - b.posts.length;
  });

  sortedUsers.forEach((user) => {
    user.posts.sort((postA, postB) => {
      const dateA = new Date(postA.date).getTime();
      const dateB = new Date(postB.date).getTime();

      return order === "recent" ? dateB - dateA : dateA - dateB;
    });
  });

  return (
    <div className="perfilPosts col-7">
      <div className="perfilContainer">
        <div className="portada">
          <img
            src="https://www.naiz.eus/media/asset_publics/resources/000/959/261/article_main_landscape/Argentina.jpg"
            alt=""
          />
        </div>
        <div className="dataUser">
          <div className="bienvenidaForo">
            <div className="foto">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28crest%29.svg/1200px-Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28crest%29.svg.png"
                alt=""
              />
            </div>
            <h2>
              <b>
                ARGENTINA CAMPEON DEL MUNDO <br />
                Bienvenido {usuario}
              </b>
            </h2>
          </div>

          <div>
            {/* Usa un solo botón que alterna entre los dos modos de orden */}
            <button class="stars"onClick={toggleOrder}>
              {order === "recent"
                ? "♥"
                : "Más reciente"}
            </button>
          </div>
        </div>
      </div>

      <div>
        {sortedUsers.map((userPost, i) => (
          <GetApi key={i} userPost={userPost} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Foro;

/* 
HACER CREACION DE USUARIOS, AUTENTICACION Y QUE CADA POST CORRESPONDA A USUARIOS, LIKES
PASAR BD A UNA NUVE

*/
