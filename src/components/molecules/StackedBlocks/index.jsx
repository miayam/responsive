import Column from "../../atoms/Column";
import Box from "../../atoms/Box";
import * as spacingModule from '../../../styles/spacing.module.scss';
import { isValidElement } from "react";

const { default: spacing } = spacingModule;

const StackedBlocks = ({ aspectRatio, renderProps }) => {
  const { x, y } = aspectRatio;
  const ratio = x / y * 1.0 ;
  const percentage = ratio * 100.0;
  const numberOfGaps = renderProps(ratio).length
  const diff = `${numberOfGaps * spacing.gap}px`; 

  return (
    <Column
      flexBasis={`calc(${percentage}% - ${diff})`}
    >
      {renderProps(ratio).map((child) => {
        if (isValidElement(child)) {
          return child;
        }

        return (
          <Box
            {...child}
          />
        );
      })}
    </Column>
  ) 
};

export default StackedBlocks;