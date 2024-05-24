import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardMock } from './mock';

const post = postCardMock;

describe('<PostCard/>', () => {
  it('Should render PostCard', () => {
    // should print structure of component Post
    // const { debug } = render(<PostCard post={post} />);
    // debug();

    render(<PostCard post={post} />);

    expect(screen.getByAltText(/TITLE 1/i)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /TITLE 1/i })).toBeInTheDocument();
    expect(screen.getByText('Body 1')).toBeInTheDocument();
    expect.assertions(3);
  });

  it('Should match snapshot', () => {
    const { container } = render(<PostCard post={post} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
