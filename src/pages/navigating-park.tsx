import Template from "../layout/template";
import NavDescription from "../components/navigating-park/description";
import Layout from "../layout/layout";

export default function NavPark() {
  return (
    <div className="overflow-hidden" >
    <Template>
      <Layout />
      <NavDescription />
    </Template>
    </div>
  );
}
