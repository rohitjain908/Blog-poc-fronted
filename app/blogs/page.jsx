import axios from "axios";
import styles from "../../styles/Home.module.scss";
import BlogThumnail from "./BlogThumbnail";
import FiltersBar from "./FiltersBar";
import { SERVERURL } from "../../config";

async function getData() {
  try {
    const res = await axios.get(`${SERVERURL}/blogs?populate=thumbnail`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function getTags() {
  try {
    const response = await axios.get(`${SERVERURL}/tags`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Blogs() {
  const blogs = await getData();
  const tags = await getTags();
  console.log(tags);
  return (
    <div className="flex">
      <FiltersBar />
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
