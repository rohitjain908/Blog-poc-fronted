"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/Home.module.scss";
import BlogThumnail from "./BlogThumbnail";
import FiltersBar from "./FiltersBar";
import { SERVERURL } from "../../config";
import qs from "qs";

async function getTags() {
  try {
    const response = await axios.get(`${SERVERURL}/tags`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
async function getData(query) {
  try {
    const res = await axios.get(`${SERVERURL}/blogs?${query}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);
  const selectedValue = (tags) => {
    setSelectedTags(tags);
    setQueryHandler();
  };

  const searchInputHandler = (value) => {
    setSearchInput(value);
    setQueryHandler(value);
  };
  const [query, setQuery] = useState("populate[0]=thumbnail&populate[1]=tags");
  useEffect(() => {
    getData(query)
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  useEffect(() => {
    getTags().then((res) => setTags(res));
  }, []);
  const setQueryHandler = (search) => {
    const qry = qs.stringify(
      {
        populate: ["thumbnail", "tags"],
        filters: {
          tags: {
            title: {
              $in: selectedTags,
            },
          },
          title: {
            $containsi: search != undefined ? search : searchInput,
          },
        },
      },
      { encodeValuesOnly: true }
    );
    // console.log(qry);
    setQuery(qry);
  };

  return (
    <div className="flex">
      <FiltersBar
        tags={tags.data}
        selectedTags={selectedTags}
        setSelectedTags={selectedValue}
        searchInput={searchInput}
        setSearchInput={searchInputHandler}
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center">Blogs</h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 mt-20 px-6 xl:px-0 flex-row">
          {blogs?.data?.map((blog) => (
            <BlogThumnail blog={blog} />
          ))}
          {/* <BlogThumnail />
          <BlogThumnail />
          <BlogThumnail />
          <BlogThumnail /> */}
        </div>
      </div>
    </div>
  );
}

export default async function Blogs() {
  return <BlogList />;
}
