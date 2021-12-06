import "./Modal.scss";
import { BaseSyntheticEvent } from "react";

type ModalProps = {
  img?: string;
  alt?: string;
  informations?: string;
  id?: string;
  onClose?: () => void;
  countryName?: string;
};

export default function Modal({
  img,
  alt,
  informations,
  id = "modal",
  onClose = () => {},
  countryName,
}: ModalProps) {
  function handleOutSideClick(event: BaseSyntheticEvent) {
    if (event.target.id === id) {
      onClose();
    }
  }

  return (
    <section
      id={id}
      className="modalSection"
      onClick={(event) => {
        handleOutSideClick(event);
      }}
    >
      <div className="modalContainer">
        <div>
          <img src={img} alt={alt} />
          <span>{countryName}</span>
        </div>
        <div>
          <h1>Country Location...</h1>
          <h2>{informations}</h2>
          <span></span>
        </div>
      </div>
    </section>
  );
}
