import React from 'react'
import { FaUser, FaEye } from "react-icons/fa";

function Auth({ register }) {
  return (
    <div className='flex justify-center flex-col items-center h-screen bg-[url(/book.jpg)] bg-center bg-cover text-white'>

      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center">

        <h1 className="text-3xl font-bold mb-6">BOOK STORE</h1>

        <div className="bg-[#1E2939] text-white rounded-lg shadow-lg p-8 w-96">
          
          {/* User Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
              <FaUser />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-semibold mb-6">
            {register ? "Register" : "Login"}
          </h2>

          {/* Username (only in Register) */}
          {register && (
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 mb-4 rounded-md text-white outline-none"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email Id"
            className="w-full px-4 py-2 mb-4 rounded-md text-white outline-none"
          />

          {/* Password */}
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md text-white outline-none"
            />
            <FaEye className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
          </div>

          
   

          <p className="text-xs text-yellow-400 mt-1 mb-2">
            * Never share the password with others
          </p>

          
          {!register && (
            <div className="flex justify-end text-sm mb-4">
              <a href="/" className="text-gray-300 hover:underline">
                Forget Password
              </a>
            </div>
          )}

       
          <button className="w-full bg-green-600 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            {register ? "Register" : "Login"}
          </button>

        
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-2 text-gray-300">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* spce 4 Google sign in */}
          <div className="w-full h-12 mb-6"></div>

          
          {!register ? (
            <p className="text-center text-sm">
              Are you a New User?{" "}
              <a href="/register" className="text-blue-400 hover:underline">
                Register
              </a>
            </p>
          ) : (
            <p className="text-center text-sm">
              Are you an Existing User?{" "}
              <a href="/login" className="text-blue-400 hover:underline">
                Login
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth
