import {ACTION} from "../actionType/index"

let initialState = {
    productList: [{
      id:"1",
      productName:"Quickiin Mens shoes",
      price:999,
      img:"//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896"
    },
    {
      id:"2",
      productName:"Quickiin Mens shoes",
      price:999,
      img:"//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896"
    },
    {
      id:"3",
      productName:"Quickiin Mens shoes",
      price:999,
      img:"//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896"
    },
    {
      id:"4",
      productName:"Quickiin Mens shoes",
      price:999,
      img:"//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896"
    },
    {
      id:"5",
      productName:"Quickiin Mens shoes",
      price:999,
      img:"//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896"
    },
    {
      id:"6",
      productName:"Quickiin Mens shoes",
      price:999,
      img:"//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896"
    },
    {
      id:"7",
      productName:"Quickiin Mens shoes",
      price:999,
      img:"//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896"
    },
    {
      id:"8",
      productName:"Quickiin Mens shoes",
      price:999,
      img:"//cdn.shopify.com/s/files/1/0248/5823/0872/products/9_2fb7cc1d-cf28-45a9-bc65-8629d22593b7_large.jpg?v=1571546896"
    }],
  };

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ACTION.SET_PRODUCT:
        return { ...state, productList: payload };
      default:
        return state;
    }
  };

  export default reducer;