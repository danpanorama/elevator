import '../App.css';
import Buttons from './buttons/Buttons';
import Cells from './cells/Cells';
import Floors from './floors/Floors';
import Test from './test/Test';

function Elevator() {
  return (
    <div className="height-width">
        

      {/* <Floors/>
      <Cells/>
      <Buttons/> */}

      <Test/>
      <Buttons/>
  
    </div>
  );
}

export default Elevator;
