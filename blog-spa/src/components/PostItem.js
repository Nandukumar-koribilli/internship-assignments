import React, { useState } from 'react';

function PostItem({ post }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <button
          className="btn btn-primary btn-sm mb-2"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && <p className="card-text">{post.body}</p>}
      </div>
    </div>
  );
}

export default PostItem;