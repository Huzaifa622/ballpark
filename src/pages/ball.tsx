import Template from "../layout/template";
import BallPark from "../components/ball-park/ball-park";
import Layout from "../layout/layout";

const Ball = () => {
  return (
    <div className="h-screen overflow-auto example ">
      <Template>
        <Layout />
        <div className="">
          <BallPark />
        </div>
      </Template>
    </div>
  );
};

export default Ball;
