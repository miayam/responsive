import React from 'react';
import './index.scss';

const Column = ({ children, flexBasis }) => {
  return (
    <div
      className="a-column"
      style={{
        flexBasis
      }}
    >
      {children}
    </div>
  );
};

export default Column;