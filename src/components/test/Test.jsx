import '../../App.css';
import {useDispatch,useSelector} from "react-redux";


function Test() {
    const elevatorRedux = useSelector((state) => state.elevator);

    let array = [
        {name:'ground floor',sumElevators:elevatorRedux.elevators,floornum:0},
        {name:'1st',sumElevators:elevatorRedux.elevators,floornum:1},
        {name:'2st',sumElevators:elevatorRedux.elevators,floornum:2},
        {name:'1st',sumElevators:elevatorRedux.elevators,floornum:3},
        {name:'2st',sumElevators:elevatorRedux.elevators,floornum:4},
        {name:'1st',sumElevators:elevatorRedux.elevators,floornum:5},
        {name:'2st',sumElevators:elevatorRedux.elevators,floornum:6},
        {name:'1st',sumElevators:elevatorRedux.elevators,floornum:7},
        {name:'2st',sumElevators:elevatorRedux.elevators,floornum:8},
    ]

  return (
    <div className=" ">
        {array.slice(0).reverse().map((e)=>{
            return(
                <div className="flexrow center">
                        {e.name }{e.floornum}
                    {e.sumElevators.map((x)=>{
                        return(
                            <div className={x.floor != e.floornum ? "cell onefloor" : "cell onefloor bcred"}>
                              {x.floor == e.floornum ? 
                              "yes"
                              
                              : ''}
                            </div>
                        )
                    })}
                </div>
            )
        })} 
        


  
    </div>
  );
}

export default Test;
