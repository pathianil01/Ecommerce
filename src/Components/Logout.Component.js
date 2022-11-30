import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {setLogin} from '../Slice/Login.slice'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { emptyCart } from "../Slice/Cart";

function LogoutComponent(){
    const userStat=useSelector((state)=>state.user)
    // console.log(userStat)

const Nav=useNavigate()
const dispatch=useDispatch()
useEffect(()=>
{
//  console.log('use effect called')
dispatch(emptyCart())
    dispatch(setLogin('logOut'))
    
    
},[])

return(
    
    <div className="container">
    <div className="row">
        <div className="col bg-success" style={{marginTop:'150px'}}>
            <div style={{float:'left',marginLeft:'400px'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" width='50'></img>
            </div>
            <div>
            <p style={{margin:'10px 10px 10px 30px',color:'white',fontWeight:'bolder'}}>Logout Successful</p>
            </div>
        </div>
       
    </div>
    <div className="row mt-5">
            <Link style={{marginLeft:'430px'}} to='/'>Go to Home Page</Link>
        </div>
</div>
)
}

export default LogoutComponent