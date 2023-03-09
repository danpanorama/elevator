import {
    CLEAR,
    MSG
  } from '../contents/errContent'
import axiosConfig from "../../config/AxiosConfig";
import {  ADD_TO_CART } from '../contents/elevatorContent.js';
  


  export const callElevator = (data) => async (dispatch) => {
    try {

        dispatch({type:ADD_TO_CART,data:data})
    
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  

