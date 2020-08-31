import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 32em;
  max-height: calc(100vh - 4em);
  width: calc(100vw - 4em);
  padding: 1em;
  border-radius: 0.2em;
  background: white;
  transform: translate(-50%, -50%);
`;

export default function Modal({ children }) {
  return (
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}
