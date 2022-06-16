import jobFairClient from './request';

const getCompanies = () => {
  return jobFairClient.get('/companies');
};

const getCompaniesById = (id) => {
  return jobFairClient.get(`/companies/${id}`);
};

const updateCompany = (id, company) => {
  return jobFairClient.patch(`/companies/${id}`, company);
};

export default {
  getCompaniesById, getCompanies, updateCompany,
};