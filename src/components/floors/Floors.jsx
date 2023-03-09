import Cells from '../cells/Cells';
import '../../App.css';



function Floors() {
  let floors = ['Ground Floor','1st','2nd','3rd','4th','5th','6th','7th','8th','9th'];
  let space = 2;
  let cells = Array(10).fill(1);
  let elevator = Array(5).fill(1)

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
