import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://tinder-backend-archi.herokuapp.com'
})

export default instance;  