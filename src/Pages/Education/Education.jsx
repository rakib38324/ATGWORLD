import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Post from "../Post/Post";
import Search from "../Search/Search";


const Education = () => {

  const [education, setEducation] = useState([]);
  axios.get("demoData.json").then((data) => {
    const posts = data.data;
    const filterPosts = posts.filter((post) => {
      if (post.postType === "Education") {
        return post;
      }
    });
    setEducation(filterPosts);
  });


  return (
    <div className="container">
      <Row>
        <Col sm={12} lg={9}>
          {education.map((edu, i) => (
            <Post key={i} post={edu}></Post>
          ))}
        </Col>

        <Col className=".d-sm-none .d-md-block" lg={3}>
          <Search></Search>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
