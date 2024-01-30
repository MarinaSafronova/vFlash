import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import React, { FunctionComponent, ReactNode } from "react";

interface IModalProps {
  children?: ReactNode;
  isOpen: boolean;
  toggle: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Modal: FunctionComponent<IModalProps> = ({
  children,
  isOpen,
  toggle,
}) => {
  const modal = (
    <>
      <div className={styles.overlay} onClick={toggle}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.box}>
            <div onClick={toggle} className={styles.close}></div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};
