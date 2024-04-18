import PropTypes from 'prop-types';
import { FaEllipsisH, FaEye,FaShareAltSquare } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

const Post = ({ post }) => {
  const {
    postType,
    logo,
    image,
    postTitle,
    postDetails,
    authorName,
    totalView,
    authorImage,
  } = post;
  return (
    <div>
      <div>
        <div className="border my-2">
          <img className="w-100" src={image} alt="" />

          <div className="d-flex m-2">
            <img className="logo" src={logo} alt="" />
            <p className="fs-4 ms-2 fw-bold">{postType}</p>
          </div>
          <div className="m-2">
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
          <p className="m-2 text-truncate">{postDetails}</p>

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

export default Post;



Post.propTypes ={
   post: PropTypes.element.any
}
