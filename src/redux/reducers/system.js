import * as actionTypes from "../contents/elevatorContent.js";

const initialState = {
  floors:Array(10).fill()
  ,
  timeToClime:3

    
  
 

};

const store = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.CALL_ELEVATOR:
      const elevator = {
        ...state,
      };
     

      return elevator;


  


    default:
      return state

  }
}

export default store