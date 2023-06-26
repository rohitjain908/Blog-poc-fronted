import axios from "axios";
import styles from "../../styles/Home.module.scss";
import BlogThumnail from "./BlogThumbnail";
import FiltersBar from "./FiltersBar";

async function getData() {
  try {
    const res = await axios.get(
      `http://127.0.0.1:1337/api/blogs?populate=thumbnail`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
export default async function Blogs() {
  const blogs = await getData();
  return (
    <div className="flex">
      <FiltersBar/>
      <div className="max-w-7xl mx-auto">
          <h1 className="text-center">Blogs</h1>
          <div className="grid grid-cols-1 xl:grid-cols-3 mt-20 px-6 xl:px-0 flex-row">
            {blogs.data.map((blog) => (
              <BlogThumnail blog={blog} />
            ))}
            <BlogThumnail />
            <BlogThumnail />
            <BlogThumnail />
            <BlogThumnail />
          </div>
      </div>
    </div>
  );
}
