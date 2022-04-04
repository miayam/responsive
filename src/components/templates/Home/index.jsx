import React, { lazy, Suspense } from 'react';
import useViewport from '../../../hooks/useViewport';
import * as spacingModule from '../../../styles/spacing.module.scss';

const { default: spacing } = spacingModule
const Desktop = lazy(() => import('./Desktop'));
const Mobile = lazy(() => import('./Mobile'));

const Home = () => {
  const { width } = useViewport();
  const { breakpoint } = spacing;

  return (
    <Suspense fallback={null}>
      {width < breakpoint ? (
        <Mobile />
      ) : (
        <Desktop />
      )}
    </Suspense>
  );
};

export default Home;