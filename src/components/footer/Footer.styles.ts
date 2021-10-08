import styled from 'styled-components';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: 30px 16px;
  text-align: center;
`;

export const ArrowIcon = styled(KeyboardArrowUpIcon)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightFont};
`;

export const FooterContainer = styled.div``;
