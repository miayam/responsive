import Row from "../../atoms/Row";
import Box from "../../atoms/Box";
import * as spacingModule from '../../../styles/spacing.module.scss';
import { isValidElement } from "react";

const { default: spacing } = spacingModule;

const BlocksInARow = ({ aspectRatio, renderProps }) => {
  const { x, y } = aspectRatio;
  const ratio = y / x * 1.0;
  const percentage = ratio * 100.0;
  const numberOfGaps = renderProps(ratio).length;
  const diff = `${numberOfGaps * spacing.gap}px`; 

  return (
    <Row
      flexBasis={`calc(${percentage}% - ${diff})`}
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
