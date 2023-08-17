import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Sidebar from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Footer from "../../utils/footer/Footer";
import Button from "../../utils/button/Button";


export default function FormLayout() {
  const dashboard=useContext(GlobalStateContext);
  return (
    <>
     <Sidebar/>
     <div className={`min-h-screen relative ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
               
      <NavHeaderSecond/>
      <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
        <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 pb-4">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal">Form Layouts</h4>
             </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4 className="text-xl">Form basic</h4>
                </div>
                <div className="card-body">
                
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
           <input type="password" name="confirm_password" id="confirm_password" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in-out" placeholder="confirm_password"/>
          </div>
          <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="file">Image</label>
           <input type="file" name="file" id="file" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in-out" placeholder="confirm_password"/>
          </div>
          <div className="flex justify-center w-full max-w-full pt-6 pb-4">
            <Button type="submit" className="bg-custom-blue border border-custom-blue rounded-md py-2 px-4 hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg md:w-1/3 w-full">Submit</Button>
          </div>
              </form>
              
          </div> 
            </div>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 pb-4">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal">Grid Layouts</h4>
             </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4 className="text-xl">Form grid layouts</h4>
                </div>
                <div className="card-body">
                
                <form action="" className="flex flex-row flex-wrap">
                    <div className="md:w-1/2 w-full max-w-full pr-4">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Name"/>
                    </div>
                    <div className="md:w-1/2 w-full max-w-full">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">Email</label>
                   <input type="email" name="email" id="email" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Email"/>
                    </div>
                    <div className="w-full max-w-full">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="date">Date</label>
                      <input type="date" name="date" id="date"className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in"/>
                    </div>
                    <div className="w-full max-w-full">
                        <label htmlFor="father_name" className="block text-gray-700 text-sm  mb-2">Father's Name</label>
                        <input type="text" name="name" id="name" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Father's Name"/>
                    </div>
                    <div className="w-full max-w-full">
                        <label htmlFor="mother's_name" className="block text-gray-700 text-sm  mb-2">Mother's Name</label>
                        <input type="text" name="mother's_name" id="mother's_name" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Father's Name"/>
                    </div>
                    <div className="md:w-1/3 w-full max-w-full pr-4">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="country">Country</label>
                   <select name="country" id="country" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in">
                    <option disabled selected value="Choose your country">Choose your country</option>
                    <option value="Nigeria" className="bg-custom-blue">Nigeria</option>
                   </select>
                    </div>
                    <div className="md:w-1/3 w-full max-w-full pr-4">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="state">State</label>
                   <select name="state" id="state" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in">
                    <option disabled selected value="Choose your state">Choose your state</option>
                    <option value="Oyo" className="bg-custom-blue">Oyo</option>
                   </select>
                    </div>
                    <div className="md:w-1/3 w-full max-w-full">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="local_govt">Local Govt</label>
                   <select name="local_govt" id="local_govt" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in">
                    <option disabled selected value="Choose your local govt">Choose your local govt</option>
                    <option value="Ona-Ara" className="bg-custom-blue">Ona-Ara</option>
                   </select>
                    </div>
                    <div className="w-full max-w-full">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="address">Address</label>
                    <textarea cols="" rows="" id="address" name="address" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Address" ></textarea>
                    </div>
                    <div className="flex justify-center w-full max-w-full pt-6 pb-4">
                    <Button type="submit" className="bg-custom-blue border border-custom-blue rounded-md py-2 px-4 hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg md:w-1/3 w-full">Submit</Button>
                </div>
                </form>
          </div> 
            </div>

            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 pb-4">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal">Grid inline Layouts</h4>
             </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4 className="text-xl">Form inline responsive</h4>
                </div>
                <div className="card-body">
                <form action="" className="flex flex-col md:flex-row  lg:flex-row gap-x-3">
                    <div className="basis-1/4">
                    <label className=" text-gray-700 text-sm  mb-2" htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Name"/>
                    </div>
                    <div className="basis-1/4">
                    <label className=" text-gray-700 text-sm  mb-2" htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Email"/>
                    </div>
                    <div className="basis-1/4">
                    <label className=" text-gray-700 text-sm  mb-2" htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Password"/>
                    </div>
                    <div className="basis-1/4">
                    <Button type="submit" className="bg-custom-blue border border-custom-blue rounded-md py-2 px-4  hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg text-center mt-6 w-full md:w-1/2">Submit</Button>
                    </div>
                </form>
               
                </div> 
            </div>
        </main>
      <Footer/>
    </div>
    
    </>
  )
}
