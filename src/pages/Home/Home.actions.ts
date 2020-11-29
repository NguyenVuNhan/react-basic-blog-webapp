import { getPosts } from "api/posts.api";
import { useEffect } from "react";
import { onSetLoading, onSetPosts } from "state/post.state";

export const useFetchPosts = (): void => {
  useEffect(() => {
    onSetLoading(true);
    getPosts().subscribe((posts) => {
      onSetPosts(posts);
      onSetLoading(false);
    });
  }, []);
};
