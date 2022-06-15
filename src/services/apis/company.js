import jobFairClient from './request';

const getCompanies = () => {
  return jobFairClient.get('/companies');
};

const getCompaniesById = (id) => {
  return jobFairClient.get(`/companies/${id}`);
};

export default {
  getCompaniesById, getCompanies,
};