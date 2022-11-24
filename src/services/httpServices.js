import axios from "axios";

axios.defaults.baseURL = 'https://online-shop-sample21.herokuapp.com/api/'


const http = {
   get:axios.get,
    put:axios.put,
    delete:axios.delete,
    post:axios.post
}


export default http 