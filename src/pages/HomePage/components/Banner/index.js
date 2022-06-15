import React from 'react';
import './style.css';
import bannerImage from '../../../../images/HomePage/banner.jpg';
import cover from '../../../../images/HomePage/cover.jpg';

const Banner = () => {
  return <div className={'banner'}>
    <div className={'banner-content'}>
      <h2>NGÀY HỘI VIỆC LÀM CÔNG NGHỆ</h2>
      <h3>UET JOB FAIR 2022</h3>
      <p>Thời gian: Thứ Tư ngày 29/06/2022</p>
      <p>Địa điểm: Khu vực sân chính E1, E3, E4 và G2, Trường Đại học Công nghệ
        -
        ĐHQGHN</p>
      <p><i>Số 144 Xuân Thuỷ - Cầu Giấy - Hà Nội</i></p>
    </div>
    <img className={'banner-image'} src={bannerImage} />
    {/*<img className={'banner-cover'} src={cover}/>*/}
  </div>;
};

export default Banner;