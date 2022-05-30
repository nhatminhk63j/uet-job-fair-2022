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
  return <div id={"seminars"} className={'text-center mt-5'}>
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
          <p>Tư vấn, định hướng nghề nghiệp, hướng dẫn hoàn thiện CV, chuẩn bị các
            kỹ năng cần thiết khi tham gia phỏng vấn.</p>
          <p>Thời gian: 14h00 thứ Bảy, ngày 18/6/2022.</p>
        </div>
        <div className={'seminar-slide'}>
          <h4>HỘI THẢO</h4>
          <h5>GIẢI TỎA CẢM XÚC TIÊU CỰC - LẤY LẠI TỰ TIN</h5>
          <p>Tư vấn tâm lý, truyền cảm hứng.</p>
          <p>Thời gian: 14h00 thứ Bảy, ngày 18/6/2022.</p>
        </div>
        <div className={'seminar-slide'}>
          <h4>HỘI THẢO</h4>
          <h5>BÍ QUYẾT CHINH PHỤC NHÀ TUYỂN DỤNG</h5>
          <p>Tư vấn, định hướng nghề nghiệp, hướng dẫn hoàn thiện CV, chuẩn bị các
            kỹ năng cần thiết khi tham gia phỏng vấn.</p>
          <p>Thời gian: 14h00 thứ Bảy, ngày 18/6/2022.</p>
        </div>
      </Slider>
    </Container>
  </div>;
};

export default Seminars;