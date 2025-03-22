import './App.css'

import Container from './componants/Container';
function App() {

  const food=['daal' , 'chalwal' ,'sabj' ,'pakawadi' , 'salad']
 return (
 <>
 
 <Container>
  <h1 className='Head' >Healthy Food</h1>

  <ul className='list-group'>
    {
      food.map(item => (
        <li className="list-group-item" key={item}> {item}
        
        <button
        
        onClick={() => console.log(`${item}`)
      }
        
        >Buy</button>
         </li>
      
      ))
    }
    
  </ul>

   
  </Container>
 </>
 )

}

export default App
