import React from 'react';
import './index.scss';

const Row = ({
  children,
  flexBasis
}) => {
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