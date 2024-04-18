import axios from "axios";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MeetAndJobPost from "../Post/MeetAndJobPost";
import Search from "../Search/Search";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  axios.get("demoData.json").then((data) => {
    const posts = data.data;
    const filterPosts = posts.filter((post) => {
      if (post.postType === "Job") {
        return post;
      }
    });
    setJobs(filterPosts);
  });

  return (
    <div className="container">
      <Row>
        <Col sm={12} lg={9}>
          {jobs.map((job, i) => (
            
            <MeetAndJobPost key={i} post={job}></MeetAndJobPost>
          ))}
        </Col>

        <Col className=".d-sm-none .d-md-block" lg={3}>
         <Search></Search>
        </Col>
      </Row>
    </div>
  );
};

export default Job;
