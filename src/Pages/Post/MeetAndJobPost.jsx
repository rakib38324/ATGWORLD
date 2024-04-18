import PropTypes from "prop-types";
import {
  FaEllipsisH,
  FaEye,
  FaShareAltSquare,
  FaCalendarAlt,
  FaSearchLocation,
} from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

const MeetAndJobPost = ({ post }) => {
  const {
    postType,
    location,
    image,
    postTitle,
    postDate,
    authorName,
    totalView,
    authorImage,
    button,
  } = post;
  return (
    <div>
      <div>
        <div className="border my-2">
          <img className="w-100" src={image} alt="" />

          <div className="d-flex ms-4 my-3">
            <FaCalendarAlt className="my-auto fs-3"></FaCalendarAlt>
            <p className="fs-4 ms-2 fw-bold my-auto">{postType}</p>
          </div>
          <div className="ms-4">
            <h3 className="d-flex justify-content-between">
              {postTitle}

              <Dropdown>
                <Dropdown.Toggle className="bg-white border-0">
                  <FaEllipsisH className="me-2 text-black"></FaEllipsisH>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </h3>
          </div>
          <div className="mx-2 d-flex">
            <div className="d-flex me-5">
              <FaCalendarAlt className="my-auto ms-3"></FaCalendarAlt>
              <p className="fs-5 my-auto ms-2 fw-bold">{postDate}</p>
            </div>
            <div className="d-flex">
              <FaSearchLocation className="my-auto ms-3 fs-5"></FaSearchLocation>
              <p className="fs-5 my-auto ms-2 fw-bold">{location}</p>
            </div>
          </div>

          <div style={{ cursor: "pointer" }}>
            <p className="border text-center py-2 fw-bold text-danger w-75 mx-auto rounded my-5">
              {button}
            </p>
          </div>

          <div className="d-flex justify-content-between mx-3 my-4">
            <div className="d-flex">
              <img
                className="rounded-circle"
                style={{ width: "50px" }}
                src={authorImage}
                alt=""
              />
              <h4 className="my-auto ms-3">{authorName}</h4>
            </div>

            <div className="d-flex">
              <FaEye className="my-auto me-2 fs-5"></FaEye>
              <p className="my-auto fs-5">{totalView} views</p>
              <FaShareAltSquare className="my-auto ms-5 fs-2"></FaShareAltSquare>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetAndJobPost;

MeetAndJobPost.propTypes = {
  post: PropTypes.element.any,
};
