import { Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";
import Body from "./Body/Body";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Body></Body>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
