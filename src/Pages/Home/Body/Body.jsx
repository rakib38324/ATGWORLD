import { useEffect, useState } from "react";

import { FaAngleDown, FaUsers } from "react-icons/fa";
import "./Body.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Body = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch("demoData.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <div className="d-none d-lg-block border-bottom pb-3">
        <div className=" container d-flex justify-content-between mt-5 ">
          <div className="fs-5 d-flex gap-4 ">
            <Link className="text-black text-decoration-none" to="/">All Post({post.length})</Link>
            <Link className="text-black text-decoration-none" to="/article">Article</Link>
            <Link className="text-black text-decoration-none" to="/event">Event</Link>
            <Link className="text-black text-decoration-none" to="/education">Education</Link>
            <Link className="text-black text-decoration-none" to="/job">Job</Link>
          </div>

          <div>
            <button className="border-0 p-2 fs-5 rounded">
              Write a Post
              <FaAngleDown></FaAngleDown>
            </button>

            <button className="border-0 p-2 fs-5 ms-3 bg-primary text-white rounded">
              <FaUsers className="me-2"></FaUsers>
              Join Group
            </button>
          </div>
        </div>
      </div>

     <div className="d-lg-none my-4 mx-3">
     <div className="d-flex justify-content-between">
        <h2 className="fw-bold">Posts:({post.length})</h2>
        <div >
          <Dropdown>
            <Dropdown.Toggle variant="success"  id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">All Post</Dropdown.Item>
              <Dropdown.Item href="/article">Article</Dropdown.Item>
              <Dropdown.Item href="/event">Event</Dropdown.Item>
              <Dropdown.Item href="/education">Education</Dropdown.Item>
              <Dropdown.Item href="/job">Job</Dropdown.Item>
              
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
     </div>

      
    </div>
  );
};

export default Body;
