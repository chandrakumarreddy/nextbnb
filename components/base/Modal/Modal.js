import { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { ModalContainer, ModalContent } from "./Modal.css";

const modalRoot =
  typeof document !== "undefined" && document?.getElementById("modal-root");
export default function Modal({ id = "", children, className = "", onClose }) {
  const ref = useRef();
  const [animation, setAnimation] = useState(null);
  useEffect(() => {
    window.addEventListener("keydown", onEscapeKeyDown, false);
    ref.current = setTimeout(() => {
      setAnimation("in");
    }, 0);
    return () => {
      clearTimeout(ref.current);
      window.removeEventListener("keydown", onEscapeKeyDown);
    };
  }, []);
  const onEscapeKeyDown = (e) => {
    if (e.key !== "Escape") return;
    setAnimation("out");
  };
  const transitionEnd = (e) => {
    if (e.propertyName !== "opacity" || animation === "in") return;
    if (animation === "out") {
      onClose();
    }
  };
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setAnimation("out");
  // };
  return ReactDom.createPortal(
    <ModalContainer
      id={id}
      role="dialog"
      //   modalSize={size}
      onTransitionEnd={transitionEnd}
      className={`${className} fade-${animation}`}
    >
      <ModalContent>{children}</ModalContent>
    </ModalContainer>,
    modalRoot
  );
}
