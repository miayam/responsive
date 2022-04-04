import { render, waitFor, screen } from "@testing-library/react";
import App from '../App';
import matchMediaPolyfill from "mq-polyfill";
import { act } from "react-dom/test-utils";
import * as spacingModule from '../styles/spacing.module.scss';
const { default: spacing } = spacingModule;

matchMediaPolyfill(window);
window.resizeTo = function (width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height
  }).dispatchEvent(new this.Event("resize"));
};


describe(`
  User can switch to mobile or desktop
  layout by resizing window
`, () => {
  it(`
    should make sure resize event is fired when first rendered
  `, async () => {
    render(<App />);

    await waitFor(() => screen.queryByTestId('dashboard')) ;

    const desktopElement = screen.queryByTestId('dashboard');
    const width = Number(desktopElement.getAttribute('data-width'));

    expect(width).toBe(window.innerWidth);
  });

  it(`
    should change layout when resize event fired
  `, async () => {
    render(<App />);
    const veryBigScreen = 5000;

    await waitFor(() => screen.queryByTestId('dashboard')) ;

    act(async () => {
      // Render very big screen
      window.resizeTo(veryBigScreen, veryBigScreen);
    });

    const element = screen.queryByTestId('dashboard');
    const width = Number(element.getAttribute('data-width'));

    expect(width).toBe(window.innerWidth);
    expect(width).toBe(veryBigScreen);
  });

  it(`
    should switch to mobile layout from desktop
    if window touches below 600px breakpoint
  `, async () => {
    // Arrange
    const mobileSize = spacing.breakpoint - 1;

    render(<App />);

    await waitFor(() => screen.queryByTestId('dashboard')) ;

    await act(() => {
      // Render mobile
      window.resizeTo(mobileSize, mobileSize);
    });

    const element = screen.queryByTestId('dashboard');
    const width = Number(element.getAttribute('data-width'));

    expect(width).toBe(window.innerWidth);
    expect(width).toBe(mobileSize);
  });
});
