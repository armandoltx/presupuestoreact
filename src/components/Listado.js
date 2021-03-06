import React from 'react';
import Gasto from './Gasto';

function Listado({gastos}) {
  console.log("Listaod ", gastos[0]);
  
  return(
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map(gasto => (
        < Gasto gasto={gasto} key={gasto.id}/>
      ))}
    </div>
  );
}

export default Listado; 