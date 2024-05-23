import { PostCard } from '../PostCard';
import PropTypes from 'prop-types';
import './styles.css';

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts?.map((post) => (
        <PostCard post={post} key={post.id}></PostCard>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Posts;
