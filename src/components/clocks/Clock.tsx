import { useEffect, useState } from "react";
import "./Clock.scss";

import { format, setDate } from "date-fns";
import { setInterval } from "timers";

export default function Clock() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [dates, setDates] = useState("");

  useEffect(() => {
    setInterval(() => {
      let date = new Date().toUTCString();
      let hour = new Date().getHours();
      let minute = new Date().getMinutes();
      let second = new Date().getSeconds();

      setDates(date);
      setHours(hour);
      setMinutes(minute);
      setSeconds(second);
    }, 1000);
  }, []);

  return (
    <section>
      <div className="clocksContainer">
        <div className="clocks">
          <img src="../../img/africadosul.svg" alt="South Africa" />
          <span className="secondSpan">
            {dates}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/arabiasaudita.svg" alt="Saudi Arabia" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/australia.svg" alt="Australia" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/brasil.svg" alt="Brazil" />
          <span className="secondSpan">
            {dates}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/canada.svg" alt="Canada" />
          <span className="secondSpan">Canada</span>
        </div>
        <div className="clocks">
          <img src="../../img/china.svg" alt="China" />
          <span className="secondSpan">China</span>
        </div>
        <div className="clocks">
          <img src="../../img/costadomarfim.svg" alt="Costa do Marfim" />
          <span className="secondSpan">Costa do Marfim</span>
        </div>
        <div className="clocks">
          <img src="../../img/equador.svg" alt="Equador" />
          <span className="secondSpan">Equador</span>
        </div>
        <div className="clocks">
          <img src="../../img/espanha.svg" alt="Spain" />
          <span className="secondSpan">Spain</span>
        </div>
        <div className="clocks">
          <img src="../../img/eua.svg" alt="United States" />
          <span className="secondSpan">United States</span>
        </div>
        <div className="clocks">
          <img src="../../img/grecia.svg" alt="Greece" />
          <span className="secondSpan">Greece</span>
        </div>
        <div className="clocks">
          <img src="../../img/islandia.svg" alt="Island" />
          <span className="secondSpan">Island</span>
        </div>
        <div className="clocks">
          <img src="../../img/japao.svg" alt="Japan" />
          <span className="secondSpan">Japan</span>
        </div>
        <div className="clocks">
          <img src="../../img/novazelandia.svg" alt="New Zeland" />
          <span className="secondSpan">New Zeland</span>
        </div>
        <div className="clocks">
          <img src="../../img/portugal.svg" alt="Portugal" />
          <span className="secondSpan">Portugal</span>
        </div>
        <div className="clocks">
          <img src="../../img/russia.svg" alt="Russia" />
          <span className="secondSpan">Russia</span>
        </div>
      </div>
    </section>
  );
}
