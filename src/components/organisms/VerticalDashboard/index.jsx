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
            key="group-1"
            parentRatio={1}
            renderProps={() => [
              boxes[0]
            ]}
          />,
          <BlocksInARow
            key="group-2"
            parentRatio={1}
            renderProps={() => [
              adjustRatio(boxes[2], 0.5),
              adjustRatio(boxes[3], 0.5),
            ]}
          />,
          <BlocksInARow
            key="group-3"
            parentRatio={1}
            renderProps={() => [
              boxes[1],
            ]}
          />,
          <BlocksInARow
            key="group-4"
            parentRatio={1}
            renderProps={() => [
              boxes[6],
            ]}
          />,
          <BlocksInARow
            key="group-5"
            parentRatio={1}
            renderProps={() => [
              adjustRatio(boxes[4], 0.5),
              adjustRatio(boxes[7], 0.5),
            ]}
          />,
          <BlocksInARow
            key="group-6"
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
