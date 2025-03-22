
import style from './App.module.css';
import Display from './component/Display';

function App() {
 return (
        <center>
            <div className={style.calculator}>
            <Display></Display>

<div className={style.buttonContainer}>
    <button>C</button>
    <button>1</button>
    <button>2</button>
    <button>+</button>
    <button>3</button>
    <button>4</button>
    <button>-</button>
    <button>5</button>
    <button>6</button>
    <button>*</button>
    <button>7</button>
    <button>8</button>
    <button>/</button>
    <button>9</button>
    <button>.</button>
    <button>0</button>
    <button>=</button>
    <button>%</button>
</div>

</div>
        </center>
        );




}

export default App
