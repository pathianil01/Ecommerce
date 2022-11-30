import {useSelector} from 'react-redux'
function MyOrderComponent()
{
 const myOrder=useSelector((state)=>state.cart.myOrders)
    return(
        <div className='container'>
            <h1 className='text-primary text-center' style={{marginTop:'20px'}}>My Order List</h1>
        {myOrder && myOrder.length ? (
            myOrder.map((product) => (
              <div className="row border" key={product.id}>
                <div className="col-sm-3">
                  <img style={{marginTop:'20px',marginBottom:'20px'}}src={product.thumbnail} width="200px"></img>
                </div>
                <div className="col-sm-6">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>

                  
                  <h2></h2>
                </div>
                <div className="col-sm-3">
                  
                  {/* <p>Total:{product.price * product.quantity}</p> */}
                  <h6 className='text-success' style={{marginTop:'50px'}}>Delivered on 04/OCT/2022</h6>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h1>No products Data</h1>
            </div>
          )}
          </div>
    )
}
export default MyOrderComponent