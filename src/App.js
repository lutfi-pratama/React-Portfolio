import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Jumbotron />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
