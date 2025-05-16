import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Toaster />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
