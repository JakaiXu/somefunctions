import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
  actionBar: any;
};
const Modal = ({ onClose, actionBar, children }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-300 opacity-90" onClick={onClose}>
      <div className="fixed inset-40 p-10 bg-white ">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-container") as HTMLElement
  );
};

export default Modal;
