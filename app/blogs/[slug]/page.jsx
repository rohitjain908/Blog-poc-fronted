import axios from "axios";

async function getData() {
  try {
    const res = await axios.get(`http://127.0.0.1:1337/api/blogs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function getBlogData(id) {
  try {
    const res = await axios.get(
      `http://127.0.0.1:1337/api/blogs/${id}?populate=sections`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Page({ params }) {
  const blogData = await getBlogData(params.slug);
  return <h1>My Page</h1>;
}

export async function generateStaticParams() {
  const blogs = await getData();
  return blogs.data.map((blog) => {
    return { slug: String(blog.id) };
  });
}
