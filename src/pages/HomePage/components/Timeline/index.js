import React from 'react';
import './style.css';
import {Container} from 'react-bootstrap';

const Timeline = () => {
  return (<Container className={'text-center mt-5'} id={"timeline"}>
    <div className="d-flex justify-content-center text-center">
      <div className="line" />
      <h4 className="intro-content-title">CÁC MỐC THỜI GIAN NGÀY HỘI</h4>
      <div className="line" />
    </div>
    <Container>
      <div
          className="register d-flex justify-content-center align-items-center flex-column">
        <p className="mt-3 mt-3">
          Chương trình diễn ra xuyên suốt hơn một tuần từ 18/6-29/6 là cơ hội có
          1-0-2 để giao lưu trực tiếp cùng Nhà tuyển dụng bạn yêu thích, ứng
          tuyển ngay công việc mơ ước và rinh thêm nhiều quà tặng minigame thú
          vị được “ẩn giấu” trong các gian hàng chờ bạn khám phá!
        </p>
        <div className="wrap">
          <button className={'register-button mb-3'}>THAM GIA NGAY!</button>
        </div>

        <p className="mb-5">Đây là cơ hội mở cho tất cả các bạn, nếu chưa sẵn
          sàng
          sơ vấn/phỏng vấn, nhà tuyển dụng vẫn tư vấn, chia sẻ, giao lưu cùng
          bạn.
          Đừng ngần ngại, hãy nhấn tham gia ngay nhé!</p>
      </div>
    </Container>
    <div className="timeline">
      <div className="timeline-row">
        <div className="timeline-time">
          Thứ bảy, 18/6/2022<small>14 giờ 00 phút</small>
        </div>
        <div className="timeline-content">
          <h4>Hội thảo 1</h4>
          <p>Bí quyết chinh phục nhà tuyển dụng</p>
        </div>
      </div>

      <div className="timeline-row">
        <div className="timeline-time">
          Chủ nhật, 19/6/2022<small>14h00 chủ nhật</small>
        </div>
        <div className="timeline-content">
          <h4>Hội thảo 2</h4>
          <p>Giải tỏa cảm xúc tiêu cực và lấy lại tự tin</p>
        </div>
      </div>

      <div className="timeline-row">
        <div className="timeline-time">Thứ tư, 29/6/2022<small></small>
        </div>
        <div className="timeline-content">
          <h4>UET JobFair 2022</h4>
          <p>
            Ngày hội việc làm - Kết nối để thành công năm 2022
          </p>
        </div>
      </div>

      <div className="timeline-row">
        <div className="timeline-time">
          Tối thứ tư, ngày 29/6/2022<small></small>
        </div>
        <div className="timeline-content">
          <h4>Dấu ấn K63</h4>
          <p>Gala chia tay sinh viên K63</p>
        </div>
      </div>
    </div>
  </Container>);
};

export default Timeline;