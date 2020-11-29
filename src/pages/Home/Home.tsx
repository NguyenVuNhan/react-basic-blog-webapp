import Loading from "components/atoms/Loading";
import useObservable from "hooks/useObservable";
import React from "react";
import { postState$ } from "state/post.state";
import { useFetchPosts } from "./Home.actions";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import BlogCard from "components/molecules/BlogCard/BlogCard";

const Home: React.FC = () => {
  const postState = useObservable(postState$, (state) => state);

  useFetchPosts();

  if (postState?.loading || postState === undefined) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-3">
        <Link to="/post/add">
          <Button>Add New Post</Button>
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
        {postState.posts.map((post, index) => (
          <BlogCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
