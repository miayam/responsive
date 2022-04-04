import { renderHook } from "@testing-library/react-hooks";
import { act } from "@testing-library/react";
import matchMediaPolyfill from "mq-polyfill";
import useViewport from "../useViewport";
import * as spacingModule from '../../styles/spacing.module.scss';

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

describe('useViewport', () => {
  it(`
    emits current window width when app
    first rendered on the screen
  `, async () => {
    const { result } = renderHook(() => useViewport());
    expect(result.current.width).toBe(window.innerWidth);
  });

  it(`
    emits current window width when window's
    resize event fired
  `, async () => {
    const { result } = renderHook(() => useViewport());

    act(() => {
      window.resizeTo(spacing.breakpoint, spacing.breakpoint);
    });

    expect(result.current.width).toBe(spacing.breakpoint);
  });
});