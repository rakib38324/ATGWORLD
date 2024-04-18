import axios from "axios";
import {  useState } from "react";
import Post from "../Post/Post";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "../Search/Search";

const Article = () => {
  const [articles, setArticles] = useState([]);
  axios.get("demoData.json").then((data) => {
    const posts = data.data;
    const filterPosts = posts.filter((post) => {
      if (post.postType === "Article") {
        return post;
      }
    });
    setArticles(filterPosts);
  });
  return (
    <div className="container">
      <Row>
        <Col sm={12} lg={9}>
        {articles.map((article, i) => (
              <Post key={i} post={article}></Post>
            ))}
        </Col>

        <Col className=".d-sm-none .d-md-block" lg={3}>
          <Search></Search>
        </Col>
      </Row>
    </div>
  );
};

export default Article;
