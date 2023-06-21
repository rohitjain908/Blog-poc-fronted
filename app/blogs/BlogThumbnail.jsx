import styles from "../../styles/Home.module.css";
import "../../styles/globals.css";
import "../../styles/app.scss";

export default function BlogThumnail({ blog }) {
  return (
    <div className="resource-card flex flex-col xl:transition xl:duration-300 xl:ease-in-out mb-12 xl:mb-0 first-item">
      <a target="_blank" href={`http://localhost:3000/blogs/${blog.id}`}>
        <div className="img-container">
          <img
            className="xl:transition xl:duration-300 xl:ease-in-out"
            src={
              blog?.attributes?.thumbnail?.data?.attributes?.url
                ? `http://127.0.0.1:1337${blog?.attributes?.thumbnail?.data?.attributes?.url}`
                : "/image-1.webp"
            }
          />
        </div>
        <div className="flex flex-col info-container">
          <div className="flex flex-row">
            <div className="tag-without-border tag-light pb-2">Blog</div>
            <div
              className="tag-without-border tag-light pb-2 px-2"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              •
            </div>
            <div className="tag-without-border tag-light pb-2">Jan 2006</div>
          </div>
          <h4 className="heading-medium">{blog.attributes.title}</h4>
          <div className="flex justify-start mt-2">
            <div
              className='"button-secondary action-button'
              style={{ padding: "0px", border: 0 }}
            >
              Read More
              <i
                class="icon icon-Right-arrow-long"
                className={styles.icon_Right_arrow_long}
              ></i>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
