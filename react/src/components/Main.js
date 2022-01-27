import "../components/styles/main.scss";
import HomePage from "./HomePage";
import Blogs from "./Blogs";
import dataBlogs from "./DataBlogs";
import dataPosts from "./DataPosts";
import Posts from "./Posts";

export default function Main() {
  const blogs = dataBlogs.map((item) => {
    return <Blogs key={item.id} {...item} />;
  });

  const posts = dataPosts.map((item) => {
    return <Posts key={item.id} {...item} />;
  });

  return (
    <div>
      <HomePage />
      <sector className="some-grid">{posts}</sector>
      <sector>{blogs}</sector>
    </div>
  );
}
