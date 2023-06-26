import axios from "axios";
import Blog from "./Blogs";

async function getData() {
  try {
    const res = await axios.get(`http://127.0.0.1:1337/api/blogs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function getBlogData(slug) {
  try {
    const res = await axios.get(
      `http://127.0.0.1:1337/api/blogs/?populate=*&filters[slug]=${slug}`
    );
    if (res.data.data?.length) return res.data.data[0];
    return undefined;
  } catch (err) {
    console.log(err);
  }
}

export default async function Page({ params }) {
  const blogData = await getBlogData(params.slug);
  return <Blog blog={blogData} />;
}

export async function generateStaticParams() {
  const blogs = await getData();
  return blogs.data.map((blog) => {
    return { slug: String(blog.attributes.slug) };
  });
}
