import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './style.css';

const Menu = () => {
  return <div className={'menu'}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className={'d-flex align-items-center'}>
          <img
              src={'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-UET.png'}
              className="d-inline-block align-top"
              alt="Uet logo"
              width={75}
              height={75}
          /> {' '}
          <b className={'m-2'}>UET Job Fair 2022</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={'justify-content-end flex-grow-1 pe-3'}>
            <Nav.Link href="#seminars">Hội thảo</Nav.Link>
            <Nav.Link eventKey={2} href="#timeline">
              Timeline
            </Nav.Link>
            <Nav.Link href="#contact" eventKey={3}>
              Liên hệ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>;
};

export default Menu;