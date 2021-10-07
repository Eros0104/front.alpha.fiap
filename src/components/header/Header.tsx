import React, { useEffect, useState } from 'react';
import { HeaderContainer, Logo } from './Header.styles';

const Header: React.FC = () => {
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
    <HeaderContainer isHidden={isHidden}>
      <Logo src="alpha-dark.png" />
    </HeaderContainer>
  );
};

export default Header;
