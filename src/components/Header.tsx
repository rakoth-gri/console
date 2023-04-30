import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// custom components
import { Container, SpanIcon, Ul } from "../global/global";
import { MENU_LINKS } from "../constants/constants";

const Logo = styled.div`
  width: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.sm};
`;

const Nav = styled.nav`
  padding: ${({ theme }) => theme.padding.sm};
`;

const Li = styled.li`
  ${({ theme }) => `margin-right: ${theme.padding.sm}`};
  font-size: inherit;
`;

const NavCustomLink = styled(NavLink)`
  font-variant: small-caps;
  text-transform: capitalize;

  &.activeLink {
    color: ${({ theme }) => theme.colors.danger};
    text-decoration: underline;
  }
`;

export const Header = () => {
  const [active, setActive] = useState(0);

  return (
    <header>
      <Container>
        <Logo>
          <SpanIcon
            className="material-symbols-outlined"
            color="green"
            fontSize="2rem"
          >
            location_automation
          </SpanIcon>
        </Logo>
        <Nav>
          <Ul>
            {MENU_LINKS.map(({ path, text }, i) => (
              <Li key={path}>
                <NavCustomLink
                  to={path}
                  className={i === active ? "activeLink" : ""}
                  onClick={() => setActive(i)}
                >
                  {" "}
                  {text}{" "}
                </NavCustomLink>
              </Li>
            ))}
          </Ul>
        </Nav>
      </Container>
    </header>
  );
};
