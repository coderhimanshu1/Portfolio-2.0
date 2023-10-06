import React, { useState, useEffect } from "react";
import "../static/styles/blog/blog.css";

const Blog = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const RSS_URL = `https://medium.com/feed/@${username}`;
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.items);
      })
      .catch((error) => console.error("Error fetching Medium posts:", error));
  }, [API_URL]);

  useEffect(() => {
    // Get all anchor tags inside the .Blog-overlay-content
    const links = document.querySelectorAll(".Blog-overlay-content a");

    // Iterate through each link and set its target attribute
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer"); // This is for security reasons
    });
  }, [selectedPost]); // Re-run the effect whenever selectedPost changes

  return (
    <div className="Blog">
      <h2>Recent Posts</h2>
      <div className="Blog-grid">
        {posts.map((post) => (
          <div
            key={post.guid}
            className="Blog-card"
            onClick={() => setSelectedPost(post)}
          >
            <img src={post.thumbnail} alt={post.title} />
            <small>By:{post.author}</small>
            <h3>{post.title}</h3>
            <span className="Blog-card-bottom">
              <button className="Blog-button">Read More</button>
            </span>
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="Blog-overlay" onClick={() => setSelectedPost(null)}>
          <div
            className="Blog-overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="Blog-overlay-close"
              onClick={() => setSelectedPost(null)}
            >
              X
            </button>
            <h2>{selectedPost.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            <a
              href={selectedPost.link}
              target="_blank"
              rel="noopener noreferrer"
              className="Blog-overlay-button"
            >
              Read on Medium
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
