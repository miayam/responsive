import React from 'react';
import './index.scss';

const Row = ({ flexBasis, children }) => {
  return (
    <div
      className="a-row"
      style={{
        flexBasis
      }}
    >
      {children}
    </div>
  );
};

export default Row;