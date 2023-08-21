import { Router } from "./routers/Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";

import { Provider } from "react-redux";
import { store } from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
