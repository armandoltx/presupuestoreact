import React, { Fragment} from 'react';
import { revisarPresupuesto } from '../helpers'

const ControlPresupuesto = ({ presupuesto, restante }) => {
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