import { useState } from "react";

import { Modal } from "./Modal";

export const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <footer>
        <button className="rules" onClick={toggleModal}>
          Rules
        </button>
      </footer>
      {modal && <Modal toggle={toggleModal} />}
    </>
  );
};
