import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRoutes from "./Navigation/AppRoutes";
import MainNavigation from "./Navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavigation />
        <div className="wrapper">
          <h1>Marine Mammals</h1>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
