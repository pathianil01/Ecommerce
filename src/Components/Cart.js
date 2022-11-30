import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Slice/Cart";
import {useNavigate,Link} from 'react-router-dom'
function Cart() {
  var cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  
  let totalAmount=0
  cart.map((product)=>{
      totalAmount+=product.quantity*product.price
  })
 
  const Remove = (Product) => {
    dispatch(remove(Product));
  };
  return (
    <div className="container">
       {cart && cart.length ? (<>
     <h1 style={{textAlign:'center'}}className='text text-primary'>Cart Details</h1>
     </>
       ):(<></>)}
      
      {cart && cart.length ? (
        cart.map((product) => (
          <div className="row border" key={product.id}>
            <div className="col-sm-3">
              <img style={{marginTop:'20px'}}src={product.thumbnail} width="200px"></img>
            </div>
            <div className="col-sm-6">
              <h2>{product.title}</h2>
              <h6>Rating:{product.rating}</h6>
              <p>{product.description}</p>
              <h6 className="text text-success">2 offers applied . 4 offers available</h6>
              
              <h2></h2>
            </div>
            <div className="col-sm-3">
              <h2>Rs. {product.price}</h2>
              <h6>Quantity:{product.quantity}</h6>
              {/* <p>Total:{product.price * product.quantity}</p> */}

              <button
                className=" btn btn-danger ms-1"
                onClick={() => Remove(product)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="continer mt-5">
          <div className="row text-center shadow-lg bg-light  ">
            <div className="col-12 m-auto">
              <img src='https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG49.png' width='150'></img>
                  <h1>No Items selected</h1>
                  <p style={{fontSize:'16px',color:'#7b8794'}}>Please <Link style={{textDecoration:'none'}}to='/'>click here </Link>to select items</p>

            </div>
          </div>

          
        </div>
      )}
      {cart && cart.length ? ( <><div className="row text-centre" style={{textAlign:'center',marginTop:'20px'}}>
    <h6>Total Amount: <span className="text text-danger">{totalAmount}</span></h6>
    </div>
    <div className="row text-end" style={{marginBottom:"20px",marginLeft:'350px',marginRight:'500px'}}>
      <Link to='/address'>
    <button  className="btn btn-success" >Checkout</button></Link>
    </div></>):(<></>)}
  
    </div>
    
  );
}
export default Cart;
