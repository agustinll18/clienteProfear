import Goal from "./Goal";
import Pasto from "./Pasto";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="postButton">
        <Link  to={`/post`}>
          <img src="https://img.icons8.com/cotton/64/null/football2.png"  alt="pelotaPost" />
        </Link>
      </div>
      <div className="footer col-12" id="Contacto">
        <h5 style={{ textAlign: "center", margin: 0 }}>
          <b>SOMOS TODOS MONTIEL !!!</b>{" "}
        </h5>
        <Goal />
        <Pasto />
      </div>
    </>
  );
};
export default Footer;
