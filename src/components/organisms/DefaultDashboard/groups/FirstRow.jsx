import Row from "../../../atoms/Row";
import BlocksInARow from "../../../molecules/BlocksInARow";
import StackedBlocks from "../../../molecules/StackedBlocks";
import * as palettesModule from '../../../../styles/palettes.module.scss';
import { aspectRatiosForDesktop as aspectRatios } from "../../../../constants";

const { default: palettes } = palettesModule;

const boxColorCodes = Object.keys(palettes).filter(palette => palette !== 'background');

const boxes = boxColorCodes.map((code, index) => {
  return {
    aspectRatio: aspectRatios[index],
    colorCode: `var(--${code})`,
    number: index + 1,
    key: index + 1
  }
});

const left = () => [
  boxes[0]
];

const subGroupRight = (parentRatio) => [
  {
    ...boxes[2],
    aspectRatio: {
      x: boxes[2].aspectRatio.x,
      y: boxes[2].aspectRatio.y * parentRatio
    }
  },
  {
    ...boxes[3],
    aspectRatio: {
      x: boxes[3].aspectRatio.x,
      y: boxes[3].aspectRatio.y * parentRatio
    }
  }
];

const right = () => [
  boxes[1],
  <BlocksInARow
    key={`box-${boxes[2].number}-and-${boxes[3].number}`}
    aspectRatio={{
      x: 2,
      y: 1
    }}
    renderProps={(parentRatio) => subGroupRight(parentRatio)}
  />
];

const FirstRow = () => (
  <BlocksInARow
    aspectRatio={{
      x: 1,
      y: 1
    }}
    renderProps={() => ([
      <StackedBlocks
        key={`box-${boxes[0].number}`}
        aspectRatio={{
          x: 1,
          y: 2,
        }}
        renderProps={() => left()}
      />,
      <StackedBlocks
        key={`box-${boxes[1].number}-and-${boxes[2].number}`}
        aspectRatio={{
          x: 1,
          y: 2,
        }}
        renderProps={() => right()}
      />
    ])}
  />
);

export default FirstRow;