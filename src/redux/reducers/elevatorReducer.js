import * as actionTypes from "../contents/elevatorContent.js";

const initialState = {
  elevators: [
    {busy:false,floor:0,id:1},
    {busy:false,floor:0,id:2},
    {busy:false,floor:0,id:3},
    {busy:false,floor:0,id:4},
    {busy:false,floor:0,id:5}
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
          break

        }

      }

      
 


  
// function timeToClime(){
//     pointer.floor++
//     console.log('gogoggogogog')

//     if(pointer.floor <= action.data){
//       clearInterval(timeToClime)
//     }
//   }
//   setInterval(timeToClime, 1000);


      //  pointer.floor = action.data
      //  pointer.busy = false
    

      function func1(){
        console.log('gss')
      }

      setTimeout(func1,5000)


      pointer.floor = action.data
    setTimeout(()=>{
    
      pointer.busy = false
    },5000)
      



      return elevator;


      case actionTypes.TEST:
        const test = {
          ...state,
        };
      
        test.elevators[3].busy = true

        console.log(test)

      return test;




    default:
      return state

  }
}

export default store