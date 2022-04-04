import BlocksInARow from "../../../molecules/BlocksInARow";
import StackedBlocks from "../../../molecules/StackedBlocks";
import { boxes } from "../helpers";

const left = () => [
  boxes[4],
  boxes[5],
];

const center = () => [
  boxes[6]
];


const right = () => [
  boxes[7],
  boxes[8]
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
