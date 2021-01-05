import axios from 'axios'


// const url = 'https://qrsystem-api.herokuapp.com/users';
// const purposeUrl = 'https://qrsystem-api.herokuapp.com/purposes';

const url = 'http://localhost:5000/users'
const purposeUrl ='http://localhost:5000/purposes'

export const fetchUsers = () => axios.get(url);

export const createUser = (user) => axios.post(url, user)

export const fetchPurposes = () => axios.get(purposeUrl);

export const addPurpose = (purpose) => axios.post(purposeUrl, purpose)

 