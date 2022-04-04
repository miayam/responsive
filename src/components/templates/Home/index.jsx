import React, { lazy, Suspense } from 'react';
import useViewport from '../../../hooks/useViewport';
import * as spacingModule from '../../../styles/spacing.module.scss';
import { BREAKPOINT } from '../../../constants';

const { default: spacing } = spacingModule;

const Desktop = lazy(() => import('./Desktop'));
const Mobile = lazy(() => import('./Mobile'));

const Home = () => {
  const { width } = useViewport();

  // Why? react-testing-library cannot import CSS module. It is a dirty workaround.
  // CSS Modules is the best but people just prefer CSS-in-JS.
  const breakpoint = spacing.breakpoint ? spacing.breakpoint : BREAKPOINT;

  return (
    <Suspense fallback={null}>
      {width < breakpoint ? (
        <Mobile width={width} />
      ) : (
        <Desktop width={width} />
      )}
    </Suspense>
  );
};

export default Home;