import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({title,children}) => {
 return (<Section> 
    {title && <h2>{title}</h2>}
    {children}
 </Section>
   
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};