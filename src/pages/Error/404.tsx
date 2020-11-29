import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Page404: React.FC = () => {
  return (
    <div className="d-flex vh-100 wh-100 align-items-center justify-content-center">
      <Card>
        <Card.Body>
          <h1 className="display-1 text-center">oops!</h1>
          <h3 className="p-2">Error 404 : Page Not Found</h3>
          <div className="d-flex justify-content-center">
            <Link to="/">
              <Button variant="primary">Home</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Page404;
