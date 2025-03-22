const Buttons = () => {
     const buttons=["c","1","2","+","3","4","-","5","6","*","7","8","/","9",".","0","=","%"]
return (
   <>
   
   {
     buttons.map( item => (
        <button key={item}> {item} </button>
     ))}
   </>
)
}
export default Buttons;