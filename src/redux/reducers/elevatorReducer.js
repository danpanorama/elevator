import * as actionTypes from "../contents/elevatorContent.js";

const initialState = {
  elevators: [
    {
      busy:false,
      floor:0

    },
    {
      busy:false,
      floor:0

    },
    {
      busy:false,
      floor:0

    },{
      busy:false,
      floor:0

    }
  ]
  ,
  timeToClime:3

    
  
 

};

const store = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.CALL_ELEVATOR:
      const elevator = {
        ...state,
      };
      let pointer;
      for(let i = 0; i < elevator.elevators.length; i++){
        if(elevator.elevators[i].busy == false){
          elevator.elevators[i].busy = true;
          pointer = elevator.elevators[i];

        }

      }

      

      setTimeout(()=>{
        pointer.busy = false
        pointer.floor = action.data.dest
       },elevator.timeToClime * (action.data.dest - pointer.floor ))



      return elevator;



  






    default:
      return state

  }
}

export default store