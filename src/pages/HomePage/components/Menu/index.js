import React, {useEffect} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './style.css';

const Menu = () => {
  return <div className={'menu'}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className={'d-flex align-items-center'}>
          <img
              src={'https://storage.googleapis.com/teko-growth-dev/2022-06-15%2005:23:34.959321984%20+0000%20UTC%20m=+4199875.636865605-%5BLogo%5D%20UET%20Job%20Fair_White.png'}
              className="d-inline-block align-top"
              alt="Uet logo"
              height={75}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={'justify-content-end flex-grow-1 pe-3'}>
            <Nav.Link eventKey={1} href="#seminars">Hội thảo</Nav.Link>
            <Nav.Link eventKey={2} href="#timeline">
              Timeline
            </Nav.Link>
            <Nav.Link eventKey={3} href="#sponsors">
              Doanh nghiệp tài trợ
            </Nav.Link>
            <Nav.Link href="#contact" eventKey={4}>
              Liên hệ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>;
};

export default Menu;