import React from "react";

const Card = ({ camisetaNum, copaImg, copaImgAlt, camisetaNumAlt }) => {
  return (
    <>
      {{ camisetaNum, copaImg, copaImgAlt, camisetaNumAlt } ? (
        <article className="brand-card appear">
          <div class="cardBrand">
            <div class="wrapper">
              <img alt={camisetaNumAlt} src={camisetaNum} class="cover-image" />
            </div>
            <div class="afa">
              <img
                alt={copaImgAlt}
                src={copaImg}
                class="character"
                width="300 "
                height="300"
              />
            </div>
          </div>
        </article>
      ) : (
        <h2>Cargando Cards...</h2>
      )}
    </>
  );
};

export default Card;
