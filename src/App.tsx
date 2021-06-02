import "./style.module.scss";
import Header from "./components/header/Header";
import Clock from "./components/clocks/Clock";
import Footer from "./components/footer/Footer";
import Background from "./components/background/Images";

function App() {
  return (
    <div>
      <Header />
      <Background />
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
