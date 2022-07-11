import axios from 'axios';

const apiUrl = 'https://uethackathon.com';
// const apiUrl = 'http://localhost:8080'
const jobFairClient = axios.create({
  baseURL: apiUrl,
});

export default jobFairClient;