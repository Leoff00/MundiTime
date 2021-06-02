import "./Header.scss";
import time3 from "../../assets/time3.svg";

export default function Header() {
  return (
    <div className="headerContainer">
      <img className="headerTimer" src={time3} alt="Time management" />
      <div className="headerTitleContainer">
        <h1>Mundi Time</h1>
        <h2>Time in some places in the world</h2>
      </div>
    </div>
  );
}
