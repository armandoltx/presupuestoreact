import React, { useState } from 'react';

function  Formulario() {

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
    guardarError(false);
  }

  return(
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus Gastos Aqui</h2>
      <div className="campo">
        <label htmlFor="gasto">Nombre Gasto</label>
        <input
          id="gasto"
          type="text"
          className='u-full-width'
          placeholder='Ej. Transporte'
          onChange={(e) => guararNombreGasto(e.target.value)}
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
        />
      </div>

      <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
    </form>
    
  )
}

export default Formulario;