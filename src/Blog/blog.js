import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../static/styles/blog/blog.css";
import Title from "../common/title";
import Loading from "../common/loading";

const Blog = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const extractImageUrlFromContent = (content) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, "text/html");
    const imgTag = htmlDoc.querySelector("figure img");
    return imgTag ? imgTag.src : null; // Return the src if an img tag is found, otherwise null
  };

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
    <div className="Blog-container section">
      <Title />
      <div className="container">
        <div className="heading">
          <h1>Recent Posts</h1>
        </div>
        <div className="Blog ">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="Blog-grid">
              {posts.map((post) => {
                const imageUrl = extractImageUrlFromContent(post.content);
                return (
                  <div
                    key={post.guid}
                    className="Blog-card"
                    onClick={() => setSelectedPost(post)}
                  >
                    <img src={imageUrl} alt={post.title} />
                    <small>By:{post.author}</small>
                    <h3>{post.title}</h3>
                    <span className="Blog-card-bottom">
                      <button className="Blog-button">Read More</button>
                    </span>
                  </div>
                );
              })}
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
                <div
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
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
      </div>
    </div>
  );
};

export default Blog;
