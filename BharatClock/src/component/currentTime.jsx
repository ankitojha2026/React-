let CurrentTime=() => {

    let time = new Date();
return <div>
    <p>This is the current Time : {time.toLocaleDateString()} {time.toLocaleTimeString()}</p>

</div>


}
export default CurrentTime;