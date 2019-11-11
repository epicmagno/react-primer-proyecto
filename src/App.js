import React, { Fragment } from 'react';
import logo from './logo.svg';
import './styles/styles.scss';
import Curso from './Curso';
import Banner from './Banner'
import Formulario from './Formulario'

const cursos = [
  {
    "titulo": "React desde cero",
    "img": "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png",
    "price": 20,
    "prof": "Yo",

  },
  {
    "titulo": "Flutter desde cero",
    "img": "https://venturebeat.com/wp-content/uploads/2019/05/flutter-mobile-desktop-web-embedded.png?fit=400%2C200&strip=all",
    "price": 40,
    "prof": "Tu",

  },
  {
    "titulo": "React desde cero 2",
    "img": "https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png",
    "price": 24,
    "prof": "el",

  }
];

const App = () => (

  <Fragment>
    <Banner />
    <Formulario />


    <div className="ed-grid m-grid-3">
      {cursos.map( c => <Curso titulo={c.titulo} img={c.img} price={c.price} prof={c.prof}/>)}
    </div>
  </Fragment>



)

export default App;

//Reglas
//1. Toda etiqueta debe cerrarse
//2. Los componentes deben devolver solo un componente padre
//3. Apoyarse de los fragmentos
//4. Fragment || <> hijos </>
//5. for es htmlFor
//6. class es className
//7. 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
