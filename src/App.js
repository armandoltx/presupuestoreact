import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //state donde guardamos el presupuesto pasado de pregunta
  const [presupuesto, guardarPresupuesto] = useState(0);

  // Al añadir el presupueto al componente pregunta, y darle a guardar, se pasa al componenete app y asi lo podemos usar en mas partes de la app
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);

  // Para anadir el gasto, tenemos q crear un objeto con el gasto y el nombre y luego todos los gastos individuales los almacenamos en un array q se llamara gastos:
  //luego lo pasamos al formulario y lo usamos alli por medio de los props
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);
  const [crearGasto, guardarCrearGasto] = useState(false);

  // para mostrar el presupuesto y el la diferencia entre lo q gastamos y el presupuesto, creamos otro state:
  const [restante, guardarRestante] = useState(0);
  // lo pasamos a la pregunta


  useEffect(() => {
    if (crearGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      // restar el presupuesto
      console.log("antes");
      const presupuestoRestante = restante - gasto.cantidadGasto;
      console.log("despues");
      guardarRestante(presupuestoRestante);

      // una vez agregado lo ponemos como false otra vez
      guardarCrearGasto(false);
    }
  }, [crearGasto, gastos, gasto, restante]); // crearGasto pasa a ser una dependencia, sino no se ejecutaria,
  // La dependencia es que tiene que cambiar en el state para que se ejecute el useEffect

  // la 1 vez q carga la app genera un gasto pq useEffect funciona como un componentDidMount hay que prevenir esa accion ocurra hay q poner una validacion para q se ejecute cuando queramos para ello creamos otro state ==> crearGarto y guardarCrearGasto le damos valor false de inicio y lo pasamos al formulario, cuando pasamos el gasto al componente principal le cambiamos el valor y lo pasamos a true y usando un if listo. 

  return (
    <div className="App">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido contenido-principal">
          {/* {rconsole.log("here", preguntaPresupuesto)} */}
          { (preguntaPresupuesto)
            ?
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
              guardarRestante={guardarRestante}
            />
            :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos} />
                  <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
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