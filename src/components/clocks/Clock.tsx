/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import "./Clock.scss";
import { OPTIONS, specifyDate } from "./timezone";

export default function Clock() {

  const [minutesCounter, setMinutesCount] = useState<string | number>("")
  const [secondsCounter, setSecondsCount] = useState<string | number>("")

  const [southAfricaTimezone, setSouthAfricaTimezone] = useState<string>(null);
  const [saudiArabiaTimezone, setSaudiArabiaTimezone] = useState<string>(null);
  const [australiaTimezone, setAustraliaTimezone] = useState<string>(null);
  const [brazilTimezone, setBrazilTimeZone] = useState<string>(null);

  const [canadaTimezone, setCanadaTimezone] = useState<string>(null);
  const [chinaTimezone, setChinaTimezone] = useState<string>(null);
  const [ivoryCoastTimezone, setIvoryCoastTimezone] = useState<string>(null);
  const [ecuadorTimezone, setEcuadorTimezone] = useState<string>(null);

  const [spainTimezone, setSpainTimezone] = useState<string>(null);
  const [usaTimezone, setUsaTimezone] = useState<string>(null);
  const [greeceTimezone, setGreeceTimezone] = useState<string>(null);
  const [icelandTimezone, setIcelandTimezone] = useState<string>(null);

  const [japanTimezone, setJapanTimezone] = useState<string>(null);
  const [newZelandTimezone, setNewZelandTimezone] = useState<string>(null);
  const [portugalTimezone, setPortugalTimezone] = useState<string>(null);
  const [russiaTimezone, setRussiaTimezone] = useState<string>(null);

  useEffect(() => {

    setInterval(() => {
      let minute = new Date().getMinutes();
      let second = new Date().getSeconds();

      setSouthAfricaTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.SOUTH_AFRICA_TIMEZONE));
      setSaudiArabiaTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.SAUDI_ARABIA_TIMEZONE));
      setAustraliaTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.AUSTRALIA_TIMEZONE));
      setBrazilTimeZone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.BRAZIL_TIMEZONE));

      setCanadaTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.CANADA_TIMEZONE));
      setChinaTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.CHINA_TIMEZONE));
      setIvoryCoastTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.IVORY_COAST_TIMEZONE));
      setEcuadorTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.ECUADOR_TIMEZONE));

      setSpainTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.SPAIN_TIMEZONE));
      setUsaTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.USA_TIMEZONE));
      setGreeceTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.GREECE_TIMEZONE));
      setIcelandTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.ICELAND_TIMEZONE));

      setJapanTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.JAPAN_TIMEZONE));
      setNewZelandTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.NEW_ZELAND_TIMEZONE));
      setPortugalTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.PORTUGAL_TIMEZONE));
      setRussiaTimezone(specifyDate(OPTIONS.DEFAULT_LOCALE, OPTIONS.RUSSIA_TIMEZONE));
      

      second < 10 ? setSecondsCount(`0${second}`) : setSecondsCount(second);
      minute < 10 ? setMinutesCount(`0${minute}`) : setMinutesCount(minute);
      

    }, 1000);
  }, []);

  return (
    <section>
      <div className="clocksContainer">
        <div className="clocks">
          <img src="../../img/africadosul.svg" alt="South Africa" />
          <span className="firstSpan">South Africa</span>
          <span className="secondSpan">
            {southAfricaTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/arabiasaudita.svg" alt="Saudi Arabia" />
          <span className="firstSpan">Saudi Arabia</span>
          <span className="secondSpan">
            {saudiArabiaTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/australia.svg" alt="Australia" />
          <span className="firstSpan">Australia</span>
          <span className="secondSpan">
            {australiaTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/brasil.svg" alt="Brazil" />
          <span className="firstSpan">Brazil</span>
          <span className="secondSpan">
            {brazilTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/canada.svg" alt="Canada" />
          <span className="firstSpan">Canada</span>
          <span className="secondSpan">
            {canadaTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/china.svg" alt="China" />
          <span className="firstSpan">China</span>
          <span className="secondSpan">
            {chinaTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/costadomarfim.svg" alt="Ivory Coast" />
          <span className="firstSpan">Ivory Coast</span>
          <span className="secondSpan">
            {ivoryCoastTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/equador.svg" alt="Ecuador" />
          <span className="firstSpan">Ecuador</span>
          <span className="secondSpan">
            {ecuadorTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/espanha.svg" alt="Spain" />
          <span className="firstSpan">Spain</span>
          <span className="secondSpan">
            {spainTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/eua.svg" alt="United States" />
          <span className="firstSpan">United States</span>
          <span className="secondSpan">
            {usaTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/grecia.svg" alt="Greece" />
          <span className="firstSpan">Greece</span>
          <span className="secondSpan">
            {greeceTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/islandia.svg" alt="Iceland" />
          <span className="firstSpan">Iceland</span>
          <span className="secondSpan">
            {icelandTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/japao.svg" alt="Japan" />
          <span className="firstSpan">Japan</span>
          <span className="secondSpan">
            {japanTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/novazelandia.svg" alt="New Zeland" />
          <span className="firstSpan">New Zeland</span>
          <span className="secondSpan">
            {newZelandTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/portugal.svg" alt="Portugal" />
          <span className="firstSpan">Portugal</span>
          <span className="secondSpan">
            {portugalTimezone}
          </span>
        </div>
        <div className="clocks">
          <img src="../../img/russia.svg" alt="Russia" />
          <span className="firstSpan">Russia</span>
          <span className="secondSpan">
            {russiaTimezone}
          </span>
        </div>
      </div>
    </section>
  );
}
