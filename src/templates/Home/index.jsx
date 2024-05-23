import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: '',
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    //pagination local
    this.setState({ posts: postsAndPhotos.slice(page, postsPerPage), allPosts: postsAndPhotos });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };
  render() {
    const { posts, allPosts, searchValue: searchValue } = this.state;
    const noMorePosts = !posts.length || posts.length === allPosts.length;
    const filteredPosts = searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
        })
      : posts;
    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <>
              <h1>Pesquisar por: {searchValue}</h1>
            </>
          )}
          <SearchInput searchValue={searchValue} handleSearch={this.handleSearch}></SearchInput>
        </div>
        {filteredPosts.length ? <Posts posts={filteredPosts} /> : <p> Não existem posts</p>}
        <div className="button-container">
          {!searchValue && <Button disabled={noMorePosts} onClick={this.loadMorePosts} text={'Mais posts'}></Button>}
        </div>
      </section>
    );
  }
}

export default Home;
