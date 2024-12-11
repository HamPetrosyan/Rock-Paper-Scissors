import { createPortal } from "react-dom";

export const Modal = ({ toggle }) => {
  return createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-header">
          <h1>Rules</h1>
          <button onClick={() => toggle()}>
            <img src="../src/images/icon-close.svg" alt="Close" />
          </button>
        </div>
        <img src="../src/images/image-rules.svg" alt="Rules" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};
