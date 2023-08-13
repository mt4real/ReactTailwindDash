import React from "react";
import Copyright from "../../../utils/copyright/Copyright";

function ForgotPassword (){

    return(
        
      <div className="min-h-screen mx-auto flex justify-center flex-wrap md:pt-20">
      <div className="md:w-1/2 w-full max-w-full">
      <div className="bg-white rounded shadow-md">
        <div className="md:text-5xl text-2xl flex justify-start flex-wrap p-6">
           <h1 className="font-medium text-black drop-shadow-lg">Forgot <span className="text-custom-blue">Password</span></h1>
        </div>
        <div className="flex justify-start flex-shrink pl-6">
        <h5 className="font-normal mb-3 pb-3 md:text-sm text-small">You forgot your password, don't worry,you will need to provide us with your e-mail and we <br></br>will send an email link to you in order to reset your password</h5>
        </div>
        <div className="p-6">
        <form className="valid-form flex flex-wrap flex-row -mx-4">
        
        <div className="form-group flex-shrink  px-4 w-full  mb-4">
            <label htmlFor="email" className="inline-block mb-2">Email</label>
            <input type="email" className="w-full p-5 rounded border border-gray-300 
             focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50
             transition duration-500 ease-in-out" id="email" placeholder="Email"/>
        </div>
       
        <div className="form-group flex justify-center flex-shrink max-w-full w-full px-4 md:mx-0 mx-5">
            <button type="submit" className="bg-custom-blue border border-custom-blue hover:text-white hover:bg-indigo-700 font-mono
             text-white/100 md:text-lg text-sm px-12 rounded-md py-4">
              Send an Email link to me
              </button>
        </div>
          
        </form>
        </div>
      </div>
      <div className="flex justify-center flex-wrap flex-row">
    <span className="font-small fw-bold">All Rights Reserved &copy;&nbsp;
            <span copyright={<Copyright/>}></span>&nbsp;Mervii Technologies Limited.</span>
            </div>
      </div>
     </div>
    )
}
export default ForgotPassword;