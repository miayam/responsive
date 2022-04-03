import './index.scss';

const Container = ({ maxWidth, children }) => {
  return (
    <div
      className="a-container"
      style={{
        maxWidth
      }}
    >
      {children}
    </div>
  );
};

export default Container;
