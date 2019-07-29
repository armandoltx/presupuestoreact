import React, { Fragment} from 'react';
import { revisarPresupuesto } from '../helpers'

const ControlPresupuesto = ({ presupuesto, restante }) => {
  console.log("ControlPresupuesto presupuesto => ", presupuesto);
  console.log("ControlPresupuesto restante => ", restante);
  // aqui podriamos haber anadido la funcion q esta en el helper, pero asi esta el codigo mejor ordenado;
  return (
    <Fragment>
      <div className="alter alert-primary">
        Presupuesto: $ {presupuesto}
      </div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: ${restante}
      </div>
    </Fragment>
  );
};

export default ControlPresupuesto;