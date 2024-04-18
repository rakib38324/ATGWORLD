import  { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { FaAngleDown, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const MainNavbar = () => {
  const [modalState, setModalState] = useState("close");

  const handleShowModalOne = () => {
    setModalState("modal-one");
  };

  const handleShowModalTwo = () => {
    setModalState("modal-two");
  };

  const handleClose = () => {
    setModalState("close");
  };

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const onSubmitSignUp = (data) => {
    console.log(data);
  };

  const onSubmitLogIn = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar className="position-relative " bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="fs-2">
            <span className="text-success">ATG.</span>W
            <span className="">
              <svg
                width="25"
                height="30"
                viewBox="0 0 25 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.3007 22.2V12.8205L11.9123 18.45H11.9452V24C9.93993 23.8981 7.99522 23.278 6.3007 22.2ZM13.6149 18.4845L19.2924 12.7935V22.1655C17.6003 23.2755 15.6368 23.9006 13.6149 23.973V18.4845ZM19.2924 18.2835V12.786H24.7706C24.6415 14.734 24.0334 16.6199 23.0005 18.276L19.2924 18.2835ZM2.59263 18.2835C1.55855 16.6252 0.950455 14.7366 0.822525 12.786H6.3007V18.276L2.59263 18.2835ZM9.30732 12.0165C9.30851 11.3294 9.51319 10.658 9.8955 10.0873C10.2778 9.5165 10.8206 9.07197 11.4553 8.80984C12.0899 8.54771 12.788 8.47973 13.4612 8.61451C14.1345 8.74929 14.7527 9.08078 15.2378 9.56707C15.7229 10.0534 16.053 10.6727 16.1865 11.3467C16.3201 12.0207 16.2509 12.7192 15.9879 13.3539C15.7249 13.9886 15.2798 14.5311 14.7088 14.9127C14.1379 15.2943 13.4667 15.498 12.7801 15.498C12.3236 15.4976 11.8717 15.4072 11.4502 15.2321C11.0286 15.0569 10.6457 14.8003 10.3232 14.477C10.0008 14.1538 9.74506 13.7701 9.57075 13.3479C9.39644 12.9257 9.30693 12.4733 9.30732 12.0165ZM19.1605 11.1465L13.6149 5.5965V0C15.6266 0.127176 17.5711 0.773109 19.2595 1.875V5.64L19.2759 5.6565H22.972C23.9983 7.30233 24.6051 9.17515 24.7391 11.1105L24.7706 11.1465H19.1605ZM0.789551 11.1465L0.830019 11.1C0.980743 9.1712 1.58635 7.30566 2.59712 5.6565H6.28421L6.3007 5.64V1.875C7.98907 0.773109 9.9336 0.127176 11.9452 0V5.5905L6.39962 11.1405L0.789551 11.1465Z"
                  fill="url(#paint0_linear_1_813)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_813"
                    x1="0.789551"
                    y1="10.464"
                    x2="12.7907"
                    y2="23.9906"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00A854" />
                    <stop offset="1" stopColor="#004D25" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            RLD{" "}
          </Navbar.Brand>

          <Navbar.Collapse
            className="border bg-light fs-4 rounded-0 rounded-pill w-50 position-absolute top-2 start-50 translate-middle-x"
            id="navbarScroll"
          >
            <svg
              className="mx-3  "
              width="20"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z"
                fill="#7A7A7A"
              />
            </svg>

            <InputGroup className="">
              <Form.Control
                className="border-0 bg-light fs-4 rounded-0 rounded-pill "
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Navbar.Collapse>

          <div className="pt-3  fw-bold">
            <p>
              Create account.{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={handleShowModalOne}
              >
                It is free!
                <FaAngleDown className="text-black"></FaAngleDown>
              </span>
            </p>
          </div>
        </Container>
      </Navbar>

      <div>
        <Modal show={modalState === "modal-one"}>
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title id="contained-modal-title-vcenter">
              Create Account
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            
            <form className="mt-10 w-3/5" onSubmit={handleSubmit(onSubmitSignUp)}>
              <InputGroup className="mb-0">
                <Form.Control
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="bg-light fs-4 rounded-0 border"
                />

                <Form.Control
                  {...register("last-name", { required: true })}
                  placeholder="Last Name"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                  className="bg-light fs-4 rounded-0"
                />
              </InputGroup>
              {errors.firstName && (
                <span className="text-danger">Please fill up Name</span>
              )}

              <Form.Control
                {...register("email", { required: true })}
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon3"
                className="bg-light fs-4 rounded-0 "
              />
              {errors.email && (
                <span className="text-danger">Please fill up Email field</span>
              )}

              <Form.Control
                {...register("password", { required: true })}
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon3"
                className="bg-light fs-4 rounded-0  "
              />
              {errors.password && (
                <span className="text-danger">
                  Please fill up Password field
                </span>
              )}

              <Form.Control
                {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password"
                aria-label="Username"
                aria-describedby="basic-addon3"
                className="bg-light fs-4 rounded-0 "
              />
              {errors.confirmPassword && (
                <span className="text-danger">
                  Please fill up Confirm Password field
                </span>
              )}

              <div className="d-flex justify-content-between my-4">
                <input
                  className="fs-4 p-2 px-4 rounded-pill bg-primary border-0 text-white"
                  style={{ cursor: "pointer" }}
                  type="submit"
                  value="Create Account"
                />

                <Link
                  onClick={handleShowModalTwo}
                  className="my-auto fs-5 text-black fw-bold"
                  style={{ cursor: "pointer" }}
                >
                  Or, Sign In
                </Link>
              </div>

              <div
                  className="w-100 border d-flex justify-content-center py-2 my-4"
                  style={{ cursor: "pointer" }}
                >
                  <FaFacebook className="fs-2 text-primary me-2 my-auto"></FaFacebook>
                  <p className="fs-4 my-auto">Sign up with Facebook</p>
                </div>

                <div
                  className="w-100 border d-flex justify-content-center py-2 mt-3"
                  style={{ cursor: "pointer" }}
                >
                  <FcGoogle className="fs-2  me-2 my-auto"></FcGoogle>
                  <p className="fs-4 my-auto">Sign up with Google</p>
                </div>
            </form>
            <p className="text-center mt-5">
              By SignUp, you agree to our Terms & <br /> conditions, Privacy
              Policy
            </p>
          </Modal.Body>
        </Modal>





        {/* Login Modal */}

        <Modal show={modalState === "modal-two"}>
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title id="contained-modal-title-vcenter">
              Create Account
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <form className="mt-10 " onSubmit={handleSubmit(onSubmitLogIn)}>
                <div className="form-control border-0 w-full ">
                  <Form.Control
                    {...register("email", { required: true })}
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon3"
                    className="bg-light fs-4 rounded-0 "
                  />
                  {errors.email && (
                    <span className="text-danger">
                      Please fill up Email field
                    </span>
                  )}

                  <Form.Control
                    {...register("password", { required: true })}
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon3"
                    className="bg-light fs-4 rounded-0  "
                  />
                  {errors.password && (
                    <span className="text-danger">
                      Please fill up Password field
                    </span>
                  )}
                </div>

                <div className="d-flex justify-content-between my-4">
                <input
                  className="fs-4 p-2 px-4 rounded-pill bg-primary border-0 text-white"
                  style={{ cursor: "pointer" }}
                  type="submit"
                  value="Sign In"
                />

                <Link
                  onClick={handleShowModalOne}
                  className="my-auto fs-5 text-black fw-bold"
                  style={{ cursor: "pointer" }}
                >
                  Or, Create Your Account
                </Link>
              </div>

                <div
                  className="w-100 border d-flex justify-content-center py-2 my-4"
                  style={{ cursor: "pointer" }}
                >
                  <FaFacebook className="fs-2 text-primary me-2 my-auto"></FaFacebook>
                  <p className="fs-4 my-auto">Sign up with Facebook</p>
                </div>

                <div
                  className="w-100 border d-flex justify-content-center py-2 mt-3"
                  style={{ cursor: "pointer" }}
                >
                  <FcGoogle className="fs-2  me-2 my-auto"></FcGoogle>
                  <p className="fs-4 my-auto">Sign up with Google</p>
                </div>
              </form>
              <p
                to="#"
                className="text-center mt-5"
                style={{ cursor: "pointer" }}
              >
                Forget Password?
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default MainNavbar;
