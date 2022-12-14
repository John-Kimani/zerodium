import "./blogs.css";
import FeaturedBlogIMG from "../../assets/mobile-development.jpg"

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FeaturedBlog = () => {
  return (
    <main className="feature">
      <Card className="featured_blog">
        <div className="row">
          <div className="col-md-4">
            <Card.Img variant="top" src={FeaturedBlogIMG} className="featured_blog-img img-fluid img-thumbnail"/>
          </div>
          <div className="col-md-8">
            <Card.Body className="featured_blog-content">
              <Card.Title className="featured_blog-title">Android Development</Card.Title>
              <Card.Text className="featured_blog-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                repellat, quo possimus eius magnam laborum, quod illum facere
                neque, odio officiis id magni maxime! Atque maxime similique
                reiciendis nisi porro.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="read_more-btn" variant="outline-secondary" size="md">
                Read More
              </Button>
            </Card.Footer>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default FeaturedBlog;
