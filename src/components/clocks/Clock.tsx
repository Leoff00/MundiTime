import { useEffect, useState } from "react";
import "./Clock.scss";
import { Times } from "./TimeZone";

export default function Clock() {
  const [seconds, setSeconds]: any = useState(0);
  const [minutes, setMinutes]: any = useState(0);
  const [hours, setHours]: any = useState(0);

  const [southAfricaHour, setSouthAfricaHour]: any = useState(0);
  const [arabiaHour, setArabiaHour]: any = useState(0);
  const [australiaHour, setAustraliaHour]: any = useState(0);
  const [brazilHour, setBrazilHour]: any = useState(0);

  const [canadaHour, setCanadaHour]: any = useState(0);
  const [chinaHour, setChinaHour]: any = useState(0);
  const [ivoryCoast, setIvoryCoast]: any = useState(0);
  const [ecuadorHour, setEcuadorHour]: any = useState(0);

  useEffect(() => {
    setInterval(() => {
      let minute = new Date().getMinutes();
      let second = new Date().getSeconds();

      setSouthAfricaHour(Times.southAfricaHour);
      setArabiaHour(Times.arabiaHour);
      setAustraliaHour(Times.australiaHour);
      setBrazilHour(Times.brazilHour);

      setCanadaHour(Times.canadaHour);
      setChinaHour(Times.chinaHour);
      setIvoryCoast(Times.ivoryCoastHour);
      setEcuadorHour(Times.ecuadorHour);

      if (second < 10) {
        setSeconds(`0${second}`);
      } else {
        setSeconds(second);
      }

      if (minute < 10) {
        setMinutes(`0${minute}`);
      } else {
        setMinutes(minute);
      }

      // Making the comparasing
      if (Times.southAfricaHour < 10) {
        setSouthAfricaHour(`0${Times.southAfricaHour}`);
      } else {
        setSouthAfricaHour(Times.southAfricaHour);
      }

      if (Times.arabiaHour < 10) {
        setArabiaHour(`0${Times.arabiaHour}`);
      } else {
        setArabiaHour(Times.arabiaHour);
      }

      if (Times.australiaHour < 10) {
        setAustraliaHour(`0${Times.australiaHour}`);
      } else {
        setAustraliaHour(Times.australiaHour);
      }

      if (Times.brazilHour < 10) {
        setBrazilHour(`0${Times.brazilHour}`);
      } else {
        setBrazilHour(Times.brazilHour);
      }
    }, 1000);
  }, []);

  return (
    <section>
      <div className="clocksContainer">
        <div className="clocks">
          <img src="../../img/africadosul.svg" alt="South Africa" />
          <span className="secondSpan">
            {southAfricaHour}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/arabiasaudita.svg" alt="Saudi Arabia" />
          <span className="secondSpan">
            {arabiaHour}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/australia.svg" alt="Australia" />
          <span className="secondSpan">
            {australiaHour}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/brasil.svg" alt="Brazil" />
          <span className="secondSpan">
            {brazilHour}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/canada.svg" alt="Canada" />
          <span className="secondSpan">
            {canadaHour}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/china.svg" alt="China" />
          <span className="secondSpan">
            {chinaHour}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/costadomarfim.svg" alt="Ivory Coast" />
          <span className="secondSpan">
            {ivoryCoast}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/equador.svg" alt="Equador" />
          <span className="secondSpan">
            {ecuadorHour}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/espanha.svg" alt="Spain" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/eua.svg" alt="United States" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/grecia.svg" alt="Greece" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/islandia.svg" alt="Island" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/japao.svg" alt="Japan" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/novazelandia.svg" alt="New Zeland" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/portugal.svg" alt="Portugal" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/russia.svg" alt="Russia" />
          <span className="secondSpan">
            {hours}:{minutes}:{seconds}
          </span>
        </div>
      </div>
    </section>
  );
}
