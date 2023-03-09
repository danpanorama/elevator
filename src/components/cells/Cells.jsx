import '../../App.css';



function Cells() {
let cells = Array(10).fill(1);
let elevator = Array(5).fill(1)

  return (
    <div className="grid w100">
 {cells.map((e)=>{
            return(
            <div key={e} className="flexrow">
                    {elevator.map((s)=>{
                 return(
                  <div className="onefloor">
                  
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
