import React from 'react';
import { MdClose } from 'react-icons/md';
import * as S from './styles';

function Modal({ children, onClose = () => {} }) {
  return (
    <S.Container>
      <S.Content>
        <S.CloseButton>
          <button type="button" onClick={onClose}>
            <MdClose color="black" size="20px" />
          </button>
        </S.CloseButton>

        <S.AppDiv>{children}</S.AppDiv>
      </S.Content>
    </S.Container>
  );
}

export default Modal;
