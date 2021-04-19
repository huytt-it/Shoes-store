import {ACTION} from "../actionType/index";
import { request } from "../../configs/request";

const ROOT_URL = "http://localhost:6969/api/product";



export const fetchProduct = () => async dispath =>{
   const res = await request(ROOT_URL,'GET');
   dispath({
       type: ACTION.SET_PRODUCT,
       payload: res.data 
   })
}
