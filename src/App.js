import Login from "./components/Login";
import "./App.css";
import Signin from "./components/Signin";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import SearchAnime from "./components/SearchAnime";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/login" component={Login} />

        <Route exact path="/signin" component={Signin} />
        <Route exact path="/searchanime" component={SearchAnime} />
      </BrowserRouter>
    </div>
  );
}

export default App;
