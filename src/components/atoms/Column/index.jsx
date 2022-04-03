import React from 'react';
import './index.scss';

const Column = ({ children }) => {
  return (
    <div className="a-column">
      {children}
    </div>
  );
};

export default Column;