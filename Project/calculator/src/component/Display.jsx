import style from "./Display.module.css";
const Display =({calVal}) => {

    return <input className={style.display} type="text" readOnly  value={calVal}/>;
}
export default Display;