import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Sidebar from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Footer from "../../utils/footer/Footer";
import Button from "../../utils/button/Button";



export default function UIButton() {

    
  const dashboard=useContext(GlobalStateContext);
  return (
    <>
     <Sidebar/>
     <div className={`min-h-screen relative ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
               
      <NavHeaderSecond/>
      <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
        
        <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal pb-4">Buttons</h4>
             </div>
            </div>
          <div className="flex flex-col md:flex-row lg:flex-row pb-5 gap-x-4">
            <div className="basis-1/2">
              <div className="card">
                <div className="card-header">
                    <h4>Normal Buttons</h4>
                    <h5 className="text-base">Defaults Buttons style</h5>
                </div>
                <div className="card-body">
                    <div className=" flex flex-row flex-wrap gap-x-2">
                        <button className="btn btn-primary">Primary</button>
                        <button className="btn btn-secondary">Secondary</button>
                        <button className="btn btn-info">Info</button>
                        <button className="btn btn-danger">Danger</button>
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-success">Success</button>
                      
                    </div>
                    <div className="flex flex-row  justify-center items-center py-4 gap-x-2">
                    <button className="btn btn-teal">Teal</button>
                        <button className="btn btn-emerald">Emerald</button>
                    </div>
                    <div className=" flex flex-row flex-wrap gap-x-2 pt-6">
                        <button className="btn btn-primary" disabled>Primary</button>
                        <button className="btn btn-secondary" disabled>Secondary</button>
                        <button className="btn btn-info" disabled>Info</button>
                        <button className="btn btn-danger" disabled>Danger</button>
                        <button className="btn btn-warning" disabled>Warning</button>
                        <button className="btn btn-success" disabled>Success</button>
                       
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 gap-x-2">
                    <button className="btn btn-teal" disabled>Teal</button>
                        <button className="btn btn-emerald" disabled>Emerald</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="card">
                <div className="card-header">
                    <h4>Rounded Buttons</h4>
                    <h5 className="text-base">Rounded Buttons style</h5>
                </div>
                <div className="card-body">
                    <div className=" flex flex-row flex-wrap  gap-x-2">
                        <button className="btn btn-rounded btn-primary">Primary</button>
                        <button className="btn btn-rounded btn-secondary">Secondary</button>
                        <button className="btn btn-rounded btn-info">Info</button>
                        <button className="btn btn-rounded btn-danger">Danger</button>
                        <button className="btn btn-rounded btn-warning">Warning</button>
                        <button className="btn btn-rounded btn-success">Success</button>
                      
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 gap-x-2">
                    <button className="btn btn-rounded btn-teal">Teal</button>
                        <button className="btn btn-rounded btn-emerald">Emerald</button>
                    </div>
                    <div className=" flex flex-row flex-wrap gap-x-2 pt-6">
                        <button className="btn btn-rounded btn-primary" disabled>Primary</button>
                        <button className="btn btn-rounded btn-secondary" disabled>Secondary</button>
                        <button className="btn btn-rounded btn-info" disabled>Info</button>
                        <button className="btn btn-rounded btn-danger" disabled>Danger</button>
                        <button className="btn btn-rounded btn-warning" disabled>Warning</button>
                        <button className="btn btn-rounded btn-success" disabled>Success</button>
                       
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 gap-x-2">
                    <button className="btn btn-rounded btn-teal" disabled>Teal</button>
                        <button className="btn btn-rounded btn-emerald" disabled>Emerald</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-x-4">
            <div className="basis-1/2">
              <div className="card">
                <div className="card-header">
                    <h4>Outline Buttons</h4>
                    <h5 className="text-base">Outline Buttons style</h5>
                </div>
                <div className="card-body">
                    <div className=" flex flex-row flex-wrap gap-x-2">
                    <button className="btn btn-outline-primary">Primary</button>
                    <button className="btn btn-outline-secondary">Secondary</button>
                    <button className="btn btn-outline-info">Info</button>
                    <button className="btn btn-outline-danger">Danger</button>
                    <button className="btn btn-outline-warning">Warning</button>
                    <button className="btn btn-outline-success">Success</button>
                      
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 gap-x-2">
                    <button className="btn btn-outline-teal">Teal</button>
                        <button className="btn btn-outline-emerald">Emerald</button>
                        <button className="btn btn-outline-black">Black</button>
                    </div>
                    <div className=" flex flex-row flex-wrap gap-x-2 pt-6">
                    <button className="btn btn-outline-primary" disabled>Primary</button>
                    <button className="btn btn-outline-secondary" disabled>Secondary</button>
                    <button className="btn btn-outline-info" disabled>Info</button>
                    <button className="btn btn-outline-danger" disabled>Danger</button>
                    <button className="btn btn-outline-warning" disabled>Warning</button>
                    <button className="btn btn-outline-success" disabled>Success</button>
                      
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 gap-x-2">
                    <button className="btn btn-outline-teal" disabled>Teal</button>
                        <button className="btn btn-outline-emerald" disabled>Emerald</button>
                        <button className="btn btn-outline-black" disabled>Black</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="card">
                <div className="card-header">
                    <h4>Flat Buttons</h4>
                    <h5 className="text-base">Flat Buttons style</h5>
                </div>
                <div className="card-body">
                    <div className=" flex flex-row flex-wrap gap-x-2">
                        <button className="btn btn-flat btn-primary">Primary</button>
                        <button className="btn btn-flat btn-secondary">Secondary</button>
                        <button className="btn btn-flat btn-info">Info</button>
                        <button className="btn btn-flat btn-danger">Danger</button>
                        <button className="btn btn-flat btn-warning">Warning</button>
                        <button className="btn btn-flat btn-success">Success</button>
                      
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 gap-x-2">
                    <button className="btn btn-flat btn-teal">Teal</button>
                        <button className="btn btn-flat btn-emerald">Emerald</button>
                    </div>
                    <div className=" flex flex-row flex-wrap gap-x-2 pt-6">
                        <button className="btn btn-flat btn-primary" disabled>Primary</button>
                        <button className="btn btn-flat btn-secondary" disabled>Secondary</button>
                        <button className="btn btn-flat btn-info" disabled>Info</button>
                        <button className="btn btn-flat btn-danger" disabled>Danger</button>
                        <button className="btn btn-flat btn-warning" disabled>Warning</button>
                        <button className="btn btn-flat btn-success" disabled>Success</button>
                       
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 gap-x-2">
                    <button className="btn btn-rounded btn-teal" disabled>Teal</button>
                        <button className="btn btn-rounded btn-emerald" disabled>Emerald</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-x-4 pt-6">
            <div className="basis-1/2">
              <div className="card">
                <div className="card-header">
                    <h4>Buttons Group</h4>
                    <h5 className="text-base">Group Buttons style</h5>
                </div>
                <div className="card-body">
                    <div className="btn-flat-group pb-3">
                    <button className="btn  btn-secondary">Secondary</button>
                    <button className="btn  btn-secondary">Secondary</button>
                    <button className="btn  btn-secondary">Secondary</button>
                    <button className="btn  btn-secondary">Secondary</button>
                    </div>
                    <div className="btn-flat-group pb-3">
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-primary">Primary</button>
                    </div>
                    <div className="btn-flat-group pb-3">
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-info">Info</button>
                    </div>
                    <div className="btn-flat-group pb-3">
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-warning">Warning</button>
                    </div>
                    <div className="btn-flat-group pb-3">
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-success">Success</button>
                    </div>
                   <div className="btn-flat-group pb-3">
                   <button className="btn btn-success">Success</button>
                   <button className="btn btn-emerald">Emerald</button>
                   <button className="btn btn-danger">Danger</button>
                   <button className="btn btn-primary">Primary</button>
                   </div>
                   
                  
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="card">
                <div className="card-header">
                    <h4>Vertical group buttons</h4>
                    <h5 className="text-base">Vertical group buttons style</h5>
                </div>
                <div className="card-body">
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
               <div className="btn-vertical-flat-group pb-3">
                    <button className="btn  btn-secondary">Secondary</button>
                    <button className="btn  btn-secondary">Secondary</button>
                    <button className="btn  btn-secondary">Secondary</button>
                    <button className="btn  btn-secondary">Secondary</button>
                    </div>
                    <div className="btn-vertical-flat-group pb-3">
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-primary">Primary</button>
                    </div>
                    <div className="btn-vertical-flat-group pb-3">
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-info">Info</button>
                    </div>
                    <div className="btn-vertical-flat-group pb-3">
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-warning">Warning</button>
                    </div>
                    <div className="btn-vertical-flat-group pb-3">
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-success">Success</button>
                    </div>
                   <div className="btn-vertical-flat-group pb-3">
                   <button className="btn btn-success">Success</button>
                   <button className="btn btn-emerald">Emerald</button>
                   <button className="btn btn-primary">Primary</button>
                   </div>
                   <div className="btn-vertical-flat-group pb-3">
                   <button className="btn btn-danger">Danger</button>
                   <button className="btn btn-danger">Danger</button>
                   <button className="btn btn-danger">Danger</button>
                   </div>
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
