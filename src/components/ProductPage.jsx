import React from "react";

const Detail = (props) => {
  return (
    <>
      <div className="box">
        <div className="product">
          <div className="product__leftSide">
            <div className="product__img">
              <img
                className="props__img"
                src={props.image}
                alt="poster"
                className="img"
              />
            </div>
            <div className="product__rightSide">
              <div className="product__title">{props.name}</div>
              <button>Objednat</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
