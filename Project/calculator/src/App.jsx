
import style from './App.module.css';
import Display from './component/Display';
import ButtonConatiners from './component/ButtonConatiners';
import { useState } from 'react';



function App() {

let [calVal,setval] = useState("");


let clickedMethod = (value)=> {


if(value==='C')
{
    setval("");
}
else if(value === '=')
{
    setval(eval(calVal));
}
else
{
    const newValue = calVal+ value;
    setval(newValue);
   
}

}

 return (
        <center>
            <div className={style.calculator}>
            <Display calVal={calVal}></Display>
            <ButtonConatiners clickedButton={(value)=> clickedMethod(value)}></ButtonConatiners>
            </div>
        </center>



        );




}

export default App;
