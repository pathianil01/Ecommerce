import {useLocation,useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {add} from '../Slice/Cart'
import {useDispatch,useSelector} from 'react-redux'


function ProductDetailsComponent(props)
{
    const loc=useLocation()
    const dispatch=useDispatch()
    const Nav=useNavigate()
    const loginInfo=useSelector((state)=>state.user)
    console.log(loginInfo)
    const [review,setReview]=useState([
        {
            id:1,
            review:'This device is purely for normal use, I do not recoment thi produc for gaming.Camera is ok. The battery is really working good and long lasting. ',
            star:'4.5'
        },
        {
            id:2,
            review:'This device is purely for normal use, I do not recoment thi produc for gaming.Camera is ok. The battery is really working good and long lasting. ',
            star:'4.0'
        },
        {
            id:3,
            review:'This device is purely for normal use, I do not recoment thi produc for gaming.Camera is ok. The battery is really working good and long lasting. ',
            star:'3.5'
        },
        {
            id:4,
            review:'This device is purely for normal use, I do not recoment thi produc for gaming.Camera is ok. The battery is really working good and long lasting. ',
            star:'3.0'
        }

    ])
    const UpdateCart=(event)=>{
        event.preventDefault()
        if(loginInfo.login)
        {
        dispatch(add(loc.state))
        }
        else{
            window.alert("Please login to proceed")
        }
    }
    const GoToAddress=(event)=>
    {
        event.preventDefault()
        if(loginInfo.login)
        {
            Nav('/address')
        }
        else{
            window.alert("Please login to proceed")
        }
       
    }
return(
<div className="container mt-5 border">
        <h1 className='text text-primary text-center mb-5'>Product Details</h1>
       
          <div className="row border-bottom " key={loc.state.id}>
            <div className="col-sm-3">
              
              <img  style={{marginTop:'10px'}}src={loc.state.thumbnail} width="300px" height="300px" title={loc.state.description}></img>
              <div style={{marginTop:'15px'}}>
              <button style={{marginRight:'10px',marginLeft:'40px'}} className='btn btn-success' onClick={(event)=>UpdateCart(event)}>Add to Cart</button>
              <button  className='btn btn-success' onClick={(event)=>GoToAddress(event)}>Buy Now</button>
              </div>
            </div>
            <div className="col-sm">
              <h2>{loc.state.title}</h2>
              
              <p>{loc.state.description}</p>
              <p>
                41,095 Ratings & 1,899 Reviews
              </p>
              <h6 className='text text-success'>Extra ₹5000 off</h6>
              <h4 style={{fontWeight:'bolder'}}>₹{loc.state.price}  <small className='text text-success'style={{marginLeft:'10px'}}>33% off</small></h4>
              <p>+ ₹29 Secured Packaging Fee</p>
              <h3>Available offers</h3>
                <ul >
                <li style={{fontSize:'20px'}}><span style={{fontWeight:'bolder'}}>Bank Offer</span> 10% off on HDFC Bank Credit and Debit Card Full Swipe Trxns,up to ₹500.On orders of ₹5,000 and above <span style={{fontWeight:'bolder'}} className='text text-primary'>T&C</span></li>
                <li style={{fontSize:'20px'}}><span style={{fontWeight:'bolder'}}>Bank Offer</span> 10% off on HDFC Bank Credit and Debit Card EMI Trxns, up to ₹1,000. On orders of ₹5,000 and above <span style={{fontWeight:'bolder'}}className='text text-primary'>T&C</span></li>
                <li style={{fontSize:'20px'}}><span style={{fontWeight:'bolder'}}>Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card <span style={{fontWeight:'bolder'}} className='text text-primary'>T&C</span></li>
                <li style={{fontSize:'20px'}}><span style={{fontWeight:'bolder'}}>Special Price</span>Get extra ₹5000 off (price inclusive of cashback/coupon) <span className='text text-primary' style={{fontWeight:'bolder'}}>T&C</span></li>
                </ul>
              
              
            </div>
            <div className='row'>
                <h4 style={{marginLeft:'310px',fontWeight:'bolder'}}>Storage</h4>
                <div style={{marginLeft:'400px'}}className='col'>
                    <button style={{marginRight:'10px',backgroundColor:'white',fontWeight:'bold'}}>64GB</button>
                    <button style={{backgroundColor:'white',fontWeight:'bold'}}>128GB</button>
                </div>
            </div>
            <div style={{marginTop:'10px'}}className='row'>
                <h4 style={{marginLeft:'310px',fontWeight:'bolder'}}>Highlights</h4>
                <div style={{marginLeft:'380px'}}className='col'>
                    <ul>
                        <li>4 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                        <li>16.76 cm (6.6 inch) Full HD+ Display</li>
                        <li>50MP + 5MP + 2MP | 8MP Front Camera</li>
                        <li>6000 mAh Lithium Ion Battery</li>
                        <li>Exynos 850 Processor</li>
                    </ul>
                    
                </div>
            </div>
            <div className='row'>
                <h1 className='border-top'>Ratings & Reviews</h1>
                {review.map((review)=>(
                    <div key={review.id}>
                        <span style={{fontSize:'30px',fontWeight:'bold',marginLeft:'10px'}}>{review.star} <img style={{marginBottom:'5px',marginLeft:'0px'}}src='https://cdn-icons-png.flaticon.com/512/1828/1828884.png'width="30px"></img></span>
                        <p style={{marginLeft:'25px',fontSize:'20px'}}>{review.review}</p>

                    </div>
                )

                    
                )}

            </div>
            
          </div>
   
      
    </div>
)
}
export default ProductDetailsComponent