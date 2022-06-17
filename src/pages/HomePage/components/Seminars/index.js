import React from 'react';
import Slider from 'react-slick';
import './style.css';
import {Container} from 'react-bootstrap';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024, settings: {
        slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: false,
      },
    }, {
      breakpoint: 770, settings: {
        slidesToShow: 1, slidesToScroll: 1,
      },
    }, {
      breakpoint: 480, settings: {
        slidesToShow: 1, slidesToScroll: 1,
      },
    }],
};

const Seminars = () => {
  return <section id={'seminars'} className={'text-center mt-5'}>
    <Container>
      <div className="d-flex justify-content-center mt-5">
        <div className="line" />
        <h5>CHUỖI HỘI THẢO</h5>
        <div className="line" />
      </div>
      <h3 className={'mb-5'}>UET - TOGETHER WE CAN</h3>
      <Slider {...settings}>
        <div className={'seminar-slide'}>
          <h4>HỘI THẢO</h4>
          <h5>BÍ QUYẾT CHINH PHỤC NHÀ TUYỂN DỤNG</h5>
          <p>Cung cấp cho sinh viên những kỹ năng cần thiết để hoàn
            thiện bản thân, hoàn thiện CV, cách thức trả lời phỏng vấn
            để chinh phục nhà tuyển dụng.</p>
          <p>Thời gian: 14h00 thứ Bảy, ngày 18/6/2022.</p>
        </div>
        <div className={'seminar-slide'}>
          <h4>HỘI THẢO</h4>
          <h5>GIẢI TỎA CẢM XÚC TIÊU CỰC - LẤY LẠI TỰ TIN</h5>
          <p>Tư vấn, giải tỏa cảm giác lo âu, tiêu cực cho sinh viên,
            truyền cảm hứng để sinh viên có đủ tự tin chinh phục
            những khó khăn và thách thức trong quá trình học tập,
            nghiên cứu, thực hiện được ước mơ, hoài bão.</p>
          <p>Thời gian: 14h00 chủ nhật, ngày 19/6/2022.</p>
        </div>
        <div className={'seminar-slide'}>
          <h4>HỘI THẢO</h4>
          <h5>BÍ QUYẾT CHINH PHỤC NHÀ TUYỂN DỤNG</h5>
          <p>Cung cấp cho sinh viên những kỹ năng cần thiết để hoàn
            thiện bản thân, hoàn thiện CV, cách thức trả lời phỏng vấn
            để chinh phục nhà tuyển dụng.</p>
          <p>Thời gian: 14h00 thứ Bảy, ngày 18/6/2022.</p>
        </div>
      </Slider>
    </Container>
  </section>;
};

export default Seminars;