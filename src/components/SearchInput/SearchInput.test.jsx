import userEvent from '@testing-library/user-event';
import { SearchInput } from '.';
import { render, screen } from '@testing-library/react';
const fn = jest.fn();

describe('<SearchInput/>', () => {
  it('should have a value of searchValue', () => {
    render(<SearchInput handleSearch={fn} searchValue={'insert text'} />);
    const input = screen.getByPlaceholderText(/Pesquise seu post aqui/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('insert text');

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect.assertions(3);
  });
  it('should call handleChange function on each kry pressed', () => {
    render(<SearchInput handleSearch={fn} />);

    const input = screen.getByPlaceholderText(/Pesquise seu post aqui/i);

    const value = 'novo valor do input';
    userEvent.type(input, value);

    expect(input.value).toBe('novo valor do input');
    // check how many times the value was entered
    expect(fn).toHaveBeenCalledTimes(19);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect.assertions(3);
  });

  it('Should match snapshot', () => {
    const { container } = render(<SearchInput handleSearch={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
