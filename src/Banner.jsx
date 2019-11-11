import React from 'react';

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/55/065618d5d6db7c6.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Curso de react</p>
            <p> Bienvenido a mi proyecto</p>
            <a href="#" className="button">Suscribete</a>
          </div>
        </div>
      </div>
    </div>
)

export default Banner;