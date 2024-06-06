import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { default as Home } from '.';

describe('<Home/>', () => {
  it('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts');

    await waitForElementToBeRemoved(noMorePosts);
    screen.debug();
  });
});
