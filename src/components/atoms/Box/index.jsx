import './index.scss';

const Box = ({
  aspectRatio,
  number,
  colorCode,
  onClick
})  => {
  const { x, y } = aspectRatio;

  const paddingTop = `${(y / x) * 100.0}%`;

  return (
    <div
      className="a-box"
      style={{
        paddingTop
      }}
    >
      <div
        className="a-box__inside"
        style={{
          backgroundColor: colorCode 
        }}
        onClick={onClick}
      >
        {number}
      </div>
    </div>
  );
}

export default Box;
