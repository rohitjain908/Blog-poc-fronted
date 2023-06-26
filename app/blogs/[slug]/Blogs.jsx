"use client";
import { useEffect } from "react";
import { getFormattedDate } from "../../../utils";
import ReactMarkDown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Blog({ blog }) {
  useEffect(() => {
    const links = document.querySelectorAll(
      '.table-contents-wrapper a[href^="#"]'
    );

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
          behavior: "smooth",
          top: targetElement.offsetTop - 160,
        });
      });
    });

    const items = document.querySelectorAll(".section-item");

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      items.forEach((item) => {
        const itemTop = item?.offsetTop;
        const itemBottom = itemTop + item?.offsetHeight;

        if (
          scrollPosition >= itemTop - 200 &&
          scrollPosition < itemBottom - 200
        ) {
          document
            .querySelector("#" + item.id + "-link")
            .classList.add("selected");
        } else {
          document
            .querySelector("#" + item.id + "-link")
            .classList?.remove("selected");
        }
      });
    });

    const images = document.querySelectorAll("img");
    // console.log(images);
    for (const image of images) {
      const src = image.src;
      console.log(src);
      if (src.includes("/uploads")) {
        // const path = src.
        const val = src.split("/uploads");
        image.setAttribute(
          "src",
          `http://127.0.0.1:1337/uploads${val[val.length - 1]}`
        );
      }
    }
  }, []);
  // console.log(blog.data.attributes.thumbnail.data.attributes.url);
  return (
    <div class="mt-[72px] lg:mt-[101px] resource-blog overflowing-stack-ai">
      <div class="table-contents-wrapper">
        <div class="header-text mb-4"> Table of contents: </div>
        <div class="content-body">
          {blog?.data?.attributes?.sections?.data?.map((section, index) => (
            <>
              <a href={`#item-${index}`}>
                <div id={`item-${index}-link`} class="body-item content-text">
                  {section?.attributes?.Heading}
                </div>
              </a>
              {index !== blog?.data?.attributes?.sections?.data.length - 1 && (
                <hr />
              )}
            </>
          ))}
        </div>
        <div class="icon-container">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@synaptic.com"
            target="_blank"
            class="inline-block mr-5"
          >
            <img class="h-8 w-8" src="/images/social/mail.svg" />
          </a>
          <a
            href="https://twitter.com/synaptic_data"
            class="inline-block mr-5"
            target="_blank"
          >
            <img class="h-8 w-8" src="/images/social/twitter.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/synaptic-data/"
            target="_blank"
            class="inline-block mr-2"
          >
            <img class="h-8 w-8" src="/images/social/linkedin.svg" />
          </a>
        </div>
      </div>
      <div class="mt-8 lg:mt-0 max-w-[870px] blog-content">
        <div class="lg:mt-[80px]">
          <div class="text-xs  lg:text-sm text-[#858E9D] font-semibold tracking-[2px]">
            {" "}
            BLOG&nbsp;&nbsp;•&nbsp;&nbsp;
            {blog?.data?.attributes
              ? getFormattedDate(blog?.data?.attributes?.date)
              : "JAN 2006"}
          </div>
          <h1 class="text-xl  lg:text-7xl mt-1 blog-heading lg:mt-1">
            {blog?.data?.attributes
              ? blog?.data?.attributes?.title
              : "The Synaptic Growth Index: Quantifying Growth Momentum of Startups"}
          </h1>
          <img
            class="rounded-lg mt-4 lg:mt-10 w-full h-full heading-spacing"
            src={
              blog?.data?.attributes?.thumbnail?.data?.attributes?.url
                ? `http://127.0.0.1:1337${blog?.data?.attributes?.thumbnail?.data?.attributes?.url}`
                : "/image-1.webp"
            }
          />
          <div>
            {blog?.data?.attributes?.sections?.data?.map((section, index) => (
              <div
                id={`item-${index}`}
                class="section-item mb-10"
                // dangerouslySetInnerHTML={{
                //   __html: section.attributes.description,
                // }}
              >
                <ReactMarkDown
                  rehypePlugins={[rehypeRaw]}
                  children={
                    section.attributes.Body || section.attributes.description
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
