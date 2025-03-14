import React from 'react';
import PostItem from './PostItem';

function PostList({ posts }) {
  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-md-4 mb-3">
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostList;