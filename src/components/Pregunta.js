import React, { Fragment, useState } from 'react';


function Pregunta(props) {

  const { guardarPresupuesto, guardarPreguntaPresupuesto } = props; // pq vamos a pasar mas parametros a la funcion

  // definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);


  // actualizar el state con los nuevos datos del formulario
  const actualizarState = (e) => {
    guardarCantidad( parseInt(e.target.value) )
  }

  // validar el presupuesto y pasarlo al componente
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    console.log("typeof ", typeof cantidad);
    console.log("Cantidad ", cantidad);
    // validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //si pasa la validacion | pasamos el presupuesto al componente app con guardarPresupuesto. Todo esto pasa al darle al boton pq pertence al onSubmit event. Tb cambiamos guardarPreguntaPresupuesto como false para trabajar con el ternario
    guardarError(false);
    guardarPresupuesto (cantidad);
    guardarPreguntaPresupuesto(false);
  }

  return(
    <Fragment>
      <h2>Añade tu Presupuesto</h2>

      {error ? <p className="alert alert-danger error">El Presupuesto es Incorrecto</p>: null}

      <form onSubmit={agregarPresupuesto}>
        <input type="number"
               className="u-full-width"
               placeholder="Agrega tu Presupuesto"
               onChange={actualizarState}
        />
        <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
      </form>
    </Fragment>
  )
}

export default Pregunta;