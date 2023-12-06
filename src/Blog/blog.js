import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../static/styles/blog/blog.css";
import Title from "../common/title";
import Loading from "../common/loading";

const Blog = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    $.ajax({
      url: "https://api.rss2json.com/v1/api.json",
      method: "GET",
      dataType: "json",
      data: {
        rss_url: `https://medium.com/feed/@${username}`,
        api_key: process.env.api_key,
      },
    })
      .done(function (response) {
        if (response.status !== "ok") {
          throw new Error(response.message);
        }
        setPosts(response.items);
        setIsLoading(false);
      })
      .fail(function (error) {
        console.error("Error fetching Medium posts:", error);
        setIsLoading(false);
      });
  }, [username]);

  return (
    <>
      <Title titleText="Recent Posts" />
      <div className="Blog">
        {isLoading ? (
          <Loading />
        ) : (
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
        )}
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
    </>
  );
};

export default Blog;
