import React,{ useContext, useState} from "react";
import Sidebar from '../../utils/dashboardComponents/Sidebar';
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Footer from '../../utils/footer/Footer';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Button from "../../utils/button/Button";
import Image1 from "../../../assets/images/avatar.jpg";
import Image2 from "../../../assets/images/avatar-2.jpg";
import Image3 from "../../../assets/images/avatar-3.jpg";
import Image4 from "../../../assets/images/avatar-4.jpg";
import Image5 from "../../../assets/images/avatar-5.jpg";



export default function Tables() {


    const dashboard=useContext(GlobalStateContext);

    const tableData=[
        {
            image:Image2,
            name:"Michael",
            company:"Flutterwave",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status:Button
        },
        {
            image:Image4,
            name:"Saheed",
            company:"Paystack",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image3,
            name:"Wole",
            company:"Mervii",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image3,
            name:"Sade",
            company:"Interswitch",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image4,
            name:"Soji",
            company:"Paystack",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image2,
            name:"Subair",
            company:"Paystack",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image3,
            name:"Kolawole",
            company:"Interswitch",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image3,
            name:"Dele",
            company:"Flutterwave",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image1,
            name:"Salim",
            company:"Mervii",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image2,
            name:"Husein",
            company:"Flutterwave",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image4,
            name:"Bashir",
            company:"PayPoint",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        },
        {
            image:Image3,
            name:"Mohammed",
            company:"KudaBank",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan",
           phoneno:"08061843049",
            status: Button
        },
        {
            image:Image3,
            name:"Saleem",
            company:"Paystack",
             email:"mohammed@gmail.com",
            address:"road, d house 3 oluwatofarati zone, ibadan road, d house 3 oluwatofarati zone, ibadan ibadan road, d house 3 oluwatofarati zone, ibadan",
            phoneno:"08061843049",
            status: Button
        }
    ];

    
    return (
        <>
         <Sidebar/>
         <div className={`min-h-screen relative  ${
                  dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
                   
          <NavHeaderSecond/>
          <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-xl md:text-3xl text-black font-normal">Table Responsive with striped</h4>
             </div>
            </div>
            <div className="flex flex-col overflow-x-auto pt-6">
                <div className="basis-full">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Company Clients</h4>
              </div>
               <div className="card-body">
                   <div className="table-responsive">
                      <table  style={{display:"table"}} className="table table-striped">
                      <thead>
                            <tr>
                             <th scope="col">#</th>
                             <th scope="col">Name</th>
                             <th scope="col">Image</th>
                             <th scope="col">Company</th>
                             <th scope="col">Email</th>
                             <th scope="col">Address</th>
                             <th scope="col">phone No</th>
                             <th scope="col">Status</th>
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
                                    <td>{tData.address}</td>
                                    <td>{tData.phoneno}</td>
                                    <td><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></td>
                                    
                                    
                                </tr>
                                ))} 
                                  
                        
                      </tbody>
                    </table>
                   </div>
             </div>
             </div>
                </div>
               
            </div>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-xl md:text-3xl text-black font-normal">Table Responsive with Bordered</h4>
             </div>
            </div>
            <div className="flex flex-col overflow-x-auto pt-6">
                <div className="basis-full">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Company Clients</h4>
              </div>
               <div className="card-body">
                   <div className="table-responsive">
                      <table  style={{display:"table"}} className="table table-bordered">
                      <thead>
                            <tr>
                             <th scope="col">#</th>
                             <th scope="col">Name</th>
                             <th scope="col">Image</th>
                             <th scope="col">Company</th>
                             <th scope="col">Email</th>
                             <th scope="col">Address</th>
                             <th scope="col">phone No</th>
                             <th scope="col">Status</th>
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
                                    <td>{tData.address}</td>
                                    <td>{tData.phoneno}</td>
                                    <td><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></td>
                                    
                                    
                                </tr>
                                ))} 
                                  
                        
                      </tbody>
                    </table>
                   </div>
             </div>
             </div>
                </div>
               
            </div>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-xl md:text-3xl text-black font-normal">Table Responsive with Borderless</h4>
             </div>
            </div>
            <div className="flex flex-col overflow-x-auto pt-6">
                <div className="basis-full">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Company Clients</h4>
              </div>
               <div className="card-body">
                   <div className="table-responsive">
                      <table  style={{display:"table"}} className="table table-borderless">
                      <thead>
                            <tr>
                             <th scope="col">#</th>
                             <th scope="col">Name</th>
                             <th scope="col">Image</th>
                             <th scope="col">Company</th>
                             <th scope="col">Email</th>
                             <th scope="col">Address</th>
                             <th scope="col">phone No</th>
                             <th scope="col">Status</th>
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
                                    <td>{tData.address}</td>
                                    <td>{tData.phoneno}</td>
                                    <td><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></td>
                                    
                                    
                                </tr>
                                ))} 
                                  
                        
                      </tbody>
                    </table>
                   </div>
             </div>
             </div>
                </div>
               
            </div>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-xl md:text-3xl text-black font-normal">Table Hover with Responsive</h4>
             </div>
            </div>
            <div className="flex flex-col overflow-x-auto pt-6">
                <div className="basis-full">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Company Clients</h4>
              </div>
               <div className="card-body">
                   <div className="table-responsive">
                      <table  style={{display:"table"}} className="table table-hover">
                      <thead>
                            <tr>
                             <th scope="col">#</th>
                             <th scope="col">Name</th>
                             <th scope="col">Image</th>
                             <th scope="col">Company</th>
                             <th scope="col">Email</th>
                             <th scope="col">Address</th>
                             <th scope="col">phone No</th>
                             <th scope="col">Status</th>
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
                                    <td>{tData.address}</td>
                                    <td>{tData.phoneno}</td>
                                    <td><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></td>
                                    
                                    
                                </tr>
                                ))} 
                                  
                        
                      </tbody>
                    </table>
                   </div>
             </div>
             </div>
                </div>
               
            </div>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-xl md:text-3xl text-black font-normal">Table Responsive with Table line row </h4>
             </div>
            </div>
            <div className="flex flex-col overflow-x-auto pt-6">
                <div className="basis-full">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Company Clients</h4>
              </div>
               <div className="card-body">
                   <div className="table-responsive">
                      <table  style={{display:"table"}} className="table table-line">
                      <thead>
                            <tr>
                             <th scope="col">#</th>
                             <th scope="col">Name</th>
                             <th scope="col">Image</th>
                             <th scope="col">Company</th>
                             <th scope="col">Email</th>
                             <th scope="col">Address</th>
                             <th scope="col">phone No</th>
                             <th scope="col">Status</th>
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
                                    <td>{tData.address}</td>
                                    <td>{tData.phoneno}</td>
                                    <td><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></td>
                                    
                                    
                                </tr>
                                ))} 
                                  
                        
                      </tbody>
                    </table>
                   </div>
             </div>
             </div>
                </div>
               
            </div>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-xl md:text-3xl text-black font-normal">Table Responsive with Table line row and striped </h4>
             </div>
            </div>
            <div className="flex flex-col overflow-x-auto pt-6">
                <div className="basis-full">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Company Clients</h4>
              </div>
               <div className="card-body">
                   <div className="table-responsive">
                      <table  style={{display:"table"}} className="table table-line table-striped">
                      <thead>
                            <tr>
                             <th scope="col">#</th>
                             <th scope="col">Name</th>
                             <th scope="col">Image</th>
                             <th scope="col">Company</th>
                             <th scope="col">Email</th>
                             <th scope="col">Address</th>
                             <th scope="col">phone No</th>
                             <th scope="col">Status</th>
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
                                    <td>{tData.address}</td>
                                    <td>{tData.phoneno}</td>
                                    <td><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></td>
                                    
                                    
                                </tr>
                                ))} 
                                  
                        
                      </tbody>
                    </table>
                   </div>
             </div>
             </div>
                </div>
               
            </div>

            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-xl md:text-3xl text-black font-normal">Table Responsive with table black and bordered</h4>
             </div>
            </div>
            <div className="flex flex-col overflow-x-auto pt-6">
                <div className="basis-full">
                <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Company Clients</h4>
              </div>
               <div className="card-body">
                   <div className="table-responsive">
                      <table  style={{display:"table"}} className="table table-bordered table-black">
                      <thead>
                            <tr>
                             <th scope="col">#</th>
                             <th scope="col">Name</th>
                             <th scope="col">Image</th>
                             <th scope="col">Company</th>
                             <th scope="col">Email</th>
                             <th scope="col">Address</th>
                             <th scope="col">phone No</th>
                             <th scope="col">Status</th>
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
                                    <td>{tData.address}</td>
                                    <td>{tData.phoneno}</td>
                                    <td><Button className="bg-green-700/80 text-white rounded-md font-semibold px-1 py-1 text-sm">Active</Button></td>
                                    
                                    
                                </tr>
                                ))} 
                                  
                        
                      </tbody>
                    </table>
                   </div>
             </div>
             </div>
                </div>
               
            </div>
            </main>
          <Footer/>
        </div>
        
        </>
      )
}
