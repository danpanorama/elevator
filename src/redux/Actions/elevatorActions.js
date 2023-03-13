import {
    CLEAR,
    MSG
  } from '../contents/errContent'
import axiosConfig from "../../config/AxiosConfig";
import {  CALL_ELEVATOR,TEST } from '../contents/elevatorContent.js';
  


  export const callElevator = (data) => async (dispatch) => {
    try {

        dispatch({type:CALL_ELEVATOR,data:data})
    
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  
  export const test = (data) => async (dispatch) => {
    try {

        dispatch({type:TEST,data:data})
    
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }
