import { faEdit, faL, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import SERVERURL from '../../services/serverURL'
import { updateUserProfileApi } from '../../services/allAPI'
import { userUpdateContext } from '../../../contextAPI/ContextShare'

function Edit() {
  const [offCanvaseStatus, setOffCanvasStatus] =  useState(false)
 const [userDetails, setUserDetails] = useState({
     username: '',
     
     password: '',
     cpassword:"",
     bio:"",
     profile:""
   })
    const [token ,setToken] = useState("")
    const [existingProfile ,setExistingProfile] =useState("")
    const [preview,setPreview] = useState("")
    const{setUserEditResponse}=useContext(userUpdateContext)


    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        const userToken = sessionStorage.getItem("token")
        setToken(userToken)
        const user = JSON.parse(sessionStorage.getItem("users"))
        setUserDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
        setExistingProfile(user.profile)
      }

      
    },[])
    const handilePictureUpload = (e)=>{
           setUserDetails({...userDetails,profile:e.target.files[0]})
           const url = URL.createObjectURL(e.target.files[0])
           setPreview(url)
    }
    const handileReset = ()=>{
       const user = JSON.parse(sessionStorage.getItem("users"))
        setUserDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
        setExistingProfile(user.profile)
        setPreview("")
    }
    const handileUpdate = async()=>{
     const {username,password,bio,role,cpassword,profile} = userDetails
     if(!username || !password || !cpassword || !bio){
      toast.info("Please Fill The Form Completely")
     }
     else{
      if(password != cpassword){
        toast.warning("password and Confirm passsword must be same")
      }
      else{
        const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      if (preview){
       for(let key in userDetails){
        reqBody.append(key,userDetails[key])
       }
       const result =  await updateUserProfileApi(reqBody,reqHeader)
       if(result.status == 200){
        toast.success("profile Updation Sucessfully !!!")
        sessionStorage.setItem("user",JSON.stringify(result.data))
        handileReset()
        setOffCanvasStatus(false)
        setUserEditResponse(result.data)
       }
       else{
        toast.error("smoething Went Wrong")
        console.log(result);

       }
      }else{
           const result =  await updateUserProfileApi(reqBody,reqHeader)
       if(result.status == 200){
        toast.success("profile Updation Sucessfully !!!")
        sessionStorage.setItem("users",JSON.stringify(result.data))
        handileReset()
        setOffCanvasStatus(false)
       }
         else{
        toast.error("smoething Went Wrong")
        console.log(result);

       }
      }
      }
     }
    }
  return (
  <>
      <>
        <button onClick={()=>setOffCanvasStatus(true)} className='text-blue-600 border border-blue-600 p-3 hover:text-white'>
          <FontAwesomeIcon icon={faEdit}/> Edit
        </button>
       { offCanvaseStatus &&
        <div>
          <div className="fixed bg-gray-500/75 w-full h-full inset-0 transition-opacity ">
             <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
              <div className="bg-gray-900 px-3 py-4 flex justify-between text-white text-2xl items-center">
                <h1>Edit User Profile</h1>
                <FontAwesomeIcon icon={faXmark} onClick={()=>setOffCanvasStatus(false)} />
              </div>
              <div className="flex justify-center items-center flex-col my-5 ">
                <label htmlFor="profilepic">
                  <input onChange={(e)=>handilePictureUpload(e)} type="file" id='profilepic' style={{display:"none"}}/>
                  {
                  existingProfile ==" "?
                   <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={preview? preview :"https://cdn-icons-png.flaticon.com/512/219/219988.png"} alt="profile" />
                  : existingProfile.startsWith("https://lh3.googleusercontent.com/")?
                  <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={preview? preview :existingProfile} alt="profile" />
                  :
                  <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src=
                  {preview? preview :`${SERVERURL}/uploads/${existingProfile}`} alt="profile" />
                  }
  
                  <button className="bg-yellow-300 z-53 fixed text-white py-2 px-3 rounded" style={{marginLeft:'70px',marginTop:'-30px'}}>
                    <FontAwesomeIcon icon={faPen}  />
                  </button>
                </label>
                <div className="mt-5 px-5 w-full">
                  <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} placeholder='username' type="text" className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
                </div>
                <div className="mt-5 px-5 w-full">
                  <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})}placeholder='Password' type="text" className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
                </div>
                <div className="mt-5 px-5 w-full">
                  <input value={userDetails.cpassword}  onChange={e=>setUserDetails({...userDetails,cpassword:e.target.value})}placeholder='Confirm Password' type="text" className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
                </div>
                <div className="mt-5 px-5 w-full">
                  <textarea value={userDetails.bio}  onChange={e=>setUserDetails({...userDetails,bio:e.target.value})}  placeholder='Bio' type="text" className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded' />
                </div>
                <div className="flex justify-end w-full px-5 mt-10">
                  <button className="bg-amber-600 text-white rounded py-3 px-4 hover:text-amber-600 hover:bg-white border-2 border-black" onClick={handileReset} >Reset</button>
                  <button onClick={handileUpdate} className=" mx-2 bg-green-600 text-white rounded py-3 px-4 hover:text-green-600 hover:bg-white border-2 border-black" >Update</button>
                </div>
              </div>
             </div>
          </div>  
        </div>}
         
         </>
          <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover
          theme="colored"
  
        />
  </>
  )
}

export default Edit