import React, {useEffect, useState} from 'react';
import './index.css';
import {useParams} from 'react-router-dom';
import {companyService} from '../../../services';
import {Container} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Button, notification} from 'antd';

const EditCompany = () => {
  const {id} = useParams();
  const [company, setCompany] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    companyService.getCompaniesById(id).then(res => {
      setCompany(res.data.data);
      setIsLoading(false);
    });
  }, []);

  const onChange = (fieldName, value) => {
    setCompany({
      ...company, [fieldName]: value,
    });
  };

  const onSubmit = () => {
    companyService.updateCompany(id, company).then(res => {
      notification.success({
        message: 'Update thành công', duration: 2,
      });
    });
  };

  return (<div className={'edit-company'}>
    <h2 className={'text-center m-5 text-black'}>Chỉnh sửa thông tin nhà tài trợ</h2>
    {!isLoading && <Container>
      <>
        <h5 className={'text-black'}>Tên nhà tài trợ</h5>
        <input
            defaultValue={company.name}
            placeholder={'Tên nhà tài trợ ...'}
            onChange={event => onChange('name', event.target.value)}
        />
        <h5 className={'mt-5 text-black'}>Gói tài trợ</h5>
        <select
            defaultValue={company.companyType}
            onChange={event => onChange('companyType', event.target.value)}
        >
          <option value="Diamond">Kim cương</option>
          <option value="Gold">Vàng</option>
          <option value="Silver">Bạc</option>
          <option value="Copper">Đồng</option>
          <option value="CompanyType">Đồng hành</option>
        </select>

        <h5 className={'mt-5 text-black'}>Website</h5>
        <input
            defaultValue={company.website}
            placeholder={'Website ...'}
            onChange={event => onChange('website', event.target.value)}
        />

        <h5 className={'mt-5 text-black'}>Số điện thoại</h5>
        <input
            defaultValue={company.phoneNumber}
            placeholder={'Số điện thoại ...'}
            onChange={event => onChange('phoneNumber', event.target.value)}
        />

        <h5 className={'mt-5 text-black'}>Facebook</h5>
        <input
            defaultValue={company.facebook}
            placeholder={'Facebook ...'}
            onChange={event => onChange('facebook', event.target.value)}
        />

        <h5 className={'mt-5 text-black'}>Linkedin</h5>
        <input
            defaultValue={company.linkedin}
            placeholder={'Linkedin ...'}
            onChange={event => onChange('linkedin', event.target.value)}
        />
        <h5 className={'mt-5 text-black'}>Email</h5>
        <input
            defaultValue={company.linkedin}
            placeholder={'Email ...'}
            onChange={event => onChange('email', event.target.value)}
        />

        <h5 className={'mt-5 text-black'}>Địa chỉ</h5>
        <input
            defaultValue={company.linkedin}
            placeholder={'Địa chỉ ...'}
            onChange={event => onChange('address', event.target.value)}
        />

        <h5 className={'mt-5 text-black'}>Mô tả</h5>
        <ReactQuill theme="snow" value={company.description}
                    onChange={value => onChange('description', value)} />
      </>

      <Button type={'primary mt-5'} onClick={onSubmit}>Lưu thông tin</Button>
    </Container>}
  </div>);
};

export default EditCompany;