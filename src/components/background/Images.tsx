import "./Images.scss";
import time from "../../assets/time.svg";
import time2 from "../../assets/time2.svg";

export default function Background() {
  return (
    <div className="backgroundContainer">
      <img className="timeOne" src={time} alt="Time woman" />
      <span className="textOne">Your country...</span>

      <img className="timeTwo" src={time2} alt="Clock" />
      <span className="textTwo">Your time...</span>
    </div>
  );
}
