import React from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { name, number } }) => {
    return (
        <span>{name}:{number}</span>
    )         
}


ContactItem.propTypes={
  contacts: PropTypes.arrayOf(
    PropTypes.shape({  
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};