import Cells from '../cells/Cells';
import '../../App.css';



function Buttons() {
    let button = <button className={'btn'}>call</button>
  let cells = Array(10).fill(button);


  return (
    <div className=" grid center">
        {cells.map((e)=>{
            return(
                <div className="btndiv">
                    {e}
                </div>
            )
        })}

  
    </div>
  );
}

export default Buttons;
