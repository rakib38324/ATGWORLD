import axios from "axios";
import  { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MeetAndJobPost from "../Post/MeetAndJobPost";
import Search from "../Search/Search";

const Event = () => {
  const [events, setEvents] = useState([]);
  axios.get("demoData.json").then((data) => {
    const eventPost = data.data;
    const filterEvent = eventPost.filter((event) => {
      if (event.postType === "Meetup") {
        return event;
      }
    });
    setEvents(filterEvent);
  });
  return (
    <div className="container">
      <Row>
        <Col sm={12} lg={9}>
        {events.map((post, i) => (
              <MeetAndJobPost key={i} post={post}></MeetAndJobPost>
            ))}
        </Col>

        <Col className=".d-sm-none .d-md-block" lg={3}>
          <Search></Search>
        </Col>
      </Row>
    </div>
  );
};

export default Event;
