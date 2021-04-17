import { request } from "../configs/request";

const ROOT_URL = "http://localhost:6969/api/product";

 export const createProduct = (pd) =>{
    request(ROOT_URL,'POST',pd)
    .then((re)=>{
        console.log("OK");
    })
    .catch(err=>{
        console.log(err)
    });
}