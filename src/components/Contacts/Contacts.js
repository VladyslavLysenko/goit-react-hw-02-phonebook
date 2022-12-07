import React from 'react';

export const Contacts = ({contacts}) => (
  
    <ul>
      {contacts.map(contact => (
          <li key={contact.id}>
              {contact.name}:{contact.number}
          </li>
      ))}
    </ul>
  
);
