import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './component/Header'
import DateAndClock from './component/DateAndClock'
import CurrentTime from './component/currentTime'
function App() {

  return (
  <center>
  <Header></Header>
  <DateAndClock></DateAndClock>
  <CurrentTime></CurrentTime>
  
  </center>
  )
}

export default App;
