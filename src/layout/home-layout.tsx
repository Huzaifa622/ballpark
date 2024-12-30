import Footer from "../components/Home/footer";
import Cursor from "../components/ui/cursor";


import Header from "../components/ui/header";
import { Outlet } from "react-router";
// import Template from "./template";

export default function HomeLayout() {
  return (
    <>
    <Cursor/>
      <Header/>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
      {/* <Footer/> */}
    </>
  );
}