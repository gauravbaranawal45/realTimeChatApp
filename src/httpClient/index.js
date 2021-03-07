import axios from "axios";
import {baseURL} from "../constants/config";

let AUTH = localStorage.getItem('__chatauth')
let token = null;
if(AUTH){
	token = JSON.parse(AUTH).token;	
}

// console.log(token)

const httpInstance = axios.create({
  baseURL: baseURL
});

httpInstance.defaults.headers.common['Authorization'] = "Bearer "+token;

export default httpInstance;
