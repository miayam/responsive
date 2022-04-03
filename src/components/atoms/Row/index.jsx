import React from 'react';
import './index.scss';

const Row = ({ children }) => {
  return (
    <div className="a-row">
      {children}
    </div>
  );
};

export default Row;