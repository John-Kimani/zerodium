import React, { useState, useEffect } from "react";
// import axios from "axios";

import "./blogs.css";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FeaturedBlog = () => {
  const featuredBlogBaseUrl = "https://zerodroidiumapi.up.railway.app/blogs/1";

  const [featuredPost, setFeaturedPost] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(featuredBlogBaseUrl);

      if (response.ok) {
        const results = await response.json();
        setFeaturedPost(results);
      } else {
        setFeaturedPost(null);
      }
    })();
  }, []);

  return (
    <main className="feature">
      <Card className="featured_blog">
        <div className="row">
          <>
            {featuredPost === undefined ? (
              <Spinner animation="border" variant="light" />
            ) : (
              <>
                {featuredPost === null ? (
                  <p>Could not retrive featured blog post.</p>
                ) : (
                  <>
                    <div className="row">
                      <div key={featuredPost.id} className="col-md-4 featured_blog-img">
                        <Card.Img
                          variant="top"
                          src={featuredPost.blogImage}
                          className="img-fluid img-thumbnail"
                        />
                      </div>
                      <div className="col-md-8">
                        <Card.Body className="featured_blog-content">
                          <Card.Title className="featured_blog-title">
                            {featuredPost.blogTitle}
                          </Card.Title>
                          <Card.Text className="featured_blog-content">
                            {featuredPost.blogContent}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <Button
                            className="read_more-btn"
                            variant="outline-secondary"
                            size="md"
                          >
                            Read More
                          </Button>
                        </Card.Footer>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        </div>
      </Card>
    </main>
  );
};

export default FeaturedBlog;
