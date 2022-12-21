import React, { useState, useEffect } from "react";
// import axios from "axios";

import "./blogs.css";

import FeaturedBlogIMG from "../../assets/mobile-development.jpg";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FeaturedBlog = () => {
  const featuredBlogBaseUrl = "https://zerodroidiumapi.up.railway.app/blogs/1";

  const [featuredPost, setFeaturedPost] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(featuredBlogBaseUrl);
      console.log(response);

      if (response.ok) {
        const results = await response.json();
        console.log("Some data fetched");
        setFeaturedPost(results.data)
      } else {
        console.log("No posts");
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
                  <p>Could not retrive blog posts.</p>
                ) : (
                  <>
                    <div className="col-md-4">
                      <Card.Img
                        variant="top"
                        src={FeaturedBlogIMG}
                        className="featured_blog-img img-fluid img-thumbnail"
                      />
                    </div>
                    <div className="col-md-8">
                      <Card.Body className="featured_blog-content">
                        <Card.Title className="featured_blog-title">
                          Android Development
                        </Card.Title>
                        <Card.Text className="featured_blog-content">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sint repellat, quo possimus eius magnam laborum,
                          quod illum facere neque, odio officiis id magni
                          maxime! Atque maxime similique reiciendis nisi porro.
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
