import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class'
import Contactb from './contactB';


const ContactComponent = ({ contact }) => {

    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h2>
                Surname: { contact.surname }
            </h2>
            <h3>
                Email: { contact.email }
            </h3>
            <Contactb contact={contact}></Contactb>
        </div>
    );
};

 {/**/}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
