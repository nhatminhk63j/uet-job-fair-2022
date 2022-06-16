import React, {useEffect, useState} from 'react';
import Banner from '../HomePage/components/Banner';
import {Col, Container, Navbar, Row} from 'react-bootstrap';
import './style.css';
import {Helmet} from 'react-helmet';
import {useParams} from 'react-router-dom';
import {companyService} from '../../services';

// const company = {
//   id: '1',
//   name: 'Công ty TNHH Phát triển phần mềm Toshiba (Việt Nam)',
//   logo: 'https://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadLogoCompany?CompanyId=29',
//   description: '',
//   phoneNumber: '0384721376',
//   email: 'nhatns.uet@vnu.edu.vn',
//   address: '215 Quan Hoa, Cau Giay, Ha Noi',
//   website: 'https://nhatns.uet.vnu.edu.vn',
//   facebook: '...',
//   linkedin: '...',
// };

const Company = () => {
  const {id} = useParams();
  const [company, setCompany] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    companyService.getCompaniesById(id).then(res => {
      setCompany(res.data.data);
      setIsLoading(false);
    });
  }, []);

  return (<>
    {!isLoading && company && <Helmet>
      <meta charSet="utf-8" />
      <title>{company.name}</title>
      <meta name="description" content={company.description} />
    </Helmet>}
    <div className={'menu'}>
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
        </Container>
      </Navbar>
    </div>
    <Banner />
    {!isLoading && company && <Container>
      <Row className={'mt-5'}>
        <Col xs={12} md={4} xl={4}>
          <div className="company-info">
            <img src={company.logo} alt={company.name} />
            <h5 className={'mt-3 mb-3'}>{company.name}</h5>
            <div><b>Địa chỉ: </b>{company.address}</div>
            <div><b>Hotline: </b>{company.phoneNumber}</div>
            <div><b>Email: </b>{company.email}</div>
            <div><b>Website: </b>{company.website}</div>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="company-description">
            <div className="company-description-title">
              <h5>Giới thiệu về doanh nghiệp</h5>
              <hr />
            </div>
            <div className="company-description-content"
                 dangerouslySetInnerHTML={{
                   __html: company.description.replaceAll('\n', '<br />'),
                 }}>

            </div>
          </div>
        </Col>
      </Row>
    </Container>}
  </>);
};

export default Company;