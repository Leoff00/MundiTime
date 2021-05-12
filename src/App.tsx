import React from "react";
import "./style.module.scss";
import Header from "./components/header/Header";
import Clock from "./components/clocks/Clock";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
