import * as palettesModule from '../../../../styles/palettes.module.scss';
import { aspectRatiosForDesktop as aspectRatios } from "../../../../constants";

const { default: palettes } = palettesModule;

const boxColorCodes = Object.keys(palettes).filter(palette => palette !== 'background');

export const boxes = boxColorCodes.map((code, index) => {
  return {
    aspectRatio: aspectRatios[index],
    colorCode: `var(--${code})`,
    number: index + 1,
    key: index + 1
  }
});