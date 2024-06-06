import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';
import PropTypes from 'prop-types';

export const Home = ({ postsPage = 10 }) => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(postsPage);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = !posts.length || posts.length === allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      })
    : posts;

  const onLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    //pagination local
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    onLoadPosts(0, postsPerPage);
  }, [onLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && (
          <>
            <h1>Pesquisar por: {searchValue}</h1>
          </>
        )}
        <SearchInput searchValue={searchValue} handleSearch={handleSearch}></SearchInput>
      </div>
      {filteredPosts.length ? <Posts posts={filteredPosts} /> : <p> Não existem posts</p>}
      <div className="button-container">
        {!searchValue && <Button disabled={noMorePosts} onClick={loadMorePosts} text={'Mais posts'}></Button>}
      </div>
    </section>
  );
};

Home.defaultProps = {
  postsPage: 2,
};

Home.propTypes = {
  postsPage: PropTypes.number.isRequired,
};

// Exemplo de manipulação de estado com useState
// export class Home extends Component {
//   state = {
//     counter: 0,
//   };
//   handleClick = () => {
//     this.setState(
//       (prevState, prevProps) => {
//         console.log('prevSTATE ', prevState);
//         console.log('prevProps ', prevProps);
//         return { counter: prevState.counter + 1 };
//       },
//       () => {
//         console.log('counter 1 ', this.state.counter);
//       },
//     );
//     console.log('counter ', this.state.counter);
//   };
//   render() {
//     return (
//       <div className="container">
//         <h1>Contador : {this.state.counter}</h1>
//         <button className="button" onClick={this.handleClick}>
//           Add
//         </button>
//       </div>
//     );
//   }
// }

export default Home;
