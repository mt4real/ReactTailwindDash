import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Sidebar from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import IconArrowDownUp from "../../../assets/icons/IconArrowDownUp";
import IconCartAlt from "../../../assets/icons/IconCartAlt";
import Footer from "../../utils/footer/Footer";
import Button from "../../utils/button/Button";
import Image5 from "../../../assets/images/avatar-5.jpg";

export default function Profile() {
    const dashboard=useContext(GlobalStateContext);

    const tabList = [
        {
          name: "Tab 1",
          label: "Account Details",
          content:(
             <div className="w-full max-w-full px-3 mb-12">
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
                    <div className="w-full max-w-full md:flex-none flex md:justify-normal justify-center items-center  py-3">
                    <Button type="submit" className="bg-custom-blue border border-custom-blue rounded-md  md:py-2 md:px-4  hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg text-center w-1/2  md:w-1/4">Save changes</Button>
                    </div>
                </form>
             </div>
   
          ),
        },
        {
          name: "Tab 2",
          label: "Change Password",
          content: (
    
         
         <div className="bg-white rounded-md shadow-xl transition duration-500 pt-7">
             
              <form action="" className="flex flex-row flex-wrap">
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
          <div className="w-full max-w-full md:flex-none flex md:justify-normal justify-center items-center px-2  py-3">
            <Button type="submit" className="bg-custom-blue border border-custom-blue rounded-md  md:py-2 md:px-4  hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg text-center w-1/2  md:w-1/4">Update Password</Button>
            </div>
              </form>
             </div>
          ),
        },
        {
          name: "Tab 3",
          label: "Privacy and Safety",
          content: (
            <div className="tab-content">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
               qui officia deserunt mollit anim id est laborum
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
               
                qui officia deserunt mollit anim id est laborum
    
            </p>
            </div>
          ),
        },
        {
            name: "Tab 4",
            label: " Email Notifications",
            content: (
              <div className="tab-content">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                 qui officia deserunt mollit anim id est laborum
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                 
                  qui officia deserunt mollit anim id est laborum
      
              </p>
              </div>
            ),
          },
          {
            name: "Tab 5",
            label: "Admin Notifications",
            content: (
              <div className="tab-content">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                 qui officia deserunt mollit anim id est laborum
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                 
                  qui officia deserunt mollit anim id est laborum
      
              </p>
              </div>
            ),
          },
          {
            name: "Tab 6",
            label: "Change Profile Pic",
            content: (
              <div className="w-full max-w-full px-3 mb-12">
                <div className=" flex justify-center items-center px-4 pb-3">
                    <img src={Image5} className=" w-1/4 h-auto rounded-full" width={70} height={70} alt="profile image" />
                    </div>
                <form action="" className="flex flex-row flex-wrap">
                    <div className="md:w-1/2 w-full max-w-full pr-4">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="file">image</label>
                  <input type="file" name="file" id="file" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in"/>
                    </div>
                    
                    <div className="w-full max-w-full md:flex-none flex md:justify-normal justify-center items-center  py-3">
                    <Button type="submit" className="bg-custom-blue border border-custom-blue rounded-md  md:py-2 md:px-4  hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg text-center md:w-1/3 w-full ">Save changes</Button>
                    </div>
                </form>
             </div>
            ),
          },
          {
            name: "Tab 7",
            label: "Delete Account",
            content: (
              <>
                <div className="flex justify-center items-center">
                <h1 className="text-sm text-black/50">You can safely delete your account here</h1>
                </div>
                 <div className="w-full max-w-full py-3 px-3 flex flex-row flex-wrap justify-center items-center">
                    <Button type="submit" className="bg-red-500 border border-red-500 rounded-md  md:py-2 md:px-4  hover:text-white hover:bg-red-700 font-mono text-white/100 text-lg text-center w-1/2">Delete your account</Button>
                </div>
                </>
            ),
          },
      ];
      
        return (
          <>
           <Sidebar/>
           <div className={`min-h-screen relative ${
                    dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
                     
            <NavHeaderSecond/>
              <main className="pt-20 content">
               <div className=" flex flex-col md:flex-row lg:flex-row gap-x-12 pt-12">
                <div className="basis-1/5">
                 <div className="bg-white rounded-md shadow-xl">
                    <div className="flex justify-center flex-wrap">
                    <h1 className="text-2xl p-3">Profile Settings</h1>
                    </div>
                    <div className=" flex justify-center items-center px-4 pb-3">
                    <img src={Image5} className=" w-auto h-auto rounded-full" width={70} height={70} alt="profile image" />
                    </div>
                    <hr  className="text-gray-300/20 w-full"/>
                    <ul aria-labelledby="tabs" className="tabs">
                  {tabList.map((tab, i) => (
                <li
                  key={i}
                  onClick={() => dashboard.setCurrentTab(tab.name)}
                  className={`px-4 py-4 text-xl border-b cursor-pointer ${tab.name === dashboard.currentTab ? "bg-custom-blue text-white": "text-black/50"}`}
               role="button">
                  {tab.label}
                </li>
                
                 ))}
                    </ul>
                    
                 </div>
                </div>
                <div className="basis-4/5 md:mt-0 mt-4">
                <div className="bg-white rounded-md shadow-xl">
                    {tabList.map((tab, i) => {
                    if (tab.name === dashboard.currentTab) {
                        return <div key={i}>
                            { <h1 className="text-xl p-3">{tab.label}</h1>}
                            {tab.content}
                            </div>;
                    } else {
                        return null;
                    }
                    })}
                 </div>
                </div>
               </div>
              
              </main>
             <Footer/>
          </div>
          
          </>
        )
   
}
