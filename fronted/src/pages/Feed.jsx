import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/posts`)
      .then((res) => {
        const apiPosts = Array.isArray(res.data.posts) ? res.data.posts : [];
        setPosts(apiPosts);
      })
      .catch((err) => {
        console.error('Failed to fetch posts', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className='feed-page'>
      <header className='feed-header'>
        <Link to='/feed' className='brand'>canvas<span>.</span></Link>
        <Link to='/create-post' className='new-post-link'><span aria-hidden='true'>+</span> Create post</Link>
      </header>

      <section className='feed-content'>
        <div className='feed-title-row'>
          <div>
            <p className='eyebrow'>COMMUNITY GALLERY</p>
            <h1>Fresh from the feed</h1>
          </div>
          <p className='post-count'>{posts.length} {posts.length === 1 ? 'post' : 'posts'}</p>
        </div>

        {loading ? (
          <p className="loading-text">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className='post-grid'>
            {posts.map((post) => (
              <article key={post._id} className='post-card'>
                <div className='post-image-wrap'>
                  <img src={post.image} alt={post.caption || 'Community post'} />
                </div>
                <div className='post-copy'>
                  <p>{post.caption}</p>
                  <span className='post-label'>Shared moment</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className='empty-feed'>
            <span aria-hidden='true'>✦</span>
            <h2>The feed is waiting for its first story.</h2>
            <Link to='/create-post'>Create a post</Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default Feed;