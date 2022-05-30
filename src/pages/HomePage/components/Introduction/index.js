import React from 'react';
import './style.css';
import introImage from '../../../../images/HomePage/introduction.jpg';
import {Col, Container, Row} from 'react-bootstrap';
import ReactShowMoreText from 'react-show-more-text';

const Introduction = () => {
  return <div className={'intro-content'}>
    <div className="d-flex justify-content-center text-center">
      <div className="line" />
      <h4 className="intro-content-title">GIỚI THIỆU VỀ NGÀY HỘI</h4>
      <div className="line" />
    </div>
    <Container className={'mt-5'}>
      <Row>
        <Col xs={12} md={6}>
          <img src={introImage} alt="" className="intro-content-image" />
        </Col>
        <Col xs={12} md={6} className={'intro-content-content'}>
          <p> Học kỳ 2 năm học 2021 – 2022, Trường Đại học Công nghệ - ĐHQGHN
            có
            gần xxx sinh viên chuẩn bị tốt nghiệp, và trên xxxx sinh viên
            chuẩn
            bị đăng ký thực tập tại doanh nghiệp. Để hỗ trợ cho sinh viên tìm
            kiếm được việc làm và nơi thực tập phù hợp nhất, Nhà trường đã xây
            dựng kế hoạch hướng nghiệp cho sinh viên, bao gồm các hội thảo
            hướng
            nghiệp, đăng tin tuyển dụng, tiến cử hồ sơ theo yêu cầu,… và tổ
            chức
            JobFair.
          </p>
          <p> Sự kiện Job-Fair 2022 được tổ chức nhằm mục tiêu:
          </p>
          <ul>
            <li>Tạo điều kiện để 20 - 25 doanh nghiệp tiếp cận lựa chọn nguồn
              nhân lực
              chất lượng cao và cơ hội quảng bá thương hiệu nhà tuyển dụng tại
              Đại
              học Công nghệ - ĐHQGHN.
            </li>
            <li> Tạo môi trường cho sinh viên Việt Nam và sinh viên quốc tế
              đang
              học
              tại trường Đại học Công nghệ - ĐHQGHN gặp gỡ, giao lưu và tìm
              kiếm cơ hội tuyển dụng
              trực
              tiếp tại ngày hội như việc làm bán thời gian, thực tập và làm
              việc
              chính thức.
            </li>
            <li>
              <ReactShowMoreText
                  lines={1}
                  expanded={false}
                  truncatedEndingComponent={'... '}
                  more={<span className={'button-show'}>Xem thêm {' >>'}</span>}
                  less={<span className={'button-show'}>{'<< '} Ẩn bớt</span>}
                  className={'content-show-more-text'}
              >
                <li> Là cơ hội để sinh viên các khóa được hướng nghiệp cũng như
                  tiếp
                  cận
                  các thông tin bổ ích về: cơ hội nghề nghiệp, quy trình, điều
                  kiện
                  tuyển dụng của doanh nghiệp. Từ đó giúp sinh viên có được sự
                  định
                  hướng chuẩn bị cần thiết về nghề nghiệp trước khi tham gia thị
                  trường
                  lao động và hội nhập quốc tế.
                </li>
                <li>Thiết lập mối quan hệ thân thiết giữa nhà trường, doanh
                  nghiệp,
                  các cơ
                  quan, tổ chức truyền thông trong việc nâng cao chất lượng đào
                  tạo,
                  hướng tới đáp ứng yêu cầu của xã hội.
                </li>
                <br />
                <div><b>Nhà trường sẽ tổ chức JobFair 2022 theo kế hoạch
                  sau:</b>
                  <ul>
                    <li>Thời gian: Thứ tư, ngày 26/6/2022.</li>
                    <li>Địa điểm: Khu vực sân chính E1, E3, E4 và G2, Trường Đại
                      học Công nghệ -
                      ĐHQGHN
                    </li>
                  </ul>
                </div>
                <br />
                <div>
                  <p>Chi tiết trong hồ sơ mời tài trợ JobFair 2022 xem <a
                      href="..." className={'sponsor-profile-link'}>tại đây</a>.
                  </p>
                </div>
              </ReactShowMoreText>
            </li>
          </ul>


        </Col>
      </Row>
    </Container>
  </div>;
};

export default Introduction;