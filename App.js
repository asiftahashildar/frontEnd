import logo from './logo.svg';
import './App.css';
// import {Dataentry} from "./Components/Dataentry";
// import './Components/Dataentry.css'
import {Sum} from "./Components/sum/Sum"
import { Bulb } from './Components/sum/Bulb';
import { Changename } from './Components/sum/Changename';
import { Change} from "./Components/sum/Change"
import {Cost} from "./Components/sum/Cost"
import { Medical } from './Components/sum/Medical';
import {Wish} from "./Components/sum/Wish"
import {Counter} from  "./Components/sum/Counter"
import {Student} from "./Components/sum/Student"
import {Task} from "./Components/sum/Task"
import {Salary} from "./Components/sum/Salary"


function App() {
  return (
   <div>
     {/* <Sum/> 
     <Cost/>
     <Wish/>
     <Change/>
     <Changename/>
      <Bulb/>  */}
     {/* <Counter/> */}
     {/* <Medical/> */}
     {/* <Student/> */}
     {/* <Task/> */}
     <Salary/>
   </div>
    
  );
}

export default App;
