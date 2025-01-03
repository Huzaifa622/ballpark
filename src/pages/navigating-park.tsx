import Template from "../layout/template";
import NavDescription from "../components/navigating-park/description";
import Layout from "../layout/layout";

export default function NavPark() {
  return (
    <div className="h-screen overflow-auto example flex flex-col">
    <Template>
      <Layout />
      <div className="flex-grow example">
      <NavDescription />
      </div>
    </Template>
    </div>
  );
}
