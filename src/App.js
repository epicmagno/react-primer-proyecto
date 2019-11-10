import React, {Fragment} from 'react';
import logo from './logo.svg';
import './styles/styles.scss';


const App = () => (

  <Fragment>
    <div>
      <h1>Hola Mundo</h1>
      <p>Saludando desde mi componente</p>

    </div>
    <div>
      <h2>Este es un h2</h2>
      <img src="https://static-s.aa-cdn.net/img/ios/749057895/65b92c35258e6465d327f0e1dd89e8d4"/>
    </div>

  </Fragment>

)

export default App;

//Reglas
//1. Toda etiqueta debe cerrarse
//2. Los componentes deben devolver solo un componente padre
//3. Apoyarse de los fragmentos
//4. Fragment || <> hijos </>
//5

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
