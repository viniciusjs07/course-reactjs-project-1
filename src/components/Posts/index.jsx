import { PostCard } from '../PostCard';
import PropTypes from 'prop-types';
import './styles.css';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts?.map((post) => (
        <PostCard post={post} key={post.id}></PostCard>
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};
Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
      cover: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
export default Posts;
