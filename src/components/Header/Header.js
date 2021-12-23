import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainHeaderActionGroupLeft>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </MainHeaderActionGroupLeft>
        <Logo />
        <MainHeaderActionGroupRight>
          <SubscribeWidget>
            <Button>Subscribe</Button>
            <AlreadySubscribedLink>Already a subscriber?</AlreadySubscribedLink>
          </SubscribeWidget>
        </MainHeaderActionGroupRight>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
    align-items: baseline;
  }
`;

const MainHeaderActionGroup = styled(ActionGroup)`
  flex: 1;
  display: flex;

  @media not all and ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const MainHeaderActionGroupLeft = styled(MainHeaderActionGroup)`
  justify-content: flex-start;
`;

const MainHeaderActionGroupRight = styled(MainHeaderActionGroup)`
  justify-content: flex-end;
`;

const SubscribeWidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const AlreadySubscribedLink = styled.a`
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
