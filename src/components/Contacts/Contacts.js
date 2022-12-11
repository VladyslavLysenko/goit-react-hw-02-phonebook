import React from 'react';
import PropTypes from 'prop-types';
import {ContactItem} from './ContactItem';
export const Contacts = ({ contacts, handlerDelete }) => (
  
    <ul>
      {contacts.map((item) => (
         <li key={item.id}>
         <ContactItem
           contact = {item}
         />
         
         <button type='button' onClick={() => handlerDelete(item.id)}>Delete</button>
         </li>
       )
       )}
    </ul>
  
);

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
    handlerDelete: PropTypes.func,
};
