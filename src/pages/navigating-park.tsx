import Template from "../layout/template";
import NavDescription from "../components/navigating-park/description";
import Layout from "../layout/layout";

export default function NavPark() {
  return (
    <div className="h-screen overflow-auto example ">
    <Template>
      <Layout />
      <div className="">
      <NavDescription />
      </div>
    </Template>
    </div>
  );
}
