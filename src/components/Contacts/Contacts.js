import React from 'react';

export const Contacts = ({ contacts, handlerDelete }) => (
  
    <ul>
      {contacts.map(contact => (
          <li key={contact.id}>
              {contact.name}:{contact.number}
              <button type='button' onClick={() => handlerDelete(contact.id)}>Delete</button>
          </li>
      ))}
    </ul>
  
);
