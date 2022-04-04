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
    key={`box-${boxes[2].number}-and-${boxes[3].number}`}
    parentRatio={0.5} // 50% of direct parent
    renderProps={(parentRatio) => subGroupRight(parentRatio)}
  />
];

const FirstRow = () => (
  <BlocksInARow
    parentRatio={1}
    renderProps={() => ([
      <StackedBlocks
        key={`box-${boxes[0].number}`}
        parentRatio={0.5} // 50% of direct parent
        renderProps={left}
      />,
      <StackedBlocks
        key={`box-${boxes[1].number}-and-${boxes[2].number}`}
        parentRatio={0.5} // 50% of direct parent
        renderProps={right}
      />
    ])}
  />
);

export default FirstRow;