import {useSelector} from 'react-redux'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {updateOrders} from '../Slice/Cart'
import {useDispatch} from 'react-redux'
function PaymentComponent()
{
    const data=useSelector((state)=>state.address)
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    const Nav=useNavigate()
    const [mode,setMode]=useState('')
    const {register,handleSubmit,formState:{errors}}=useForm()
    // console.log(data)
    // console.log(cart)
    let totalAmmount=0
    cart.products.map((product)=>{
        totalAmmount+=product.price*product.quantity
    })
    const updateState=(value)=>{
        setMode(value)
    }
    const NavigateToSuccess=()=>
        {
            // event.preventDefault()
        dispatch(updateOrders(cart.products))
        Nav('/success')
    }
return(
    <div className='container' >
        <h4 className='text text-success' style={{textAlign:'center',margin:'15px 15px'}}>Price Details</h4>

     
      {cart.products&&cart.products.length?(<>
      {cart.products.map((product,index)=>(
        <div className='row border-bottom'>
            <div className='col'>
            <h4>{index+1}. {product.title}</h4>
            
            <p>Quantity: {product.quantity}</p>
            <h6 className="text text-success" style={{marginTop:'1px'}}>2 offers applied . 4 offers available</h6>
            </div>
            <div className='col-sm-6'>
            <h6 className='text text-end'>Rs.{product.price}</h6>
            </div>
            
        </div>
      ))}
      
      </>):(<></>)}
      <div className='row ' style={{marginTop:'10px'}}>
        <div className='col'>
            <h4>Total Amount</h4>
            </div>
            <div className='col-sm-6'>
            <h6 className='text text-end'>Rs. {totalAmmount}</h6>
        </div>

      </div>
      <div className='row border-top' style={{marginTop:'15px'}}>
        <div className='col'>
            <p className='text text-primary'>Deliver to</p>
        </div>
        <div className='col' style={{marginLeft:'0px'}}>
            {data.Address.map((address)=>(
                < >
                <p>{address.firstName+" "+address.lastName}<br></br>{address.flat}<br></br>{address.area}<br></br>{address.town}, {address.pinCode}, IN</p>
             
 
                </>
            ))}
        </div>
      </div>
      <div className='row border-top border-bottom' style={{marginTop:'15px'}}>
        <div className='col'>
            <p className='text text-primary'>Get it by</p>
        </div>
        <div className='col'>
            <p>04-OCT-2022<br></br>Free Delivery</p>
        </div>
        </div>
        <h1 className='text text-center' style={{marginTop:'20px'}}>Select a payment method</h1>
        <div className='row border'>
            <div className='col' style={{margin:'20px 15px'}}>
                <input type='radio' size='100' style={{margin:'20px 20px'}} value="payment" name='payment'
                {...register('paymentMethod',{required:true})}
                ></input>
            </div>
            <div className='col'>
                <p>Other UPI IDs/Net Banking</p>
                <img src='https://securecdn.pymnts.com/wp-content/uploads/2020/01/Score-Card-Company-Image-25.png' width='100px'></img>
                <img src='https://th.bing.com/th/id/R.b56ccd4cc6616326f0ed1465ddbe7f6d?rik=pxn%2bZUn6mJEH2w&riu=http%3a%2f%2fliquiddesigns.in%2fwp-content%2fuploads%2f2017%2f05%2f03-PaytmLogo.jpg&ehk=Vm6lWu%2bztgmCSDdsrAH1FjILx8T4gKTRJY%2fvHZtsT24%3d&risl=&pid=ImgRaw&r=0' width='100px'></img>
                <img src='https://tse1.mm.bing.net/th/id/OIP.9mCmN8XqjvKwAhi6w0ecggHaHZ?pid=ImgDet&rs=1' width='50px'></img>
            </div>
        </div>
        <div className='row border'>
            <div className='col' style={{margin:'20px 15px'}}>
                <input type='radio' size='200' style={{margin:'20px 20px'}} value="payment" name='payment'  {...register('paymentMethod',{required:true})}></input>
            </div>
            <div className='col'>
                <p><span style={{fontWeight:'bolder'}}>Add Debit/Credit?ATM Card</span><br></br>You can save your cards as per new RBI
                guidelines</p>
                
            </div>
        </div>
        <div className='row border'>
            <div className='col' style={{margin:'20px 15px'}}>
                <input type='radio' size='200' style={{margin:'20px 20px'}} value="payment" name='payment'  {...register('paymentMethod',{required:true})}></input>
            </div>
            <div className='col'>
                <p style={{fontWeight:'bolder',margin:'25px 25px'}}>EMI</p>
                
            </div>
        </div>
        <div className='row border'>
            <div className='col' style={{margin:'20px 15px'}}>
                <input type='radio' size='200' style={{margin:'20px 20px'}} name='payment' height='100' value='pay' onClick={(event)=>updateState(event.target.value)}  {...register('paymentMethod',{required:true})}></input>
                {errors.option1&&<small className='text-danger'>Required*</small>}  
            </div>
            <div className='col'>
                <p><span style={{fontWeight:'bolder'}}>Pay on delivery</span><br></br>Scan & Pay using Anazon app (25 cashback on
                first transaction). Cash, UPI, Cards also accepted</p>
                
                
            </div>
            

        </div>

        <div className='row' style={{margin:'10px 0px 0px 400px'}}>
            <div className='col'>
                <button className='btn btn-success' onClick={handleSubmit(NavigateToSuccess)}>
                    Place Order
                </button>
            </div>
        </div>
        
    </div>
)
}
export default PaymentComponent