import { Router } from "./routers/Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./shared/styles/global";

import { Provider } from "react-redux";
import { store } from "./store";

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
