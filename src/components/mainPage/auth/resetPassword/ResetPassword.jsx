import React from "react";
import Copyright from "../../../utils/copyright/Copyright";
import { Link } from 'react-router-dom'

function Register(){

    return(
      <>
       <div className=" flex justify-center items-center w-screen flex-col pt-5">
        <h1 className="text-2xl md:text-3xl font-medium text-black">Reset <span className="text-custom-blue">Password</span></h1>
        <h4 className="font-normal pt-3 md:text-xl pb-5">You can now rest your password successfully</h4>
      </div>

      <div className="flex justify-center items-center mx-auto">
         <div className="md:w-[40%] w-full max-w-full">
         <div className="bg-white rounded-md shadow-xl transition duration-500 pt-7">
             <div className="">
              <form action="">
          <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">Password</label>
           <input type="password" name="password" id="password" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in-out" placeholder="password"/>
          </div>
          <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="new_password"> New Password</label>
           <input type="password" name="new_password" id="new_password" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in-out" placeholder="new password"/>
          </div>
          <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="confirm_password">Confirm Password</label>
           <input type="password" name="confirm_password" id="confirm_password" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in-out" placeholder="confirm password"/>
          </div>
          <div className="flex justify-center w-full max-w-full py-4">
            <button type="submit" className="bg-custom-blue border border-custom-blue rounded-md px-8 py-2 hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg md:w-1/2 w-full md:mx-0 mx-5">Reset your password now</button>
          </div>
              </form>
             </div>
          </div>
          <div className="flex justify-center flex-wrap flex-row">
             <span className="font-normal md:text-base text-sm">All Rights Reserved &copy;&nbsp;
             <span copyright={<Copyright/>}></span>&nbsp;Mervii Technologies Limited.</span>
             </div>
         </div>
      </div>
      </>
        )
}
export default Register;

