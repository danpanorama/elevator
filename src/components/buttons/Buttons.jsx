import Cells from '../cells/Cells';
import '../../App.css';
import {useDispatch,useSelector} from "react-redux";
import { CALL_ELEVATOR } from '../../redux/contents/elevatorContent.js';



function Buttons() {
  let button = <button className={'btn'} >call</button>
  let cells = Array(9).fill(button);
  const dispatch = useDispatch()
  function climeElevator(floorNumber){
    dispatch({type:CALL_ELEVATOR,data:floorNumber})

  }

  



  return (
    <div className=" grid center">
        {cells.map((e,i)=>{
            return(
                <div onClick={()=>{climeElevator(cells.length - i -1)}} id={ cells.length - i -1} className="btndiv">
                    {e}{ cells.length - i -1 }
                </div>
            )
        })}

  
    </div>
  );
}

export default Buttons;
