import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./modal.module.css";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.querySelector("#modal-root");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    return function () {
      window.addEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={classes.Overlay} onClick={handleBackdropClick}>
      <div className={classes.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
