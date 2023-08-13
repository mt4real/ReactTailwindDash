import React from "react";
import Copyright from "../../../utils/copyright/Copyright";
import MyImage from "../../../../assets/images/my_pic.jpg";
import { Link } from "react-router-dom";
import Button from "../../../utils/button/Button";

function Login (){

    return(
      <>
      <div className="flex justify-center items-center w-screen flex-col pt-7">
        <h1 className="md:text-4xl text-2xl font-medium text-black">Welcome <span className="text-custom-blue">back</span>, Afolabi</h1>
        <h4 className="font-normal pt-3 md:text-2xl text-xl">Sign in into your account to continue</h4>
      </div>

      <div className="flex justify-center items-center mx-auto pt-4">
         <div className="md:w-[40%] w-full max-w-full">
         <div className="bg-white rounded-md shadow-xl transition duration-500">
             <div className="flex justify-center p-5">
             <img src={MyImage} alt="admin image" className="rounded-full w-1/6 h-auto" width={90} height={90}/>
             </div>
             <div className="">
              <form action="">
              <div className="w-full pb-4 px-4">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">Email</label>
           <input type="email" name="email" id="email" className="w-full p-3 mb-4 rounded border border-gray-300 dark:border-gray-300 focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Email"/>
          </div>
          <div className="w-full pb-4 px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">Password</label>
           <input type="password" name="password" id="password" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-custom-blue/50 focus:outline-custom-blue/50 transition duration-500 ease-in-out" placeholder="password"/>
          </div>
          <div to="#" className=" pl-3 text-lg font-light flex justify-start">
           <p>
           forgot password?please click 
             <Link to="/forgot-password" className="text-custom-blue font-medium pl-1">here</Link>
           </p>
          </div>
          <div className="flex justify-start pl-3" aria-labelledby="checkbox_remember_me">
           <p className="font-mono" >
            Remember me <span className="pl-6"><input type="checkbox" name="checkbox_remember_me" className="rounded border border-gray-400 shadow-sm" id="" /></span>
           </p>
          </div>
          <div className="flex justify-center w-full max-w-full pt-6 pb-4">
           <Button type="submit" className="bg-custom-blue border border-custom-blue rounded-md py-2 md:mx-0 mx-5 hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg md:w-1/4 w-full">Login</Button>
          </div>
              </form>
             </div>
          </div>
          <div className="flex justify-center flex-wrap flex-row">
             <span className="font-normal text-sm">All Rights Reserved &copy;&nbsp;
             <span copyright={<Copyright/>}></span>&nbsp;Mervii Technologies Limited.</span>
             </div>
         </div>
      </div>
      </>
     
    )
}
export default Login;