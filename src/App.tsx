import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

