import React, {useEffect, useState} from 'react';
import {companyService} from '../../../services';
import {Container, Table} from 'react-bootstrap';
import './style.css';
import {AiOutlineEdit} from 'react-icons/ai';

const ListCompanies = () => {
  const [sponsor, setSponsor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    companyService.getCompanies().then(res => {
      setSponsor(res.data.data);
      setIsLoading(false);
    });
  }, []);

  return (<div className={'list-companies'}>
        <h2 className={'text-center m-5'}>Quản lý nhà tài trợ</h2>

        <Container>
          <h3 className={'mt-5'}>#1: Nhà tài trợ kim cương</h3>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>#ID</th>
              <th>Tên</th>
              <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {
              !isLoading && sponsor && sponsor.diamond.map(item => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><a href={`/management/sponsors/${item.id}`}>Chỉnh sửa <AiOutlineEdit /></a></td>
                  </tr>
                ))
            }
            </tbody>
          </Table>

          <h3 className={'mt-5'}>#2: Nhà tài trợ kim vàng</h3>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>#ID</th>
              <th>Tên</th>
              <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {
                !isLoading && sponsor && sponsor.gold.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><a href={`/management/sponsors/${item.id}`}>Chỉnh sửa <AiOutlineEdit /></a></td>
                    </tr>
                ))
            }
            </tbody>
          </Table>

          <h3 className={'mt-5'}>#3: Nhà tài trợ bạc</h3>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>#ID</th>
              <th>Tên</th>
              <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {
                !isLoading && sponsor && sponsor.silver.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><a href={`/management/sponsors/${item.id}`}>Chỉnh sửa <AiOutlineEdit /></a></td>
                    </tr>
                ))
            }
            </tbody>
          </Table>

          <h3 className={'mt-5'}>#4: Nhà tài trợ đồng</h3>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>#ID</th>
              <th>Tên</th>
              <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {
                !isLoading && sponsor && sponsor.copper.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><a href={`/management/sponsors/${item.id}`}>Chỉnh sửa <AiOutlineEdit /></a></td>
                    </tr>
                ))
            }
            </tbody>
          </Table>

          <h3 className={'mt-5'}>#5: Doanh nghiệp đồng hành</h3>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>#ID</th>
              <th>Tên</th>
              <th>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {
                !isLoading && sponsor && sponsor.companion.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><a href={`/management/sponsors/${item.id}`}>Chỉnh sửa <AiOutlineEdit /></a></td>
                    </tr>
                ))
            }
            </tbody>
          </Table>
        </Container>
      </div>);
};

export default ListCompanies;