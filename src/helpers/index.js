import * as palettesModule from '../styles/palettes.module.scss';
import { aspectRatiosForMobile, aspectRatiosForDesktop } from "../constants";

const { default: palettes } = palettesModule;

const boxColorCodes = Object.keys(palettes).filter(palette => palette !== 'background');

export const boxesForDesktop = boxColorCodes.map((code, index) => {
  return {
    aspectRatio: aspectRatiosForDesktop[index],
    colorCode: `var(--${code})`,
    number: index + 1,
    key: index + 1
  }
});

export const boxesForMobile = boxColorCodes.map((code, index) => {
  return {
    aspectRatio: aspectRatiosForMobile[index],
    colorCode: `var(--${code})`,
    number: index + 1,
    key: index + 1
  }
});
