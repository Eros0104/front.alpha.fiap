import React, { useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from 'src/components';
import {
  StyledHeader,
  Logo,
  ButtonContainer,
  HeaderContainer,
} from './Header.styles';

interface Props {
  onClickMenu: () => void;
}

const Header: React.FC<Props> = ({ onClickMenu }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [oldScrollTop, setOldScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setOldScrollTop(scrollTop);
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    setIsHidden(oldScrollTop < scrollTop);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <StyledHeader isHidden={isHidden}>
      <HeaderContainer>
        <ButtonContainer>
          <IconButton onClick={onClickMenu}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </ButtonContainer>
        <Logo src="alpha-dark.png" />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
