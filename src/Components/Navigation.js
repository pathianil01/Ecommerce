import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {useState} from 'react'
import {setSearchText} from '../Slice/ProductSlice'
function Navigation() {
  const [search,setSearch]=useState('')
  var cart = useSelector((state) => state.cart.products);
  var log=useSelector((state)=>state.user.login)
  var dispatch=useDispatch()
  const update=(value)=>{
    
    setSearch(value)
  }

  const maninUpdate=(event)=>
  {
    event.preventDefault()
    dispatch(setSearchText(search))
  }
  const clearText=()=>{
    dispatch(setSearchText(' '))
  }

  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <img
        src="https://th.bing.com/th/id/R.eecbed452b869d5d5cf053757d79e92b?rik=yVxJmCMnXoIs5Q&riu=http%3a%2f%2fpngimg.com%2fuploads%2famazon%2famazon_PNG5.png&ehk=L3lh0wEFh3QVQe2EVJoTCSLWaMm3JzIMyfve82QR%2fyw%3d&risl=&pid=ImgRaw&r=0"
        width="100"
      ></img>
      <span>Anazon</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto col-sm-12">
          <li className="nav-item active ms-5">
            <Link className="nav-link" to="/" onClick={clearText()}>
              <img
                src="https://img.icons8.com/material-outlined/344/home--v2.png"
                width="40"
                
              />{" "}
              <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item ms-5">
            <Link className="nav-link" to="/cart">
              <img
                src="https://img.icons8.com/ios-filled/344/shopping-cart.png"
                width="40"
              ></img>
              <sup style={{ color: "red", fontWeight: "bolder" }}>
                {cart.length}
              </sup>
            </Link>
          </li>
          <li className="nav-item ms-5">
            <input style={{marginTop:'15px',borderRadius:'10px 10px 10px 10px'}} width='200px' size='70'type='text' onChange={(event)=>update(event.target.value)}></input>
            <img src="https://img.icons8.com/ios-glyphs/344/search--v1.png" width="30" style={{marginLeft:'20px'}} onClick={(event)=>maninUpdate(event)}></img>
          </li>
          {log?(<>
            <li className="nav-item ms-5 ">
            <Link style={{fontWeight:'bolder',color:'black',marginTop:'5px'}}className="nav-link ms-7" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item ms-5 ">
            <Link style={{fontWeight:'bolder',color:'black',marginTop:'5px'}}className="nav-link ms-7" to="/myorders">
              My Orders
            </Link>
          </li>
          
          <li className="nav-item ms-5">
            <Link style= {{fontWeight:'bolder',color:'black',marginTop:'5px'}} className="nav-link " to="/logout">
              Logout
            </Link>
          </li></>):(<>
            <li className="nav-item ms-5 ">
            <Link style={{fontWeight:'bolder',color:'black',marginTop:'5px'}} className="nav-link ms-7" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item ms-5">
            <Link  style={{fontWeight:'bolder',color:'black',marginTop:'5px'}}className="nav-link " to="/register">
              Register
            </Link>
          </li></>)}
          
        
        </ul>
      </div>
    </nav>
    
  );
}
export default Navigation;
