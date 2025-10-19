import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { googleLoginApi, loginApi, registerApi } from '../services/allAPI'
import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'

function Auth({ register }) {
  const navigate = useNavigate()
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: ''
  })
  // console.log(userDetails);
  //  register steps
  const handileRegister = async () => {
    console.log('Inside handileRegister ');
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("Please fill the form Completely");
    }
    else {
      // toast.success("proceed to api call")
      try {
        const result = await registerApi(userDetails)
        console.log(result);

        if (result.status == 200) {
          toast.success("Register SucessFully !!! Please Login")
          setUserDetails({ username: '', email: '', password: '' })
          navigate('/login')
        }
        else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: '', email: '', password: '' })
          navigate('/login')
        }
        else {
          console.log(result);
          setUserDetails({ username: '', email: '', password: '' })

        }
      } catch (err) {
        console.log(err);

      }
    }

  }
  const handileLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Please fill the form Completely");
    }
    else {
      // toast.success("proceed to api call")
      try {
        const result = await loginApi(userDetails)
        console.log(result);

        if (result.status == 200) {
          toast.success("Login Sucessfully !!!")
          sessionStorage.setItem("users", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setTimeout(() => {
            if (result.data.user.role == 'admin') {
              navigate('/admin-dashbord')
            }
            else {
              navigate('/')
            }
          },2500)
        }
        else if (result.status == 401) {
          toast.warning(result.response.data)
          setUserDetails({ username: '', email: '', password: '' })


        }
        else if (result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ username: '', email: '', password: '' })

        }
        else {
          toast.error("something Went Wrong !!!")
          setUserDetails({ username: '', email: '', password: '' })
        }
      } catch (err) {
        console.log(err);

      }
    }
  }
  const handileGoogleLogin = async (credentialResponse)=>{
         console.log('inside handileGoogle Login');
         const credential = credentialResponse.credential
         const details = jwtDecode(credential)
        
         console.log(details);
         const result = await googleLoginApi({username:details.name,email:details.email,password:"gogleloginpswd",profile:details.picture})
         console.log(result);

         if (result.status == 200) {
          toast.success("Login Sucessfully !!!")
          sessionStorage.setItem("users", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setTimeout(() => {
            if (result.data.user.role == 'admin') {
              navigate('/admin-dashbord')
            }
            else {
              navigate('/')
            }
          },2500)
        }
        else{
           toast.error("something Went Wrong !!!")
        }
         

         
  }

  return (
    <>
      <div className="flex items-center justify-center p-5   w-full min-h-screen  flex-col  bg-[url(https://tse2.mm.bing.net/th/id/OIP.KeRduNXcbnI6lIpUsQzq3gHaFj?pid=Api&P=0&h=180)] bg-no-repeat bg-cover">
        <h1 className='font-bold text-3xl my-5 text-white' >BOOK STORE</h1>
        <div className='bg-black  p-5 rounded-2xl  shadow-2xl  flex-col '>
          <div className='flex items-center justify-center flex-col ' >
            <FontAwesomeIcon icon={faUser} className='border border-white p-5 text-white text-2xl rounded-full  ' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <p className='font-bold text-white text-2xl my-2'>{register ? "Register" : "Login"}</p>
          </div>
          <form>
            {register &&
              <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='User Name' className='px-3 py-2 my-2 w-full bg-white rounded' />
            }
            <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder='Email Id' className='px-3 py-2 my-2 w-full bg-white rounded' />
            <div className='flex items-center'>
              <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPasswordStatus ? "text" : "password"} placeholder='Password' className='px-3 py-2 my-2 w-full bg-white rounded' />
              {viewPasswordStatus ? <FontAwesomeIcon onClick={() => setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-400' style={{ marginLeft: '-40px' }} icon={faEye} />
                :
                <FontAwesomeIcon onClick={() => setViewPasswordStatus(!viewPasswordStatus)} className='text-gray-400' style={{ marginLeft: '-40px' }} icon={faEyeSlash} />}
            </div>

            <div className='flex justify-between mb-5 '>
              <p className='text-sm text-yellow-400 tracking-tighter'>*never share  the password  with others</p>
              <p className='underline text-sm text-white'>forget password</p>
            </div>

            {
              register ?
                <button type='button' onClick={handileRegister} className='w-full  py-2 rounded bg-green-800 text-white'>Register</button>
                :
                <button type='button' onClick={handileLogin} className='w-full   py-2 rounded bg-green-800 text-white'>Login</button>
            }
            {/* google auth  */}
            <div className='text-center my-3 text-white'>
              {!register &&
                <div className=''>
                  <p>   ---------or------------</p>
                 <GoogleLogin
                    onSuccess={credentialResponse => {
                      console.log(credentialResponse);
                      handileGoogleLogin(credentialResponse)
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />

                </div>

              }
            </div>


            {
              register ?
                <p className='text-white text-center text-sm' >Are You Already A user? <Link to={'/login'} className='underline text-yellow-400' >Login</Link></p>
                :
                <p className='text-white text-center text-sm'>Are You  A New  USer? <Link to={'/register'} className='underline text-yellow-400' >Register</Link></p>
            }

          </form>


        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="colored"

      />
    </>
  )
}

export default Auth