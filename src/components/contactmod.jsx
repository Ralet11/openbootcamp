import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './class';


const Contactmod = ( {contact} )  => {
        return (
            <div>
            <h1>Usuario: {contact.name}</h1>
            <h1>Contacto: { contact.online ? "conectado":"no conectado" }</h1>
            </div>
        );
    };



Contactmod.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default Contactmod;

