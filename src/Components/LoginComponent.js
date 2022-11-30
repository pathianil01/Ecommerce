import { fetchUsers } from "../Slice/Login.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {setLogin} from '../Slice/Login.slice'
import {useForm} from 'react-hook-form'
function LoginComponent() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const {register,handleSubmit,formState:{errors}}=useForm()
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const user = useSelector((state) => state.user);
  // console.log("user List", user);
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  const setUpdate = (type, value) => {
    setFormData({ ...formData, [type]: value });
  };
  const validateUser = (event) => {
    let flag = 0;
    if(user.user.length)
    {
    user.user.map((data) => {
     
      if (data.email == formData.email && data.password == formData.password){
        flag = 1;
      }
      
    });
  }
  else{
    if(formData.email==='anil523108@gmail.com' && formData.password==='Anil@542')
    {
      flag=1
    }
  }
    if (flag == 1) {
      dispatch(setLogin())
      window.alert("Login Successfull");
      Nav("/");
    } else {
      window.alert("Incorrect email/pasword");
    }
  };
  // console.log("formData", formData.email);
  return (
    <div className="container border mt-5 m">
      <form onSubmit={handleSubmit((event)=>validateUser(event))}>
      <div className="mb-3">
                <label
                  style={{ fontWeight: "bolder" }}
                  for="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
        <input
          
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        
          {...register('email',{pattern:'/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i'})}
  
          onChange={(event) => {
            setUpdate("email", event.target.value);
          }}
        />
        {errors.email && <small className="text-danger">{errors.message}</small>}
      </div>
      <div className="mb-3">
        <label
          style={{ fontWeight: "bolder" }}
          for="exampleFormControlTextarea1"
          className="form-label"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlTextarea1"
          {...register('password',{required:true})}
          onChange={(event) => {
            setUpdate("password", event.target.value);
          }}
          value={formData.password}
        />
        {errors.password && <small className="text-danger">Password Required</small>}
      </div>
      <div className="mb-3 ms-5 ps-10">
        <button
          className="btn btn-success"
        
        >
          Login
        </button>
        <Link to="/Register" className="ms-3">
          New user? Register here
        </Link>
      </div>
      </form>
    </div>
  );
}

export default LoginComponent;
