
import Card from "react-bootstrap/Card";
import img from "../../../Images/try1.jpg";
import "./Banner.css";
import { FaArrowLeft } from "react-icons/fa";



const Banner = () => {
  
  return (
    <div className="">
      {/* banner section */}
      <Card className=" text-white position-relative">
        <Card.Img className="img-fluid card-img" src={img} alt="Card image" />

        <button
          type="button"
          className="m-2 btn btn-outline-light 	d-block d-sm-none position-absolute top-0 end-0"
        >
          Join Group
        </button>

        <button
          type="button"
          className="m-2 btn btn-outline-light 	d-block d-sm-none position-absolute top-0 start-0"
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        <Card.ImgOverlay className="container position-absolute top-50 start-0 ">
          <h1 className="d-sm-position-absolute d-sm-bottom-50  d-lg-bottom-50 start-0 fw-bolder ">
            Computer Engineering <br />
            <span className="fs-6 fw-normal">
              142,785 Computer Engineers Follow this
            </span>
          </h1>
        </Card.ImgOverlay>
      </Card>

      
    </div>
  );
};

export default Banner;
