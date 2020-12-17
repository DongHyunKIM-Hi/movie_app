import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./router/About";
import Home from "./router/Home";
import movie_detail from "./router/movie_detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie_detail" component={movie_detail} />
    </HashRouter>
  );
}

export default App;
