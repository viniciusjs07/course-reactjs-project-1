import PropTypes from 'prop-types';
import React from 'react';

import './styles.css';

export const PostCard = ({ post }) => {
  return (
    <div className="post">
      <img src={post?.cover} alt={post.title}></img>
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    cover: PropTypes.string,
  }).isRequired,
};

export default PostCard;
