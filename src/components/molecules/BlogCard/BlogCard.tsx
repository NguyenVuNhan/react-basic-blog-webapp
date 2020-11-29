import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

interface Props {
  post: Post;
}

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="p-2">
      <Card className="h-100">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {post.date_posted.toLocaleDateString("en-US", dateOptions)}
          </Card.Subtitle>
          <Card.Text className="flex-grow-1">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="primary" className="mr-1">
                {tag}
              </Badge>
            ))}
          </Card.Text>
          <Link to={`/post/${post.id}`}>
            <Card.Link>Read post</Card.Link>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;
