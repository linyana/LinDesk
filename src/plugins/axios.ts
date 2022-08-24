import axios from 'axios';

const API = axios.create({
	timeout: 2000,
})

export default API