import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Curso = props => (
    <Fragment>
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={props.img} alt="" />
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">{props.titulo}</h3>
                <div className="s-mb-2 s-main-center">
                    <div className="card__teacher s-cross-center">
                        <div className="card__avatar s-mr-1">
                            <div className="circle img-container">
                                <img src={props.img} alt={props.titulo} />
                            </div>
                        </div>
                        <span className="small">{props.prof}</span>
                    </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="#">{`$ ${props.price}`}</a>
                </div>
            </div>
        </article>
    </Fragment>
)

Curso.propTypes = {
    titulo: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    prof: PropTypes.string
}
Curso.defaultProps = {
    titulo: "No hay titulo",
    img: "https://cdn.shopify.com/s/files/1/0140/7929/5542/products/Black_White_Art_Print_-_road_2_480x.jpg?v=1550402836",
    price: "--",
    prof: "No hay profesor."
}

export default Curso;

//Operador ternario  condición ? Haz esto : Si no haz esto
//const persona = {"nombre":"Moises", "apellido":"Perez", "edad":"20"}; Parecido a map en flutter
//const mayorDeEdad = edad (esto significa que va recibir esa propiedad) => edad > 18; función resumidad
//props es un objeto propio del lenguaje que basicamente toma todas las propiedades.
// tambien se pueden escribir las propiedades que necesitamos const Curso = ({titulo, img, price}) =>

//const curso = {"titulo":"Curso React", 
// "img":"https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png", 
// "price":"20usd"};