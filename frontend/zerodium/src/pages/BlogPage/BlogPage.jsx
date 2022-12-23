import React from "react";
import { Link, useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BlogPage = () => {

    const { id } = useParams();

    return ( <main className="blog__page">
        <div className="container container-fluid">
        <div className="row mt-4">
            <div className="col-sm-12 col-md-12">
                <Card className="expanded_blog" >
                <Card.Body>
                <Card.Title>
                  Title {id}
                </Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem deserunt dicta quae fugiat id numquam fuga consectetur dignissimos, ullam quam aliquam delectus molestiae voluptas deleniti et eaque quibusdam fugit placeat!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/">
                <Button
                  className="read_more-btn"
                  variant="outline-secondary"
                  size="md"
                >
                  Back 
                </Button>
                </Link>
              </Card.Footer>
    
                </Card>
            </div>
        </div>
        </div>
    </main> );
}
 
export default BlogPage;