import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('NameContact1', 'SurnameContact1', 'emailContact1', false)

    return (
        <div>
            <h1>Contact list:</h1>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
