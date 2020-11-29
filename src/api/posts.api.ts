import posts from "../__mock__/posts";
import { defer, Observable } from "rxjs";

export const getPosts = (): Observable<Post[]> =>
  defer(
    () =>
      new Promise<Post[]>((resolve) => {
        setTimeout(
          () =>
            resolve(
              posts.map(
                (v) => ({ ...v, date_posted: new Date(v.date_posted) } as Post)
              )
            ),
          100
        );
      })
  );

export const getPost = (id: string): Observable<Post | null> =>
  defer(
    () =>
      new Promise<Post | null>((resolve) => {
        setTimeout(() => {
          const tmpPost = posts.find((post) => post.id.toString() === id);
          const post: Post | null = tmpPost
            ? { ...tmpPost, date_posted: new Date(tmpPost.date_posted) }
            : null;
          resolve(post);
        }, 100);
      })
  );

export const addPost = (post: Post): Observable<void> =>
  defer(
    () =>
      new Promise<void>((resolve) =>
        setTimeout(() => {
          post.id = Date.now();
          posts.unshift({
            ...post,
            date_posted: post.date_posted.toISOString(),
          });
          resolve();
        }, 100)
      )
  );
