import { actionMerge } from "helper/rxjs-utils";
import { Subject } from "rxjs";
import { scan, shareReplay, startWith } from "rxjs/operators";

const POST_SET_POSTS = "POST_SET_POSTS";
const POST_ADD_POST = "POST_ADD_POST";
const POST_SET_LOADING = "POST_SET_LOADING";
const initialState: PostState = {
  posts: [],
  loading: false,
};

const setPosts$ = new Subject<Posts>();
export const onSetPosts = (posts: Posts): void => {
  setPosts$.next(posts);
};

const addPost$ = new Subject<Post>();
export const onAddPosts = (post: Post): void => {
  addPost$.next(post);
};

const setLoading$ = new Subject<boolean>();
export const onSetLoading = (loading: boolean): void => {
  setLoading$.next(loading);
};

const postAction$ = actionMerge({
  POST_SET_POSTS: setPosts$,
  POST_ADD_POST: addPost$,
  POST_SET_LOADING: setLoading$,
});

export const postState$ = postAction$.pipe(
  scan((state, action) => {
    switch (action.type) {
      case POST_SET_POSTS:
        return { ...state, posts: action.payload };
      case POST_ADD_POST:
        state = { ...state, posts: [action.payload, ...state.posts] };
        return { ...state };
      case POST_SET_LOADING:
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  }, initialState),
  startWith(initialState),
  shareReplay(1)
);
