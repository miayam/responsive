import './index.scss';

const Column = ({ flexBasis, children }) => {
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