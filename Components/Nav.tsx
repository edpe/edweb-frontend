import styled from 'styled-components'

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0;
`

const NavLink = styled.a`
  font-family: 'RobotoSlab';
  margin: 1rem;
  color: ${(props) => props.theme.colors.darkGrey};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.indigo};
  }

  &:focus {
    text-decoration: underline;
  }
`

const Nav = (): JSX.Element => {
  return (
    <NavList>
      <li>
        <NavLink href="/">home</NavLink>
      </li>
      <li>
        <NavLink href="/about">about</NavLink>
      </li>
    </NavList>
  )
}

export default Nav
