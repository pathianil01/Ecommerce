import {useSelector} from 'react-redux'
function ProfileComponent(){
    const data=useSelector((state)=>state.user.user)
    // console.log(data)
    return(
        <div className="container pt-5">
            <div className='row'>
                <div className='col-sm-3 ps-5 ms-5 align'>
            <img style={{marginLeft:'300px'}} src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/external-user-user-tanah-basah-glyph-tanah-basah-7.png'
                 width="100"
            ></img>

            </div>
            </div>
            <div  style={{marginLeft:'240px'}}className='row'>
                {data.map(data=>(
                    <>
                    <div className='border-bottom'>
                                    <label
                    style={{ fontWeight: "" }}
                    for="exampleFormControlInput1"
                    className="form-label"
                    >
                    First Name
                    </label>
                        <p className='text fs-6 h6' style={{fontWeight:'bolder'}}>{data.firstName}</p>
                        
                     </div> 
                     <div className='border-bottom'>
                                    <label
                    style={{ fontWeight: "" }}
                    for="exampleFormControlInput1"
                    className="form-label"
                    >
                    Last Name
                    </label>
                        <p className='text fs-6' style={{fontWeight:'bolder'}}>{data.lastName}</p>
                        
                     </div> 
                     <div className='col' style={{marginTop:'40px',marginBottom:'40px',marginLeft:'240px',fontWeight:'bolder'}}>
                        <span className='text text-primary'>SUBMIT</span>
                     </div>
                     <div className='border-bottom'>
                                    <label
                    style={{ fontWeight: "" }}
                    for="exampleFormControlInput1"
                    className="form-label"
                    >
                    Email ID
                    </label>
                        <p className='text fs-6' style={{fontWeight:'bolder'}}>{data.email} <span className='text text-primary'style={{marginLeft:'630px'}}>update</span></p>
                       
                        
                     </div> 
                     <div className='border-bottom'>
                                    <label
                    style={{ fontWeight: "" }}
                    for="exampleFormControlInput1"
                    className="form-label"
                    >
                    Mobile Number
                    </label>
                        <p className='text fs-6' style={{fontWeight:'bolder'}}>{"+91"+data.mobileNumber}<span className='text text-primary'style={{marginLeft:'690px'}}>update</span></p>
                        
                     </div> 
                       
                     </>))}
            </div>
            <div className='row border-top' style={{marginLeft:'240px',marginTop:'40px'}}>
            <label
                    style={{ fontWeight: "" }}
                    for="exampleFormControlInput1"
                    className="form-label"
                    >
                    Change Password
                    </label> 

            </div>
            <div className='row border-top' style={{marginLeft:'240px'}}>
            <label
                    style={{ fontWeight: "" }}
                    for="exampleFormControlInput1"
                    className="form-label"
                    >
                    Deactivate Account
                    </label>

            </div>
            
              
  </div>
    )
}
export default ProfileComponent