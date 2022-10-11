import axios from "axios";
import { addProduct } from "./cartSlice";
import { loginStart,loginSuccess,loginFailure } from "./userSlice";

const url = 'http://localhost:8000';

export const getUser = async(dispatch,user)=>{
    dispatch(loginStart());

    try{
        let res = await axios.post(`${url}/auth/login`,user);
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const putInCart = async(dispatch,products)=>{

    try{
        let res = await axios.post(`${url}/carts`,products);
        dispatch(addProduct(res.data))
        
    }catch(err){
        dispatch(err)
    }
}

