import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      caption: "Post 1"
    },
    {
      _id: "2",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
      caption: "Post 2"
    },
    {
      _id: "3",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      caption: "Post 3"
    }
  ]);

  useEffect(() => {
    axios.get('https://complete-backend-465s.onrender.com/posts')
      .then((res) => {
        const apiPosts = Array.isArray(res.data.posts) ? res.data.posts : [];

        setPosts((prevPosts) => {
          const existingIds = new Set(prevPosts.map((post) => post._id));
          const mergedPosts = [...prevPosts];

          apiPosts.forEach((post) => {
            if (!existingIds.has(post._id)) {
              mergedPosts.push(post);
              existingIds.add(post._id);
            }
          });

          return mergedPosts;
        });
      })
      .catch((err) => {
        console.error('Failed to fetch posts', err);
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

        {posts.length > 0 ? (
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

export default Feed
