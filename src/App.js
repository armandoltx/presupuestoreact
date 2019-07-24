import React, { useState } from 'react';
import Pregunta from './components/Pregunta';

function App() {

  //state donde guardamos el presupuesto pasado de pregunta
  const [presupuesto, guardarPresupuesto] = useState(0);
  // Al añadir el presupueto al componente pregunta, y darle a guardar, se pasa al componenete app y asi lo podemos usar en mas partes de la app
  
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);

  return (
    <div className="App">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido contenido-principal">
          {/* {console.log("here", preguntaPresupuesto)} */}
          { (preguntaPresupuesto)
            ?
            <Pregunta guardarPresupuesto={guardarPresupuesto} guardarPreguntaPresupuesto={guardarPreguntaPresupuesto} />
            :
              <div className="row">
                <div className="one-half column">
                  Hello
                </div>
                <div className="one-half column">
                  hello
                </div>
              </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;


// Anadimos otro state preguntaPresupuesto, pq queremos ensenar condicionalmente los componentes, cuando no tenemos presupuesto queremos ensenar el componente pregunta sino queremos ensenar el componente formulario y lo otro por eso hacemos un condicional if dentro del div. para cambiar el valor del state de true a flase, lo hacemos en el componente pregunta, queremos que el valor pase a ser false cuando tengamos el presupuesto.