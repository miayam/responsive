import BlocksInARow from "../../molecules/BlocksInARow";
import StackedBlocks from "../../molecules/StackedBlocks";
import Container from "../../atoms/Container"
import { boxesForMobile as boxes, adjustRatio } from "../../../helpers";

const VerticalDashboard = () => {
  return (
    <Container>
      <StackedBlocks
        renderProps={() => [
          <BlocksInARow
            key="mobile-boxes-group-1"
            parentRatio={1}
            renderProps={() => [
              boxes[0]
            ]}
          />,
          <BlocksInARow
            key="mobile-boxes-group-2"
            parentRatio={1}
            renderProps={() => [
              adjustRatio(boxes[2], 0.5),
              adjustRatio(boxes[3], 0.5),
            ]}
          />,
          <BlocksInARow
            key="mobile-boxes-group-3"
            parentRatio={1}
            renderProps={() => [
              boxes[1],
            ]}
          />,
          <BlocksInARow
            key="mobile-boxes-group-4"
            parentRatio={1}
            renderProps={() => [
              boxes[6],
            ]}
          />,
          <BlocksInARow
            key="mobile-boxes-group-5"
            parentRatio={1}
            renderProps={() => [
              adjustRatio(boxes[4], 0.5),
              adjustRatio(boxes[7], 0.5),
            ]}
          />,
          <BlocksInARow
            key="mobile-boxes-group-6"
            parentRatio={1}
            renderProps={() => [
              adjustRatio(boxes[5], 0.5),
              adjustRatio(boxes[8], 0.5),
            ]}
          />,
        ]}
      />
    </Container>
  );
};

export default VerticalDashboard;
