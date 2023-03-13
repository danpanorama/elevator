import '../../App.css';
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../../redux/contents/elevatorContent.js";



function Cells() {
let cells = Array(10).fill(1);
let elevator = Array(5).fill(1)
const elevatorRedux = useSelector((state) => state.elevator);
const dispatch = useDispatch()





  return (
    <div className="grid ">
 {cells.map((e)=>{
            return(
            <div key={e} className="flexrow">
                    {elevator.map((s)=>{
                 return(
                  <div onClick={test} className="onefloor">
                    
              
                  </div>
                 )
             })}
                   
             
         </div>
            )
        })}
 </div>
  );
}

export default Cells;
