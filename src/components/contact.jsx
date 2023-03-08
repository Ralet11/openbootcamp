import React from 'react';

import { Contact } from './class';
import Contactmod from './contactmod';

const Contactcomponent = () => {
   const newcontact = new Contact ("ramiro", "alet", "ramiro.alet@hotmail.com", false)
        return (
            <div>
            <Contactmod contact={newcontact}></Contactmod>
            </div>
        );
        }




export default Contactcomponent;
