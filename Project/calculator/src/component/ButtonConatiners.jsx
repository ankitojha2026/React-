import style from './ButtonContainer.module.css';
import Buttons from './Buttons';
const ButtonConatiners = ({clickedButton}) => 
{
    return (

<div className={style.buttonContainer}>
<Buttons onButtonClicked = {(event)=> clickedButton(event.target.innerText)}></Buttons>
</div>

);
}
export default ButtonConatiners;