import React, { useState } from 'react';
import Pregunta from './components/Pregunta';

function App() {

  //state donde guardamos el presupuesto pasado de pregunta
  const [presupuesto, guardarPresupuesto] = useState(0);
  // Al añadir el presupueto al componente pregunta, y darle a guardar, se pasa al componenete app y asi lo podemos usar en mas partes de la app

  return (
    <div className="App">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido contenido-principal">
          <Pregunta guardarPresupuesto={guardarPresupuesto}/>
        </div>
      </header>
    </div>
  );
}

export default App;
