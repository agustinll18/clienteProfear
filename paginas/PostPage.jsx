/* import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProd } from "../methods/getProd";

export default function PostApi() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProd();
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2>Cargando....</h2>;
  }

  const itemId = id ? id.toString() : "";
  const producto = productos.find(item => item.id === itemId);
  console.log(producto);

  return (
    <>
      {producto ? (
        <div className="col-9 perfilPostsUser">
          <div className="perfilPosts ">
            <div className="perfilContainer">
              <div className="portada">
                <img src={ ""} alt="" />
              </div>
              <div className="dataUser">
                <div className="foto">
                
                </div>
                <h3>{producto.username}</h3>
              </div>
            </div>
          </div>

          {producto.posts.map((type, index) => (
            <div key={index} className="postMessageContainer" id="contenedor">
              <div className="dataUser">
                <div className="foto">
                  <img src={""} alt="" />
                </div>
                <h3>
                  {producto.username} &nbsp;{producto.id}
                </h3>
              </div>

              <p key={index} id="parrafo">
                {type.content}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <h2>Producto no encontrado</h2>
      )}
    </>
  );
}
 */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getPosts } from "../methods/getProd";

export default function PostPage() {
  const [postContent, setPostContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPosts();
        
        // Encuentra el post con el ID correspondiente
        const user = response.data.find((user) => user.posts.some((p) => p.id === id));

        if (user) {
          // Obtiene el contenido del post si el usuario y los posts existen
          const content = user.posts.find((p) => p.id === id)?.content || "";
          setPostContent(content);
        } else {
          console.error("Usuario no encontrado.");
        }
      } catch (error) {
        console.error("Error al obtener posts:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Detalles del Post {id}</h2>
      {/* Muestra los detalles del post */}
      <p>{postContent || "Cargando..."}</p>
    </div>
  );
}
