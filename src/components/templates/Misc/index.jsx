import Container from "../../atoms/Container";
import Row from "../../atoms/Row";
import StackedBlocks from "../../molecules/StackedBlocks";
import BlocksInARow from "../../molecules/BlocksInARow";

import * as spacingModule from '../../../styles/spacing.module.scss';
import * as palettesModule from '../../../styles/palettes.module.scss';

const { default: spacing } = spacingModule;
const { default: palettes } = palettesModule;

const boxColorCodes = Object.keys(palettes).filter(palette => palette !== 'background');
const aspectRatios = [
  {
    x: 1,
    y: 1
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 1,
    y: 1,
  },
  {
    x: 1,
    y: 1
  }
];

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

const Misc = () => {
  return (
    <Container maxWidth={spacing.maxWidthForDesktop + 'px'}>
      <Row
        flexBasis="100%"
      >
        <StackedBlocks
          aspectRatio={{
            x: 1,
            y: 2,
          }}
          renderProps={() => left()}
        />
        <StackedBlocks
          aspectRatio={{
            x: 1,
            y: 2,
          }}
          renderProps={() => right()}
        />
      </Row>
    </Container>
  );
};

export default Misc;