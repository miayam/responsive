import BlocksInARow from "../../../molecules/BlocksInARow";
import StackedBlocks from "../../../molecules/StackedBlocks";
import { boxes } from "../helpers";

const left = () => [
  {
    ...boxes[4],
    aspectRatio: {
      x: boxes[4].aspectRatio.x,
      y: boxes[4].aspectRatio.y
    }
  },
  {
    ...boxes[5],
    aspectRatio: {
      x: boxes[5].aspectRatio.x,
      y: boxes[5].aspectRatio.y
    }
  },
];

const center = () => [
  boxes[6]
];


const right = () => [
  {
    ...boxes[7],
    aspectRatio: {
      x: boxes[7].aspectRatio.x,
      y: boxes[7].aspectRatio.y
    }
  },
  {
    ...boxes[8],
    aspectRatio: {
      x: boxes[8].aspectRatio.x,
      y: boxes[8].aspectRatio.y
    }
  },
];

const SecondRow = () => {
  return (
    <BlocksInARow
      parentRatio={1}
      renderProps={() => ([
        <StackedBlocks
          key={`boxes-${boxes[4].number}-and-${boxes[5].number}`}
          parentRatio={1 / 3.0} // 33.33%
          renderProps={left}
        />,
        <StackedBlocks
          key={`boxes-${boxes[6].number}`}
          parentRatio={1 / 3.0} // 33.33%
          renderProps={center}
        />,
        <StackedBlocks
          key={`boxes-${boxes[7].number}-and-${boxes[8].number}`}
          parentRatio={1 / 3.0} // 33.33%
          renderProps={right}
        />
      ])}
    />
  );
};

export default SecondRow;
