import { Link } from "react-router-dom";
import {useState} from 'react'
import {add,setLogin} from '../Slice/Login.slice'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import LoginComponent from "./LoginComponent";

function RegisterComponent() {
  const dispatch=useDispatch()
  const Nav=useNavigate()
  const data=useSelector((state)=>state.user)
  // console.log('Reg data',data)
  const [RegisteredData,setRegistereddata]=useState({'firstName':'','lastName':'','email':'','mobileNumber':'','password':''})
  const {register,handleSubmit,formState:{errors}}=useForm()

const UpdateState=(type,value)=>{
  setRegistereddata({...RegisteredData,[type]:value})

}
const Login=()=>{
  if(data.user.login)
  {
    Nav('/')
  }
}
const  updateUser=(event)=>{
  //event.preventDefault()
 
  dispatch(add(RegisteredData))
  dispatch(setLogin())
  // console.log(data)
  Nav('/')
  
  // 
}
// console.log("reg",RegisteredData)
  return (
    <div className="container border mt-5 m">
      <form onSubmit={handleSubmit((event)=>updateUser(event))}>
      <div className="mb-3">
        <label
          style={{ fontWeight: "bolder" }}
          forHtml="exampleFormControlInput1"
          className="form-label"
        >
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="first name"
          {...register('firstName',{required:true})}
          onChange={(event)=>UpdateState('firstName',event.target.value)}
        />
        {errors.firstName&& <small className="text-danger">First Name required</small>}
      </div>
      <div className="mb-3">
        <label
          style={{ fontWeight: "bolder" }}
          forHtml="exampleFormControlInput1"
          className="form-label"
        >
         Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="last name"
          {...register('lastName',{required:true})}
          onChange={(event)=>UpdateState('lastName',event.target.value)}
        />
         {errors.lastName&& <small className="text-danger">Last Name required</small>}
      </div>
      <div className="mb-3">
        <label
          style={{ fontWeight: "bolder" }}
          forHtml="exampleFormControlInput1"
          className="form-label"
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          {...register('email',{pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,required:true})}
          onChange={(event)=>UpdateState('email',event.target.value)}
        />
         {errors.email&& <small className="text-danger">{errors.message}</small>}
      </div>
      <div className="mb-3">
        <label
          style={{ fontWeight: "bolder" }}
          forHtml="exampleFormControlTextarea1"
          className="form-label"
        >
          Mobile Number
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlTextarea1"
          {...register('mobileNumber',{required:true})}
          onChange={(event)=>UpdateState('mobileNumber',event.target.value)}
        ></input>
         {errors.mobileNumber&& <small className="text-danger">Mobile Number required</small>}
      </div>
      <div className="mb-3">
        <label
          style={{ fontWeight: "bolder" }}
          forHtml="exampleFormControlTextarea1"
          className="form-label"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlTextarea1"
          {...register('password',{required:true})}
          onChange={(event)=>UpdateState('password',event.target.value)}
        ></input>
         {errors.password&& <small className="text-danger">Password required</small>}
      </div>
     
      <div className="mb-3 ">
        <button className="btn btn-success">Register</button>
        <Link to="/login" className="ms-3">
          Already Registerd? Login
        </Link>
      </div>
      </form>
    </div>
  );
}
export default RegisterComponent;
