import Template from "../layout/template"
import BallPark from "../components/ball-park/ball-park"
import Layout from "../layout/layout"


const Ball = () => {
  return (
    <div className="overflow-hidden h-screen -mt-10">
    <Template>
        <Layout/>
        <BallPark/></Template>
        </div>)
}

export default Ball