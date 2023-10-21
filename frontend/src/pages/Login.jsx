import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
     /*<div className='w-full flex flex-col justify-center space-y-4 items-center h-[70vh]'>
        <div className='flex justify-center'>
            <h1 className='font-bold'>Login</h1>
            <input className='' type="text" placeholder='Email'></input>
            <input className='' type="password" placeholder='Password'></input>
            <button type="button" className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Login</button>
        </div>
    </div> */
      <>
          <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
              <h1 className='text-lg md:text-xl font-extrabold'><Link to="/">React Blog</Link></h1>
              <h3><Link to = "/register">Register</Link></h3>
          </div>
          <div className='flex justify-center h-[80vh]'>
              <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                  <div class="w-full px-8 md:px-32 lg:px-24">
                      <form class="bg-white rounded-md shadow-2xl p-5">
                          <h1 class=" flex text-gray-800 font-bold text-2xl mb-8 justify-center items-center">Sign In</h1>
                          <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                              </svg>
                              <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
                          </div>
                          <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                              </svg>
                              <input class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" />

                          </div>
                          <button type="submit" class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">LOGIN</button>
                          <div class="flex justify-between mt-4">
                              <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>

                              <a href="#" class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                                  <Link to="/register">Don't have an account yet?</Link>
                              </a>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </>
    )
}

export default Login