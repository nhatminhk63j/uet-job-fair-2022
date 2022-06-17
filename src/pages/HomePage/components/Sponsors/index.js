import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './style.css';
import {companyService} from '../../../../services';

const Sponsors = () => {
  const [sponsor, setSponsor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    companyService.getCompanies().then(res => {
      setSponsor(res.data.data);
      setIsLoading(false);
    });
  }, []);

  return <div id={'sponsors'} className={'text-center mt-5 mb-5'}>
    <Container>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="line" />
        <h4>NHÀ TÀI TRỢ</h4>
        <div className="line" />
      </div>
      {/*Diamond sponsors*/}
      <h4 className={'sponsor-title'}>NHÀ TÀI TRỢ KIM CƯƠNG</h4>
      <Row className={'justify-content-center'}>
        {!isLoading && sponsor &&
            sponsor.diamond?.map(sponsor => (<Col xs={12} md={6} xl={3}>
              <div className="sponsor-card mt-5">
                <h5><a href={`/sponsors/${sponsor.id}`}>{sponsor.name}</a></h5>
                <div className={'logo-sponsor'}><a href={sponsor.website}
                                                   target={'_blank'}><img
                    src={sponsor.logo} alt={sponsor.name} /></a></div>
              </div>
            </Col>))}
      </Row>

      {/*Gold sponsors*/}
      <h4 className={'sponsor-title mt-5'}>NHÀ TÀI TRỢ VÀNG</h4>
      <Row className={'justify-content-center'}>
        {!isLoading && sponsor &&
            sponsor.gold?.map(sponsor => (<Col xs={12} md={6} xl={3}>
              <div className="sponsor-card d-flex flex-column mt-5">
                <h5><a href={`/sponsors/${sponsor.id}`}>{sponsor.name}</a>
                </h5>
                <div className={'logo-sponsor'}><a href={sponsor.website}
                                                   target={'_blank'}><img
                    src={sponsor.logo} alt={sponsor.name} /></a></div>
              </div>
            </Col>))}
      </Row>

      {/*Silver sponsors*/}
      <h4 className={'sponsor-title mt-5'}>NHÀ TÀI TRỢ BẠC</h4>
      <Row className={'justify-content-center'}>
        {!isLoading && sponsor &&
            sponsor.silver?.map(sponsor => (<Col xs={12} md={6} xl={3}>
              <div className="sponsor-card d-flex flex-column mt-5">
                <h5><a href={`/sponsors/${sponsor.id}`}>{sponsor.name}</a>
                </h5>
                <div className={'logo-sponsor'}><a href={sponsor.website}
                                                   target={'_blank'}><img
                    src={sponsor.logo} alt={sponsor.name} /></a></div>
              </div>
            </Col>))}
      </Row>

      {/*Copper sponsors*/}
      <h4 className={'sponsor-title mt-5'}>NHÀ TÀI TRỢ ĐỒNG</h4>
      <Row className={'justify-content-center'}>
        {!isLoading && sponsor &&
            sponsor.copper?.map(sponsor => (<Col xs={12} md={6} xl={3}>
              <div className="sponsor-card d-flex flex-column mt-5">
                <h5><a href={`/sponsors/${sponsor.id}`}>{sponsor.name}</a>
                </h5>
                <div className={'logo-sponsor'}><a href={sponsor.website}
                                                   target={'_blank'}><img
                    src={sponsor.logo} alt={sponsor.name} /></a></div>
              </div>
            </Col>))}
      </Row>

      {/*Companion sponsors*/}
      <h4 className={'sponsor-title mt-5'}>DOANH NGHIỆP ĐỒNG HÀNH</h4>
      <Row className={'justify-content-center'}>
        {!isLoading && sponsor &&
            sponsor.companion?.map(sponsor => (<Col xs={12} md={6} xl={3}>
              <div className="sponsor-card d-flex flex-column mt-5">
                <h5><a href={`/sponsors/${sponsor.id}`}>{sponsor.name}</a>
                </h5>
                <div className={'logo-sponsor'}><a href={sponsor.website}
                                                   target={'_blank'}><img
                    src={sponsor.logo} alt={sponsor.name} /></a></div>
              </div>
            </Col>))}
      </Row>
    </Container>
  </div>;

};

export default Sponsors;