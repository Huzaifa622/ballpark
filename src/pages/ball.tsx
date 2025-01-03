import Template from "../layout/template";
import BallPark from "../components/ball-park/ball-park";
import Layout from "../layout/layout";

const Ball = () => {
  return (
    <div className="h-screen overflow-auto example flex flex-col">
      <Template>
        <Layout />
        <div className="h-screen">
          <BallPark />
        </div>
      </Template>
    </div>
  );
};

export default Ball;
