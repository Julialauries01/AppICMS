import axios from "axios";

const server = axios.create({
   baseURL: 'http://192.168.12.42:8080/api/'
})
export default server
