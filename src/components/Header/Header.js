import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <IconButton title='Search'>
              <Search size={24} />
              <VisuallyHidden>Search</VisuallyHidden>
            </IconButton>
            <IconButton title='Open menu'>
              <Menu size={24} />
              <VisuallyHidden>Open Menu</VisuallyHidden>
            </IconButton>
          </ActionGroup>
          <ActionGroup>
            <IconButton title='Sign in'>
              <User size={24} />
              <VisuallyHidden>Sign in</VisuallyHidden>
            </IconButton>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <ActionGroup>
            <IconButton title='Search'>
              <Search size={24} />
              <VisuallyHidden>Search</VisuallyHidden>
            </IconButton>
            <IconButton title='Open menu'>
              <Menu size={24} />
              <VisuallyHidden>Open Menu</VisuallyHidden>
            </IconButton>
          </ActionGroup>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <Link href=''>Already a subscriber?</Link>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  background: var(--color-gray-900);
  color: white;

    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 8px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled.div`
  display: none;
    
  @media ${QUERIES.laptopAndUp} {
      display: revert;
  }  
`;

const IconButton = styled.button`
  padding: 16px;

  &:hover {
      opacity: 0.8;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
      margin-top: 48px;
      margin-bottom: 72px;
  }  

  @media ${QUERIES.laptopAndUp} {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr auto 1fr;
      align-items: baseline;
      margin-top: 16px;
      margin-bottom: 84px;
  }  
`;

const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
      display: flex;
      justify-self: end;
      flex-direction: column;
      align-items: center;
      gap: 8px;
  }
`;

const Link = styled.a`
  color: var(--color-gray-900);
  font-size: 0.875rem;
  font-style: italic;
  font-weight: var(--font-weight-normal);
  line-height: 1.375rem;
  text-decoration: underline;
    
  &:hover {
      text-decoration: none;
  }  
`;

export default Header;
