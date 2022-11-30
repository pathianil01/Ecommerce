import {useSelector,useDispatch} from 'react-redux'
import {adding} from '../Slice/Address.slice'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
function AddAddress()
{
const [address,setAdress]=useState({'firstName':'','lastName':'','email':'','mobileNumber':'','pinCode':'',
'flat':'',
'area':'',
'landmark':'',
'town':''
})
const {register,handleSubmit,formState:{errors}}=useForm()
const dispatch=useDispatch()
const Nav=useNavigate()
const UpdateAddress=(type,value)=>
{
setAdress({...address,[type]:value})
}
const AddAddress=()=>
{
    // event.preventDefault()
    // console.log(address)

    dispatch(adding(address))
    Nav('/payment')

}
return(
    <div className="container border mt-5 m">
      
        <h2 className="text text-primary" style={{textAlign:'center'}}>Add Address</h2>
        
      <div className="mb-3 mt-3">
        
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="First Name"
          {...register('firstName',{required:true})}
          onChange={(event)=>UpdateAddress('firstName',event.target.value)}
         
        />
        {errors.firstName&&<span className='text-danger'>Required*</span>}
      </div>
      <div className="mb-3">
       
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Last Name"
          {...register('lastName',{required:true})}
          onChange={(event)=>UpdateAddress('lastName',event.target.value)}
        />
         {errors.lastName&&<span className='text-danger'>Required*</span>}
      </div>
      <div className="mb-3">
      
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          {...register('email',{required:true})}
          onChange={(event)=>UpdateAddress('email',event.target.value)}
        />
         {errors.email&&<span className='text-danger'>Required*</span>}
      </div>
      <div className="mb-3">
       
        <input
          type="number"
          className="form-control"
          
          placeholder="Mobile Number"
          {...register('mobileNumber',{required:true})}
          onChange={(event)=>UpdateAddress('mobileNumber',event.target.value)}
        ></input>
         {errors.mobileNumber&&<span className='text-danger'>Required*</span>}
      </div>
      <div className="mb-3">
       
        <input
          type="number"
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="PIN Code(6 digits PIN code)"
          {...register('pin',{required:true})}
          onChange={(event)=>UpdateAddress('pinCode',event.target.value)}
        ></input>
         {errors.pin&&<span className='text-danger'>Required*</span>}
      </div>
      <div className="mb-4">
       
        <input
          type="text"
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Flat, House no., Building, Company, Apartment"
          {...register('flat',{required:true})}
          onChange={(event)=>UpdateAddress('flat',event.target.value)}
        ></input>
         {errors.flat&&<span className='text-danger'>Required*</span>}
        </div>
        <div className="mb-4" >
       
       <input
         type="text"
         className="form-control"
         id="exampleFormControlTextarea1"
         placeholder="Area, Street, Sector, Village"
         {...register('area',{required:true})}
         onChange={(event)=>UpdateAddress('area',event.target.value)}
         
       ></input>
        {errors.area&&<span className='text-danger'>Required*</span>}
       </div>
       <div className="mb-3" >
       
       <input
         type="text"
         className="form-control"
         id="exampleFormControlTextarea1"
         placeholder="Landmark"
         {...register('landmark',{required:true})}
         onChange={(event)=>UpdateAddress('landmark',event.target.value)}
       ></input>
        {errors.landmark&&<span className='text-danger'>Required*</span>}
       </div>
       <div className="mb-3" >
       
       <input
         type="text"
         className="form-control"
         id="exampleFormControlTextarea1"
         placeholder="Town/City"
         {...register('town',{required:true})}
         onChange={(event)=>UpdateAddress('town',event.target.value)}
       ></input>
        {errors.town&&<span className='text-danger'>Required*</span>}
       </div>
       <div className="mb-3" >
       
       <select  {...register('option',{required:true})}>
        <option>
            State
        </option>
        <option>Andhra Pradesh</option>
        <option>Telangana</option>
        <option>Madhya Pradesh</option>
        <option>Delhi</option>
        <option>Tamil Nadu</option>
       </select> {errors.option&&<span className='text-danger'>Required*</span>}
      
     </div>
     <div className="mb-3">
        <input type='checkbox'></input><span className="ms-2">Mark this my default address </span>


     </div>
     <div className="mb-3">
        <h4>Add delivery instructions</h4>
        <p>Preferences are used to plan your deliver. However, shipments can sometimes arrive early or later than planned.</p>
     </div>
     <div className="mb-3">
        <label className="form-label">Address type</label><br></br>
        <select >
            <option>Select an Adress Type</option>
            <option>Home(7 am - 9 pm delivery)</option>
            <option>Office/Commercials(10 AM - 6 PM delivery)</option>
           
        </select>
     </div>
     
     <div>
     <Link to='/payment'>
        <button className="btn btn-success ms-5" onClick={handleSubmit(AddAddress)} >Continue</button>
        </Link>
     </div>
  
     </div>
    
    
    
    
     
     
     
   
  
)
}
export default AddAddress