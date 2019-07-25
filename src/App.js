import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  //state donde guardamos el presupuesto pasado de pregunta
  const [presupuesto, guardarPresupuesto] = useState(0);

  // Al añadir el presupueto al componente pregunta, y darle a guardar, se pasa al componenete app y asi lo podemos usar en mas partes de la app
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);

  // Para anadir el gasto, tenemos q crear un objeto con el gasto y el nombre y luego todos los gastos individuales los almacenamos en un array q se llamara gastos:
  //luego lo pasamos al formulario y lo usamos alli por medio de los props
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido contenido-principal">
          {/* {rconsole.log("here", preguntaPresupuesto)} */}
          { (preguntaPresupuesto)
            ?
            <Pregunta guardarPresupuesto={guardarPresupuesto} guardarPreguntaPresupuesto={guardarPreguntaPresupuesto} />
            :
              <div className="row">
                <div className="one-half column">
                  <Formulario guardarGasto={guardarGasto}/>
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