
import '../App.css';

const Loading=()=>
{
  return (
    <>
      <div className="d-flex justify-content-center spiner">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  </>
  );
}
export default Loading;