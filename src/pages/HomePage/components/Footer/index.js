import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './style.css';
import {
  BsEnvelopeOpenFill,
  BsFacebook,
  BsFillHouseDoorFill,
  BsFillTelephoneInboundFill,
} from 'react-icons/bs';
import {AiTwotoneCopyright} from 'react-icons/ai';

const Footer = () => {
  return <>
    <Container className={'footer'} id={'contact'}>
      <Row>
        <Col xs={12} md={6} className={'footer-col'}>
          <h5>TRƯỜNG ĐẠI HỌC CÔNG NGHỆ - ĐHQGHN</h5>
          <p><BsFillHouseDoorFill /> 144 Xuân Thủy, Cầu Giấy, Hà Nội</p>
          <p><BsEnvelopeOpenFill /> jobfair.uet@vnu.edu.vn</p>
          <p><BsFacebook /> https://www.facebook.com/NHVLCN</p>
          <p><BsFillTelephoneInboundFill /> (+84) 866 985 612</p>
        </Col>
        <Col xs={12} md={6} className={'footer-col'}>
          <h5>NGÀY HỘI VIỆC LÀM CÔNG NGHỆ - UET JOB FAIR 2022</h5>
          <div>© VNU-UET-Faculty of Information Technology. All rights reserved.</div>
        </Col>
      </Row>
    </Container>
  </>;
};

export default Footer;