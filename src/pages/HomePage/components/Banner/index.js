import React from 'react';
import './style.css';
import bannerImage from '../../../../images/HomePage/banner.jpg'

const Banner = () => {
  return <div className={'banner'}>
    <div className={'banner-content'}>
      <h2>UET JOB FAIR 2022</h2>
      <p>Thời gian: Thứ tư ngày 29/06/2022</p>
      <p>Địa điểm: Khu vực sân chính E1, E3, E4 và G2, Trường Đại học Công nghệ -
        ĐHQGHN</p>
    </div>
    <img className={'banner-image'} src={bannerImage} />
  </div>;
};

export default Banner;