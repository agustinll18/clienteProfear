import React, { useRef, useEffect } from "react";
/* imports para las cards */
/* CAMISETAS */
import acuña from "./../multimedia/jugadores/acuña.webp";
import foyth from "./../multimedia/jugadores/foyth.webp";
import almada from "./../multimedia/jugadores/almada.webp";
import angel from "./../multimedia/jugadores/angel.webp";
import asexi from "./../multimedia/jugadores/asexi.webp";
import correa from "./../multimedia/jugadores/correa.webp";
import cuti from "./../multimedia/jugadores/cuti.webp";
import D10S from "./../multimedia/jugadores/D10S.webp";
import dePaul from "./../multimedia/jugadores/de_paul.webp";
import dibola from "./../multimedia/jugadores/dibola.webp";
import exe from "./../multimedia/jugadores/exe.webp";
import guido from "./../multimedia/jugadores/guido.webp";
import lichaM from "./../multimedia/jugadores/lichaM.webp";
import molina from "./../multimedia/jugadores/molina.webp";
import montiel from "./../multimedia/jugadores/montiel.webp";
import ota from "./../multimedia/jugadores/ota.webp";
import papu from "./../multimedia/jugadores/papu.webp";
import paredes from "./../multimedia/jugadores/paredes.webp";
import pezzela from "./../multimedia/jugadores/pezzela.webp";
import sexo from "./../multimedia/jugadores/sexo.webp";
import taglia from "./../multimedia/jugadores/tagliafico.webp";
import toro from "./../multimedia/jugadores/toro.webp";
import araña from "./../multimedia/jugadores/araña.webp"; 
import dibu from "./../multimedia/jugadores/dibu.webp"; 
import scaloni from "./../multimedia/jugadores/scaloni.png"; 
import tapia from "./../multimedia/jugadores/tapia.webp";

/* BESO CON LA COPA  */
import beso_acuña from "./../multimedia/besoCopa/acuña.webp";
import beso_foyth from "./../multimedia/besoCopa/foyth.webp";
import beso_almada from "./../multimedia/besoCopa/almada.webp";
import beso_angel from "./../multimedia/besoCopa/angel.webp";
import beso_asexi from "./../multimedia/besoCopa/asexi.webp";
import beso_correa from "./../multimedia/besoCopa/correa.webp";
import beso_cuti from "./../multimedia/besoCopa/cutie.webp";
import beso_D10S from "./../multimedia/besoCopa/D10S.webp";
import beso_dePaul from "./../multimedia/besoCopa/tini.webp";
import beso_dibola from "./../multimedia/besoCopa/dibola.webp";
import beso_exe from "./../multimedia/besoCopa/exe.webp";
import beso_lichaM from "./../multimedia/besoCopa/licha.webp";
import beso_molina from "./../multimedia/besoCopa/molina.webp";
import beso_montiel from "./../multimedia/besoCopa/cachete.webp";
import beso_ota from "./../multimedia/besoCopa/vikingo.webp";
import beso_papu from "./../multimedia/besoCopa/papu.webp";
import beso_paredes from "./../multimedia/besoCopa/paredes.webp";
import beso_pezzela from "./../multimedia/besoCopa/pezzella.webp";
import beso_sexo from "./../multimedia/besoCopa/sexo.webp";
import beso_taglia from "./../multimedia/besoCopa/taglia.webp";
import beso_toro from "./../multimedia/besoCopa/toro.webp";
import beso_araña from "./../multimedia/besoCopa/araña.webp";
import beso_dibu from "./../multimedia/besoCopa/dibu.webp";
import beso_scaloni from "./../multimedia/besoCopa/scaloni.webp";
import beso_tapia from "./../multimedia/besoCopa/tapia.webp";
import Card from "../components/Card";

const Campeones = () => {
  /* SCROLL HORIZONTAL */
  const espacioRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const spaceHolder = espacioRef.current;
    const horizontal = horizontalRef.current;

    function calcDynamicHeight(ref) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const anchoObj = ref.scrollWidth;
      return anchoObj - vw + vh + 150;
    }

    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

    const handleScroll = () => {
      const sticky = document.querySelector(".sticky");
      horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    };

    window.addEventListener("resize", handleResize);

    const items = document.querySelectorAll(".appear");

    const active = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inview2");
        } else {
          entry.target.classList.remove("inview2");
        }
      });
    };

    const io2 = new IntersectionObserver(active);
    items.forEach((item) => io2.observe(item));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      io2.disconnect();
    };
  }, []);
  /* ARRAY CARDS */
  let cardsArray = [
    {
      camisetaNum: foyth,
      copaImg: beso_foyth,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "foyth",
    },
    {
      camisetaNum: taglia,
      copaImg:beso_taglia ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "taglia",
    },
    {
      camisetaNum: montiel,
      copaImg:beso_montiel ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "montiel",
    },
    {
      camisetaNum: paredes,
      copaImg:beso_paredes ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "paredes",
    },
    {
      camisetaNum: pezzela,
      copaImg:beso_pezzela ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: " ",
    },{
      camisetaNum: dePaul,
      copaImg: beso_dePaul,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "dePaul",
    },
    {
      camisetaNum: acuña,
      copaImg:beso_acuña ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "acuña",
    },
    {
      camisetaNum:araña ,
      copaImg:beso_araña,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "",
    },
    {
      camisetaNum: D10S,
      copaImg:beso_D10S ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "D10S",
    },
    {
      camisetaNum: angel,
      copaImg:beso_angel ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "angel",
    },{
      camisetaNum: cuti,
      copaImg: beso_cuti,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "cuti",
    },
    {
      camisetaNum: exe,
      copaImg:beso_exe ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "exe",
    },
    {
      camisetaNum: correa,
      copaImg:beso_correa ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "correa",
    },
    {
      camisetaNum: almada,
      copaImg:beso_almada ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "almada",
    },
    {
      camisetaNum: papu,
      copaImg:beso_papu ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "papu ",
    },{
      camisetaNum: guido,
      copaImg: "",
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "guido",
    },
    {
      camisetaNum: ota,
      copaImg:beso_ota ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "ota",
    },
    {
      camisetaNum: asexi,
      copaImg:beso_asexi ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "asexi",
    },
    {
      camisetaNum: dibola,
      copaImg:beso_dibola ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "dibola",
    },
    {
      camisetaNum: toro,
      copaImg:beso_toro ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: " toro",
    },{
      camisetaNum: dibu,
      copaImg:beso_dibu ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: " dibu",
    },{
      camisetaNum: sexo,
      copaImg:beso_sexo ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "sexo",
    },
    {
      camisetaNum: lichaM,
      copaImg:beso_lichaM ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: "lichaM",
    },
    {
      camisetaNum: molina,
      copaImg:beso_molina ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: " molina",
    },{
      camisetaNum: scaloni,
      copaImg:beso_scaloni ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: " scaloni",
    },{
      camisetaNum: tapia,
      copaImg:beso_tapia ,
      copaImgAlt: "copa del mundo",
      camisetaNumAlt: " tapia",
    }
  ];

  return (
    <section className="containerCards">
      <div className="space-holder" ref={espacioRef}>
        <div className="sticky">
          <div className="horizontal" ref={horizontalRef}>
            <section role="feed" className="cards">
              {cardsArray.map((item) => (
                <Card
                  camisetaNum={item.camisetaNum}
                  copaImg={item.copaImg}
                  copaImgAlt={item.copaImgAlt}
                  camisetaNumAlt={item.camisetaNumAlt}
                />
              ))}{" "}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campeones;
