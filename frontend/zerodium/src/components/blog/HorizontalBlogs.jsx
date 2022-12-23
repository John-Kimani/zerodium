import "./blogs.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

const HorizontalBlogs = () => {

  const articlesBaseUrl = 'https://zerodroidiumapi.up.railway.app/blogs/old';

  const [articles, setArticles] = useState();

  useEffect(()=>{
    axios.get(articlesBaseUrl).then((response) => {
      if (response.status === 200){
        setArticles(response.data);
      }else{
        setArticles(null);
      }

    })
  }, []);

  return (
    <main className="horizontal__blogs">
      <div className="row">
        <>
        {articles === undefined ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <>
          {articles === null ? (
            <p>Could not retrive articles.</p>
          ) : (
            <>
            {articles.map( ({id, blogImage, blogTitle, blogContent}) => {
              return (
                <div className="col-md-12 mt-4" key={id}>
                <Card className="featured_blog" >
                <Card.Body>
                <Card.Title>
                  {blogTitle}
                </Card.Title>
                <Card.Text>
                  {blogContent}
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
    
                </Card>
            </div>
              )
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

export default HorizontalBlogs;
