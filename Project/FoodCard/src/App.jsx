import { useState } from 'react';
import './App.css'

import Container from './componants/Container';
function App() {

  const food=['daal' , 'chalwal' ,'sabj' ,'pakawadi' , 'salad']

  let newFoodItem='Kadhi Chawal Pakaudi';


  const showChange =(event) =>
  {
  setStateMethod(event.target.value);
  }



const handleBuyButton = (item) =>
{
console.log(`${item}`)
}

let textState = useState('Kadhi Chawal Pakaudi');
let textStateVal=textState[0];
let setStateMethod = textState[1];


 return (
 <>
 <center>
  
 <Container>
  <h1 className='Head' >Healthy Food</h1>

  <input className="foodInput" type="text" placeholder='Enter Food Name'
  
  onChange= {(event) => showChange(event) }
  
  
  />

  <p>{textStateVal}</p>
  

  <ul className='list-group'>
    {
      food.map(item => (
        <li className="list-group-item" key={item}> {item}
        
        <button
        
        onClick={() => handleBuyButton(item) 
      }
        
        >Buy</button>


        

         </li>
      
      ))
    }
    
  </ul>

   
  </Container>
 </center>
 </>
 )

}

export default App
