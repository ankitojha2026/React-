
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import DisplayCount from './components/DisplayeCount';
import Container from './components/Container';
import { useDispatch } from 'react-redux';

function App() {


 const dispatch = useDispatch();

  return (
    <div className="px-4 py-5 my-5 text-center">
    
    <Container>
    <Header></Header>

    <div className="col-lg-6 mx-auto">
      
      <DisplayCount> </DisplayCount>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" onClick={() => dispatch({type: "INCRIMENT"})}
        
        
        className="btn btn-primary btn-lg px-4 gap-3">+1</button>
        <button type="button"  
        
        onClick={() => dispatch({type: "DECRIMENT"})}
        
        className="btn btn-outline-secondary btn-lg px-4"> -1</button>
      </div>
    </div>
    </Container>



  </div>
  )
}

export default App
