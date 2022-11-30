import {Link} from 'react-router-dom'
function NavigationTest()
{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <img
        src="https://th.bing.com/th/id/R.eecbed452b869d5d5cf053757d79e92b?rik=yVxJmCMnXoIs5Q&riu=http%3a%2f%2fpngimg.com%2fuploads%2famazon%2famazon_PNG5.png&ehk=L3lh0wEFh3QVQe2EVJoTCSLWaMm3JzIMyfve82QR%2fyw%3d&risl=&pid=ImgRaw&r=0"
        width="100"
      ></img>
      <span>Anazon</span>
      
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/" >
              {/* <img
                src="https://img.icons8.com/material-outlined/344/home--v2.png"
                width="40"
                
            
              />{" "} */}
              <span>Home</span>
              <span className="sr-only"></span>
            </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/cart" >
              {/* <img
                src="https://img.icons8.com/material-outlined/344/home--v2.png"
                width="40"
                
            
              />{" "} */}
              <span>cart</span>
              <span className="sr-only"></span>
            </Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link" to="/login" >
              {/* <img
                src="https://img.icons8.com/material-outlined/344/home--v2.png"
                width="40"
                
            
              />{" "} */}
              <span>login</span>
              <span className="sr-only"></span>
            </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/register" >
              {/* <img
                src="https://img.icons8.com/material-outlined/344/home--v2.png"
                width="40"
                
            
              />{" "} */}
              <span>Register</span>
              <span className="sr-only"></span>
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default NavigationTest