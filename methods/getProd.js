import axios from "axios";
export const getProd = () => {
  return axios
    .get("http://localhost:3002/api/users")/* aca obtiene el array de la api para pasar la data al archivo app.js */
    .then((response) => {
      const { data } = response;
      return data;
    });
}; 
export const getPosts= () => {
  return axios
    .get("http://localhost:3002/api/posts")/* aca obtiene el array de la api para pasar la data al archivo app.js */
    .then((response) => {
      const { data } = response;
      return data;
    });
}; 
