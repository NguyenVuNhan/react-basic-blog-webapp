import Loading from "components/atoms/Loading";
import { Page404 } from "pages/Error";
import React from "react";
import Badge from "react-bootstrap/Badge";
import { useParams } from "react-router-dom";
import { useFetchPost } from "../PostFeatured.actions";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = useFetchPost(id);

  if (post === undefined) return <Loading />;

  return post === null ? (
    <Page404 />
  ) : (
    <div className="container">
      <h1 className="display-4 text-center">{post.title}</h1>
      <p>
        <strong>Date: </strong>
        {post.date_posted.toLocaleDateString("en-US", dateOptions)}
      </p>
      <p>
        <strong>Tag: </strong>
        {post.tags.map((tag, index) => (
          <Badge key={index} variant="primary" className="ml-1">
            {tag}
          </Badge>
        ))}
      </p>
      <p>
        <strong>Content: </strong>
      </p>
      {post.content}
    </div>
  );
};

export default PostDetails;
