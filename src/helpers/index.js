import * as palettesModule from '../styles/palettes.module.scss';
import { aspectRatiosForMobile, aspectRatiosForDesktop } from "../constants";

const { default: palettes } = palettesModule;

const boxColorKeys = Object.keys(palettes).filter(palette => palette !== 'background');

const shuffleColorValues = (boxColorValues) => {
  const suffledColorValues = [...boxColorValues].sort(() => Math.random() - 0.5);
  return suffledColorValues; 
};

const onClickHandler = () => {
  const currentColorValues = boxColorKeys.map(key => {
    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`--${key}`)
  });

  const shuffledColorValues = shuffleColorValues(currentColorValues);

  boxColorKeys.forEach((key, index) => {
    document.documentElement.style.setProperty(`--${key}`, shuffledColorValues[index]);
  });
};

export const boxesForDesktop = boxColorKeys.map((code, index) => {
  return {
    aspectRatio: aspectRatiosForDesktop[index],
    colorCode: `var(--${code})`,
    number: index + 1,
    key: index + 1,
    onClick: onClickHandler
  }
});

export const boxesForMobile = boxColorKeys.map((code, index) => {
  return {
    aspectRatio: aspectRatiosForMobile[index],
    colorCode: `var(--${code})`,
    number: index + 1,
    key: index + 1,
    onClick: onClickHandler
  }
});

export const adjustRatio = (box, parentRatio) => {
  return {
    ...box,
    aspectRatio: {
      x: box.aspectRatio.x,
      y: box.aspectRatio.y * parentRatio
    }
  };
};