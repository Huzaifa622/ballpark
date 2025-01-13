import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import { store } from "./redux/store.tsx";

// import { TracingBeam } from "./components/ui/tracing-beam.tsx";
// import { BrowserRouter } from "react-router-dom";
// import Template from "./layout/template.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <Template> */}

    {/* <TracingBeam className="z-[999999999999999999999999999999999999]"> */}
    <div className="main font-Roboto   ">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
    {/* </TracingBeam> */}
    {/* </Template> */}
    {/* </BrowserRouter> */}
  </StrictMode>
);
