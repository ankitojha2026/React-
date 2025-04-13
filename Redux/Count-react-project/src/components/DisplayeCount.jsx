import { useSelector } from "react-redux";

const DisplayCount =() => {
   const counter = useSelector((state) => state.counter); // This will get the counter value from the redux store

    return <p className="lead mb-4">count value :{counter}</p> ;}
export default DisplayCount;