import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  top: 0%;
  position: fixed;
  z-index: 1000;
  height: 60px;
  width: 100%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  display: flex;
`;

export const Logo = styled.img`
  margin: 10px auto;
`;
