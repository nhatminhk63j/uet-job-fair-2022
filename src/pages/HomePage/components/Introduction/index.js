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
          <p> Với quy mô sinh viên tăng đều hàng năm cả về chất và lượng, đầy
            sức trẻ và nhiệt huyết, Trường Đại học Công nghệ đã liên tục lớn
            mạnh, tự hào là một trong những đơn vị đào tạo có uy tín và chất
            lượng về các ngành công nghệ mũi nhọn, có thể kể đến như: Công nghệ
            thông tin; Công nghệ thông tin định hướng thị trường Nhật Bản; Kỹ
            thuật Robot; Vật lý kỹ thuật; Cơ kỹ thuật; Công nghệ kỹ thuật xây
            dựng; Công nghệ Hàng không vũ trụ; Công nghệ nông nghiệp; Kỹ thuật
            điều khiển & tự động hóa; Trí tuệ nhân tạo; Kỹ thuật năng lượng;
            Công nghệ kỹ thuật cơ điện tử; Khoa học máy tính; Hệ thống thông
            tin; Mạng máy tính và truyền thông dữ liệu; Công nghệ kỹ thuật điện
            tử viễn thông nhằm
            đào tạo nhân lực chất lượng cao cho các doanh nghiệp,
            các trung tâm và viện nghiên cứu lớn. Trường Đại học Công nghệ hiện
            là đối tác đào tạo của các doanh nghiệp, tập đoàn lớn như: Viettel,
            FPT, Samsung, Toshiba, Panasonic, Nissan, IMI Holdings...
          </p>
          <p> Sự kiện Job-Fair 2022 được tổ chức nhằm mục tiêu:
          </p>
          <ul>
            <li>Tạo điều kiện để 30 - 40 doanh nghiệp tiếp cận lựa chọn nguồn
              nhân lực
              chất lượng cao và cơ hội quảng bá thương hiệu nhà tuyển dụng tại
              Đại
              học Công nghệ - ĐHQGHN.
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
                    <li>Thời gian: Thứ Tư, ngày 29/6/2022.</li>
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