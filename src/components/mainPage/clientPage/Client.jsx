import React,{ useContext, useState} from "react";
import SidebarSecond from '../../utils/dashboardComponents/Sidebar';
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Footer from '../../utils/footer/Footer';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Button from "../../utils/button/Button";
import Image1 from "../../../assets/images/avatar.jpg";
import Image2 from "../../../assets/images/avatar-2.jpg";
import Image3 from "../../../assets/images/avatar-3.jpg";
import Image4 from "../../../assets/images/avatar-4.jpg";
import Image5 from "../../../assets/images/avatar-5.jpg";



export default function Client() {


    const dashboard=useContext(GlobalStateContext);
    var count=0;

    const tableData=[
        {
            image:Image2,
            name:"Michael",
            company:"Flutterwave",
            email:"michael@gmail.com",
            status:Button
        },
        {
            image:Image4,
            name:"Saheed",
            company:"Paystack",
            email:"saheed@gmail.com",
            status: Button
        },
        {
            image:Image3,
            name:"Wole",
            company:"Mervii",
            email:"wole@gmail.com",
            status: Button
        },
        {
            image:Image3,
            name:"Sade",
            company:"Interswitch",
            email:"sade@gmail.com",
            status: Button
        },
        {
            image:Image4,
            name:"Soji",
            company:"Paystack",
            email:"soji@gmail.com",
            status: Button
        },
        {
            image:Image2,
            name:"Subair",
            company:"Paystack",
            email:"subair@gmail.com",
            status: Button
        },
        {
            image:Image3,
            name:"Kolawole",
            company:"Interswitch",
            email:"kolawole@gmail.com",
            status: Button
        },
        {
            image:Image3,
            name:"Dele",
            company:"Flutterwave",
            email:"dele@gmail.com",
            status: Button
        },
        {
            image:Image1,
            name:"Salim",
            company:"Mervii",
            email:"mervii@gmail.com",
            status: Button
        },
        {
            image:Image2,
            name:"Husein",
            company:"Flutterwave",
            email:"husein@gmail.com",
            status: Button
        },
        {
            image:Image4,
            name:"Bashir",
            company:"PayPoint",
            email:"bashir@gmail.com",
            status: Button
        },
        {
            image:Image3,
            name:"Mohammed",
            company:"KudaBank",
            email:"mohammed@gmail.com",
            status: Button
        },
        {
            image:Image3,
            name:"Saleem",
            company:"Paystack",
            email:"saleem@gmail.com",
            status: Button
        }
    ];

    
    return (
        <>
         <SidebarSecond/>
         <div className={`min-h-screen relative ${
                  dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64  transition-all duration-500'}`}>
                   
          <NavHeaderSecond/>
          <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal">Client listing</h4>
             </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-x-6 pt-6">
                <div className="basis-[70%]">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Company Clients</h4>
              </div>
               <div className="card-body">
                   <div className="table-responsive">
                      <table  style={{display:"table"}} className="table table-striped">
                      <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        {
                            tableData.map((tData,i)=>(
                                
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{tData.name}</td>
                                    <td>{<img src={tData.image} className="rounded-full" alt={`Client's ${tData.name}`} width={32} height={32}/>}</td>
                                    <td>{tData.company}</td>
                                    <td>{tData.email}</td>
                                    <td><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></td>
                                    
                                    
                                </tr>
                                ))} 
                                  
                        
                      </tbody>
                    </table>
                   </div>
             </div>
             </div>
                </div>
                <div className="basis-[30%] md:mt-0 mt-4">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Basirat</h4>
              </div>
               <div className="card-body">
                <div className="flex justify-center items-center ">
                    <img src={Image5} alt="Client's image"  className="rounded-full" width={90} height={90}/>
                </div>
                    <h1 className="text-black/70 font-bold pb-2">About client's</h1>
                    <p className="text-justify pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex flex-row border-b  pb-4">
                        <div className="basis-1/2">
                        <p className="text-black/80 font-bold text-2xl"> Name:</p>
                        </div>
                    <div className="basis-1/2">
                   <span className=" text-custom-gray font-normal text-xl">Basirat</span>
                    </div>
                    </div>
                   <div className="flex flex-row border-b pb-4">
                   <div className="basis-1/2">
                   <span className="text-black/80  font-bold text-2xl">Company:</span>
                    </div>
                    <div className="basis-1/2">
                        <p className=" text-custom-gray font-normal text-xl">Flutterwave</p>
                        
                   </div>
                    </div>
                    <div className="flex flex-row border-b pb-4">
                   <div className="basis-1/2">
                   <span className="text-black/80  font-bold text-2xl">Email:</span>
                    </div>
                    <div className="basis-1/2">
                        <p className=" text-custom-gray font-normal text-xl">basirat@gmail.com</p>
                   </div>
                    </div>
                    <div className="flex flex-row border-b pb-4">
                   <div className="basis-1/2">
                   <span className="text-black/80  font-bold text-2xl">Mobile:</span>
                    </div>
                    <div className="basis-1/2">
                        <p className=" text-custom-gray font-normal text-xl">07061843070</p> 
                   </div>
                    </div>
                    <div className="flex flex-row border-b pb-4">
                   <div className="basis-1/2">
                   <span className="text-black/80  font-bold text-2xl">Status:</span>
                    </div>
                    <div className="basis-1/2">
                        <p className=" text-custom-gray font-normal text-xl"><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></p>
                        
                   </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pb-3">
                    Send message to your client
                </div>
              <form action="">
              <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="name">Name</label>
           <input type="text" name="name" id="name" className="w-full p-3 mb-4 rounded border border-gray-300 dark:border-gray-300 focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Name"/>
          </div>
          <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="subject">Subject</label>
           <input type="text" name="subject" id="subject" className="w-full p-3 mb-4 rounded border border-gray-300 dark:border-gray-300 focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Subject"/>
          </div>
              <div className="w-full pb-1  px-2">
             <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">Email</label>
           <input type="email" name="email" id="email" className="w-full p-3 mb-4 rounded border border-gray-300 dark:border-gray-300 focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Email"/>
          </div>
          <div className="w-full pb-1 px-2">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="message">Message</label>
            <textarea cols="" rows="" id="message" name="message" className="w-full p-3 mb-4 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="message" ></textarea>
            </div>
          <div className="flex justify-center w-full pb-4">
            <button type="submit" className="bg-custom-blue border border-custom-blue rounded-md py-2 px-4 hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg md:w-1/4 w-full">Register</button>
          </div>
              </form>
             </div>
            </div>
            </div>
            </main>
          <Footer/>
        </div>
        
        </>
      )
}
