import { HiArrowSmRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const Home = () =>
{

return(

 <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Explore the World, One Country at a Time.</h1>
        <p className="lead">Discover the historical , culture and beauty of every nation Sort , Search and filter through countries to find the details you need.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <NavLink to="/about"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Start Exploaring <HiArrowSmRight /></button></NavLink>
                  </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-1" src="/Images/Hero.jpeg" alt="" width="900"/>
      </div>
    </div>
  </div> 








)

}
export default Home;