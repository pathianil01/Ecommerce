import {Link} from 'react-router-dom'
function OrderSuccess()
{
return(
        <div className="container">
            <div className="row">
                <div className="col bg-success" style={{marginTop:'150px'}}>
                    <div style={{float:'left',marginLeft:'400px'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" width='50'></img>
                    </div>
                    <div>
                    <p style={{margin:'10px 10px 10px 30px',color:'white',fontWeight:'bolder'}}>Order Placed Successfully</p>
                    </div>
                </div>
               
            </div>
            <div className="row mt-5">
                    <Link style={{marginLeft:'430px'}} to='/'>Go to Home Page</Link>
                </div>
        </div>
    )
}
export default OrderSuccess