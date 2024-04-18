import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  FaSearchLocation,
  FaPencilAlt,
  FaExclamationCircle,
} from "react-icons/fa";

const Search = () => {
  return (
    <div className="my-5 flex mx-auto">
      <InputGroup size="sm" className="mb-3 ">
        <InputGroup.Text
          id="inputGroup-sizing-sm"
          className="border-0 border-bottom bg-white pb-2 fs-4"
        >
          {" "}
          <FaSearchLocation></FaSearchLocation>
        </InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          className=" border-0 border-bottom pb-2"
          placeholder="Dhaka, Bangladesh"
        />
        <FaPencilAlt className="my-auto"></FaPencilAlt>
      </InputGroup>

      <p className="text-secondary mt-4">
        <FaExclamationCircle className="text-secondary me-3 "></FaExclamationCircle>
        Your location will help us serve better and extend a personalised
        experience.
      </p>
    </div>
  );
};

export default Search;
