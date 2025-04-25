import Card from "../components/UI/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import countryData from "../API/countryData.JSON";

const About = () => {
    return (
        <section className="about-section">
    <div className="container my-5 text-center">
 <div className="card" style={{width: "68rem"}}>
  <div className="card-body">

    <h1 className="card-title"> Here are the Interesting Facts ,  We're proud of ........</h1>
  </div>
</div>
    </div>

    <div className="d-flex flex-wrap justify-content-center gap-3 px-3">
        {countryData.map((country) => (
            <div className="card bg-white shadow-lg rounded border-0" style={{ width: "18rem" }} key={country.id}>
                <div className="card-body p-3">
                    <h5 className="card-title">{country.countryName}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Capital: {country.capital}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Population: {country.population}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Area: {country.area}</h6>
                    <p className="card-text">About: {country.historicalFacts}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        ))}
    </div>
</section>

    );
};

export default About;
