import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

function  Formulario(props) {

  const { guardarGasto, guardarCrearGasto } = props; // Por destructuring, anadimos aqui todo lo q necesitemos traer desde donde el componente formulario es llamado, por ejemplo en app con guardarGasto.
  // asi podemos pasar el gasto desde el formulario al componente ppal.

  // state van a ser 3: nombre y cantidad del gasto y un error
  const [ nombreGasto, guararNombreGasto ] = useState(''); 
  const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
  const [ error, guardarError ] = useState(false);

  const agregarGasto = (e) => {
    // 1. prevenir el comportamiento por default del formulario
    e.preventDefault();

    // 2. validar
    if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '') {
      guardarError(true);
      return;
    }

    // 3. pasar el gasto al componente principal y cambiar la validacion si esto ocurre
      // hay q construir el objeto para el gasto creado en app.js
      const gasto ={
        nombreGasto,
        cantidadGasto,
        id: shortid.generate(), // que vamos a crear usando una libreria.
      }

      // pasar el gasto al componente principal
      guardarGasto(gasto);
      guardarCrearGasto(true); // para q useEffect funcione

      // eliminar la alerta
      guardarError(false);

      // resetear el form || par que se reflejen tenemos que anadir en los inputs los values(value={mobreGasto})
      guararNombreGasto('');
      guardarCantidadGasto('');
  }

  return(
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus Gastos Aqui</h2>

      {error ? <Error mensaje="Ambos Cambios son obligatorios" /> : null}

      <div className="campo">
        <label htmlFor="gasto">Nombre Gasto</label>
        <input
          id="gasto"
          type="text"
          className='u-full-width'
          placeholder='Ej. Transporte'
          onChange={(e) => guararNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>
      <div className="campo">
        <label htmlFor="cantidad">Cantidad Gasto</label>
        <input
          id="campo"
          type="text"
          className='u-full-width'
          placeholder='Ej. 300'
          onChange={(e) => guardarCantidadGasto( parseInt(e.target.value, 10) )}
          value={cantidadGasto}
        />
      </div>

      <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
    </form>
    
  )
}

export default Formulario;