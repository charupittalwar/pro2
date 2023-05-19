import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Add from './component/Add/Add';
function App() {

  const [inputvalue ,setInputValue]= useState(0)

  const [inputvalue2, setInputvalue2] = useState(0)

  const printvalue =()=>{

     console.log('inputvalue printvalue ' , inputvalue)
    return inputvalue;
  }

  const printvalue1 =()=>{

    console.log('inputvalue printvalue ' , inputvalue2)
   return inputvalue2;
 }
  return (

    <div>
    <h1>my second project</h1>

    <div>

     <input type = "number" value ={inputvalue} onChange={(e) =>{

      setInputValue(e.target.value)

     console.log("inputvalue " , inputvalue2);

     }
    }
     placeholder='Enter the number' /><br></br>



<input type = "number" value ={inputvalue2} onChange={(e) =>{

setInputvalue2(e.target.value)

console.log("inputvalue " , inputvalue2);

}
}




placeholder='Enter the number' /><br></br>

  
    

</div>
      <p>value is  {printvalue()}   </p>
    <button onClick={printvalue}>print</button>

     <Add a = {inputvalue} b={inputvalue2}> </Add> 




    </div>
    
  );
}

export default App;
