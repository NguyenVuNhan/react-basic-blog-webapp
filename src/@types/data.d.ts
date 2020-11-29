interface Post {
  id: number;
  title: string;
  date_posted: Date;
  tags: string[];
  content: string;
}
type Posts = Post[];
