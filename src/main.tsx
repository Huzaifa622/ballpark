import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { TracingBeam } from "./components/ui/tracing-beam.tsx";
// import { BrowserRouter } from "react-router-dom";
// import Template from "./layout/template.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <Template> */}
    
      {/* <TracingBeam className="z-[999999999999999999999999999999999999]"> */}
        <div className="main font-Roboto   ">
          <App />
        </div>
      {/* </TracingBeam> */}
      {/* </Template> */}
    {/* </BrowserRouter> */}
  </StrictMode>
);
