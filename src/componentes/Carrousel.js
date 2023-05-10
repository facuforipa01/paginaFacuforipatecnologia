import React from "react";

function Carrousel(props) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.glass} className="pizza" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={props.camara} className="pizza" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={props.trasera} className="pizza" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={props.modulo} className="pizza" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
} 

export default Carrousel;