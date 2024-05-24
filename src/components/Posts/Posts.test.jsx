import { render, screen } from '@testing-library/react';

import Posts from '.';

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'Title 1',
    body: 'Body 1',
    cover: 'img/img1.png',
  },
  {
    userId: 2,
    id: 2,
    title: 'Title 2',
    body: 'Body 2',
    cover: 'img/img2.png',
  },
  {
    userId: 3,
    id: 3,
    title: 'Title 3',
    body: 'Body 3',
    cover: 'img/img3.png',
  },
];

describe('<Posts/>', () => {
  console.log('posts ', posts);
  it('Should render Posts', () => {
    render(<Posts posts={posts} />);
    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByAltText(/title/i)).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');
  });

  it('Should match snapshot', () => {
    const { container } = render(<Posts posts={posts} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
