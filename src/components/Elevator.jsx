import '../App.css';
import Buttons from './buttons/Buttons';
import Cells from './cells/Cells';
import Floors from './floors/Floors';

function Elevator() {
  return (
    <div className="height-width">
        

      <Floors/>
      <Cells/>
      <Buttons/>

  
    </div>
  );
}

export default Elevator;
