import Row from "../../atoms/Row";
import Box from "../../atoms/Box";
import { isValidElement } from "react";

const BlocksInARow = ({ parentRatio, renderProps }) => {
  const ratio = parentRatio * 1.0;
  const percentage = ratio * 100.0;

  return (
    <Row
      flexBasis={`${percentage}%`}
    >
      {renderProps(ratio).map((child) => {
        if (isValidElement(child)) {
          return child
        }

        return (
          <Box
            {...child}
          />
        );
      })}
    </Row>
  ); 
};

export default BlocksInARow;
