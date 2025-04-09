const SideBar = ({ slidTab , setSlidTab }) =>
{
    return (
        
<div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "150px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Craze</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=> setSlidTab("Home")}>
        <a href="#" className={`nav-link  ${slidTab==="Home" && `active`}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={() => setSlidTab("CreatPost")}>
        <a href="#" className={`nav-link ${slidTab==="CreatPost" && `active`}`}>
          <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#speedometer2"></use></svg>
          <h6 style={{fontSize:'15px'}}>Create Post </h6>
        </a>
      </li></ul>
     
  </div> )
}
export default SideBar;