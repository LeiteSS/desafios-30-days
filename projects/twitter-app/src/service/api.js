import axios from 'axios';

axios.create({
    baseURL: 'http://loclahost:3000',
    headers: {
        "Content-Type": "application/json"
    }
});

export default axios;