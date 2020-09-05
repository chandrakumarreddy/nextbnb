import styled from "styled-components";

export const ModalContainer = styled.div`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity linear 0.15s;
  opacity: 0;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  cursor: auto;
  top: 50%;
  left: 50%;
  max-width: 32em;
  max-height: calc(100vh - 4em);
  width: calc(100vw - 4em);
  padding: 1em;
  border-radius: 0.2em;
  background: white;
  transform: translate(-50%, -50%);
  z-index: 2000;
`;
