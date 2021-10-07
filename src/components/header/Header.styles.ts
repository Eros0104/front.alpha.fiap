import styled from 'styled-components';

export const StyledHeader = styled.header<{ isHidden: boolean }>`
  background-color: ${({ theme }) => theme.colors.background};
  top: ${({ isHidden }) => (isHidden ? '-60px' : 0)};
  position: fixed;
  z-index: 1000;
  height: 60px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  display: flex;
  transition: 0.3s ease-out;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Logo = styled.img`
  margin: 7px 0;
`;
