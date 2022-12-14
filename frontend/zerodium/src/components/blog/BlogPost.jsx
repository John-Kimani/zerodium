import "./blogs.css";
import { BlogPosts } from "./Data";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BlogPost = () => {
  return (
    <main className="container container-fluid mt-5">
      <div className="row test">
        {BlogPosts.map(({ id, blogImage, blogTitle,blogContent }) => {
          return (
            <div className="col-md-4 mt-4">
              <Card key={id} className="blog_post">
                <Card.Img variant="top" src={blogImage} className="blog_post-img img-fluid img-thumbnail"/>
                <Card.Body>
                  <Card.Title className="blog_title">{blogTitle}</Card.Title>
                  <Card.Text className="blog_content">
                    {blogContent }
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button className="read_more-btn" variant="outline-secondary" size="md">
                Read More
              </Button>
                </Card.Footer>
              </Card>
            </div>
          )
        })}
      </div>
    </main>
  );
};

export default BlogPost;
