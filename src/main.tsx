import { render } from "react-dom";
import "antd/dist/antd.less";
import "./index.less";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./feature/store";
import { Provider } from "react-redux";

const store = setupStore();

const app =
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>;

render(app, document.getElementById("root"));
