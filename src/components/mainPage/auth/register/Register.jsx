import React from "react";
import Copyright from "../../../utils/copyright/Copyright";
import { Link } from 'react-router-dom'

function Register(){

    return(
      <>
       <div className=" flex justify-center items-center w-screen flex-col pt-5 md:px-0 px-3">
        <h1 className="text-2xl md:text-3xl font-medium text-black">Get <span className="text-custom-blue">started</span></h1>
        <h4 className="font-normal pt-3 md:text-xl pb-5">Start creating the best possible user experience for you admin member.</h4>
      </div>

      <div className="flex justify-center items-center mx-auto">
         <div className="md:w-[40%] w-full max-w-full">
         <div className="bg-white rounded-md shadow-xl transition duration-500 pt-5">
              <form action="">
              <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="name">Name</label>
           <input type="text" name="name" id="name" className="w-full p-3 mb-4 rounded border border-gray-300 dark:border-gray-300 focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Name"/>
          </div>
              <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">Email</label>
           <input type="email" name="email" id="email" className="w-full p-3 mb-4 rounded border border-gray-300 dark:border-gray-300 focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Email"/>
          </div>
          <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">Password</label>
           <input type="password" name="password" id="password" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in-out" placeholder="password"/>
          </div>
          <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="confirm_password">Confirm Password</label>
           <input type="password" name="confirm_password" id="confirm_password" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in-out" placeholder="Confirm Password"/>
          </div>
          <div className="flex justify-center w-full max-w-full pt-6 pb-4">
            <button type="submit" className="bg-custom-blue border border-custom-blue rounded-md py-2 px-4 hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg md:w-1/4 w-full md:mx-0 mx-5">Register</button>
          </div>
              </form>
          </div>
          <div className="flex justify-center flex-wrap flex-row">
             <span className="font-normal">All Rights Reserved &copy;&nbsp;
             <span copyright={<Copyright/>}></span>&nbsp;Mervii Technologies Limited.</span>
             </div>
         </div>
      </div>
      </>
    
    )
}
export default Register;