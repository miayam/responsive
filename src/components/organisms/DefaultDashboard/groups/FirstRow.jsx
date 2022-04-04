import BlocksInARow from "../../../molecules/BlocksInARow";
import StackedBlocks from "../../../molecules/StackedBlocks";
import { adjustRatio, boxesForDesktop as boxes } from "../../../../helpers";

const left = () => [
  boxes[0]
];

const subGroupRight = (parentRatio) => [
  adjustRatio(boxes[2], parentRatio),
  adjustRatio(boxes[3], parentRatio)
];

const right = () => [
  boxes[1],
  <BlocksInARow
    key={`desktop-boxes-${boxes[2].number}-and-${boxes[3].number}`}
    parentRatio={0.5} // 50% of direct parent
    renderProps={(parentRatio) => subGroupRight(parentRatio)}
  />
];

const FirstRow = () => {
  if (boxes.length < 9) {
    return <h1>Error</h1>
  }

  return (
    <BlocksInARow
      parentRatio={1}
      renderProps={() => ([
        <StackedBlocks
          key={`desktop-boxes-${boxes[0].number}`}
          parentRatio={0.5} // 50% of direct parent
          renderProps={left}
        />,
        <StackedBlocks
          key={`desktop-boxes-${boxes[1].number}-and-${boxes[2].number}`}
          parentRatio={0.5} // 50% of direct parent
          renderProps={right}
        />
      ])}
    />
  );
};

export default FirstRow;