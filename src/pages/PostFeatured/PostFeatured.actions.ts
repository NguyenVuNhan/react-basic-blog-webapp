import { addPost, getPost } from "api/posts.api";
import { useEffect, useState } from "react";
import { onAddPosts, onSetLoading } from "state/post.state";

export const useFetchPost = (id: string): Post | undefined | null => {
  const [post, setPost] = useState<Post | null>();

  useEffect(() => {
    getPost(id).subscribe(setPost);
  }, []);

  return post;
};

export const addNewPost = (post: Post, callback: cbFn = () => {}): void => {
  onSetLoading(true);
  addPost(post).subscribe(() => {
    onAddPosts(post);
    onSetLoading(false);
    callback();
  });
};
