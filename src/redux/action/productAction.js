import {SET_PRODUCT} from "../actionType/index";
import { request } from "../../configs/request";

const ROOT_URL = "http://localhost:6969/api/product";



export const fetchProduct = () => async dispath =>{
   const res = await request(ROOT_URL,'GET');
   dispath({
       type: SET_PRODUCT,
       payload: res.data 
   })
}
