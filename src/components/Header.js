import styled from 'styled-components';

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src='./images/logo.svg' alt='Disney+' />
      </Logo>
      <NavMenu>menu</NavMenu>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #090b13;
  letter-spacing: 16px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  padding: 0;


  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  margin: 0;
  margin-right: auto;
  margin-left: 25px;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  flex-flow: row nowrap;
  position: relative;

  @media (max-width: 786px) {
    display: none;
  }
`;

export default Header