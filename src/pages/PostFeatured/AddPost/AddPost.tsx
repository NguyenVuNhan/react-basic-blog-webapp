import React, { FormEvent } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { addNewPost } from "../PostFeatured.actions";
import { useHistory } from "react-router-dom";

const AddPost: React.FC = () => {
  const history = useHistory();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const newPost: LooseObject = { date_posted: new Date() };

    for (const name of Array.from(data.keys())) {
      const item = form.elements.namedItem(name);

      if (item !== null) {
        const value = (item as HTMLInputElement).value;
        switch (name) {
          case "tags":
            newPost[name] = value.split(",").map((tag) => tag.trim());
            break;
          default:
            newPost[name] = value;
        }
      }
    }

    addNewPost(newPost as Post, () => {
      history.push("/home");
    });
  };

  return (
    <Form className="container" onSubmit={onSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          <strong>Title</strong>
        </Form.Label>
        <Col sm="10">
          <Form.Control name="title" placeholder="Title" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          <strong>Tags</strong>
        </Form.Label>
        <Col sm="10">
          <Form.Control name="tags" placeholder="Tags" />
        </Col>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <strong>Post Content</strong>
        </Form.Label>
        <Form.Control name="content" as="textarea" rows={3} />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default AddPost;
