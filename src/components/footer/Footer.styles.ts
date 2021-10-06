import styled from 'styled-components';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  text-align: center;
`;

export const ArrowIcon = styled(KeyboardArrowUpIcon)`
  cursor: pointer;
`;

export const FooterContainer = styled.div``;
