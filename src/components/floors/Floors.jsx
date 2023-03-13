import Cells from '../cells/Cells';
import '../../App.css';
import {useDispatch,useSelector} from "react-redux";



function Floors() {
  let floors = ['Ground Floor','1st','2nd','3rd','4th','5th','6th','7th','8th','9th'];
  const elevatorRedux = useSelector((state) => state.elevator);

  return (
    <div className="flexrow  ">
   <div className="grid">
   {floors.slice(0).reverse().map((e,i)=>{
     return(
      <div key={e} className="flexcol">

      {e}
    </div>
     )

      })}
   </div>
   
  
    </div>
  );
}

export default Floors;
