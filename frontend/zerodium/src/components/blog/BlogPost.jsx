import React, { useState, useEffect } from "react";
import axios from "axios";

import "./blogs.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const cardsBaseUrl = "https://zerodroidiumapi.up.railway.app/blogs/cards";

  const [cards, setCards] = useState();

  useEffect(() => {
    axios.get(cardsBaseUrl).then((response) => {
      if (response.status === 200) {
        setCards(response.data);
        // console.log(response)
      } else {
        setCards(null);
      }
    });
  }, []);

  return (
    <main className="container container-fluid mt-2">
      <div className="row test">
        <>
          {cards === undefined ? (
            <Spinner animation="border" variant="light" />
          ) : (
            <>
              {cards === null ? (
                <p>Could not retrive articles.</p>
              ) : (
                <>
                  {cards.map(({ id, blogImage, blogTitle, blogContent }) => {
                    return (
                      <div className="col-md-4 mt-4" key={id}>
                        <Card className="blog_post">
                          <Card.Img
                            variant="top"
                            src={blogImage}
                            className="blog_post-img img-fluid img-thumbnail"
                          />
                          <Card.Body>
                            <Card.Title className="blog_title">
                              {blogTitle}
                            </Card.Title>
                            <Card.Text className="blog_content">
                              {blogContent}
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>
                            <Link to={`/blog/${id}`}>
                            <Button
                              className="read_more-btn"
                              variant="outline-secondary"
                              size="md"
                            >
                              Read More
                            </Button>
                            </Link>
                          </Card.Footer>
                        </Card>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </>
      </div>
    </main>
  );
};

export default BlogPost;
