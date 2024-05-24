import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

// mock function
const fn = jest.fn();

describe('<Button/>', () => {
  it('Should rende the button with the text "Load more"', () => {
    render(<Button text="Load more" />);

    const button = screen.getByRole('button', { name: /load more/i });
    // check if exist button in the screen
    expect(button).toBeInTheDocument();
    //check if exist class 'button' in the button component
    expect(button).toHaveAttribute('class', 'button');
    expect.assertions(2);
  });

  it('Should call function on button click', () => {
    // create a mock function
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    // userEvent or fireEvent simule click
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
    expect.assertions(1);
  });

  it('Should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('Should be not disabled when disabled is false', () => {
    render(<Button text="Load more" disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
    expect.assertions(1);
  });

  it('Should match snapshot', () => {
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
