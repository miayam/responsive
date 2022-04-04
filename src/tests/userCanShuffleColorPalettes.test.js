import { render, screen, fireEvent } from '@testing-library/react';
import Box from '../components/atoms/Box';

describe(`
  User can shuffle color palettes by
  clicking any boxes on the screen.
`, () => {
  it('should make sure onclick event is fired', async () => {
    const handleClick = jest.fn()

    render(<Box number={1} aspectRatio={{ x: 1, y: 1}} onClick={handleClick} />)

    fireEvent.click(screen.queryByText('1'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it.skip('should shuffle CSS variables at :root', async () => {
    // It's very hard to test. End to end testing with Cypress is the best choice.
  });
});