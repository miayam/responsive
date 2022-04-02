# Responsive

This repo exhibits my highly opiniated approach to design. I believe "It depends" is always a good answer to
almost every tech-related question but given this mockup, how do I turn this beautiful design into code?

![Responsive](./public/images/responsive.png?raw=true "Image on the left is for desktop. Image on the right is for mobile.")
*Image on the left is for desktop. Image on the right is for mobile.*

## 🌐 Live Demo
> https://responsive.miayam.io


## Table of Contents
- [Tech Stack](#tech-stack) 
- [Proof of Concept](#proof-of-concept)

## Tech Stack

This code example is built on top of:
- [React](https://github.com/facebook/react) - JavaScript library for building user interface.
- [SCSS](https://sass-lang.com/) - CSS with superpowers.

## Proof of Concept

What is Responsive Web design?

> Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation.

As long as it can respond to screen size, platform and orientation, it's Responsive Web design. And it has nothing to do with CSS media query. 

In real world, a lack of compatibility and consistency between mobile and desktop layout is commonplace and present everywhere, just like that mockup above. Therefore, I prefer to separate the code for mobile and desktop.

If we seperate the code for mobile and desktop, how it responds to viewport change? Meet our new friend `resize` event listener. Here's React hook function that listens to `window`'s `resize` and emmits current width to its consumers whenever user change the screen size or orientation.

```js
import { useEffect, useState } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

export default useViewport;
```

How about bundle size? Is it any good? We can code-split those two seperated layouts altogether. Browser waits for window's resize event listener to take place. After `width` emitted, browser will decide which chunks (mobile or desktop) should be rendered on the screen.

Here's the code sample:

```js
import React, { lazy, Suspense } from 'react';

const Desktop = lazy(() => import('./Desktop'));
const Mobile = lazy(() => import('./Mobile'));

const Home = () => {
  const { width } = useViewport();
  const BREAKPOINT = 600;

  return (
    <Suspense fallback={null}>
      {width < BREAKPOINT ? (
        <Mobile />
      ) : (
        <Desktop />
      )}
    </Suspense>
  );
};

export default Home;
```
