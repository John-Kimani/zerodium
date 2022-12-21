import "./blogs.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const HorizontalBlogs = () => {
  return (
    <main className="horizontal__blogs">
      <div className="row">
        <div className="col-md-12">
            <Card className="featured_blog">
            <Card.Body>
            <Card.Title>
              Android Development
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              repellat, quo possimus eius magnam laborum, quod illum facere
              neque, odio officiis id magni maxime! Atque maxime similique
              reiciendis nisi porro.
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
      </div>
    </main>
  );
};

export default HorizontalBlogs;
