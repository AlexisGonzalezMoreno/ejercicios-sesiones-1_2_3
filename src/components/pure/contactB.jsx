import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class'


const Contactb = ({contact}) => {

    const [connected, setconnected] = useState(contact.connected)

      const cambiarEstado = () => {
          if(connected) setconnected(false);
          else setconnected(true);
    }

    return (
    <div>
        <h4>
            Connected: { connected ? 'Contacto en línea':'Contacto no disponible' }
        </h4>
        <button onClick={cambiarEstado}>
            Cambiar estado
        </button>
    </div>
    );
};

Contactb.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default Contactb;
