import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Sidebar from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Footer from "../../utils/footer/Footer";
import Button from "../../utils/button/Button";
import IconChevronDown from "../../../assets/icons/IconChevronDown";
import IconChevronUp from "../../../assets/icons/IconChevronUp";
import { Link } from "react-router-dom";




export default function UIAccordion() {

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
              <h4 className="text-2xl md:text-3xl text-black font-normal pb-4">Accordions</h4>
             </div>
            </div>
            <div className="row">
             <div className="col-6">
            <div className="accordion-default">
            <div className="accordion"onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="defaultAccordion"?undefined:"defaultAccordion")}>
             <Link role="button" to="#">
             <span >{dashboard.isOpen==="defaultAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
             </div>
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="defaultAccordion" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
            </div>
             </div>
             <div className="col-6">
             <div className="accordion-primary">
             
             <div className="accordion"onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="primaryAccordion"?undefined:"primaryAccordion")}>

               <Link role="button" to="#">
             <span >{dashboard.isOpen==="primaryAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
            </div>
             
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="primaryAccordion" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
             </div>
             </div>
            </div>
            <div className="row">
            
             <div className="col-6">
            <div className=" accordion-danger">
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="dangerAccordion"?undefined:"dangerAccordion")}>

               <Link role="button" to="#">
             <span >{dashboard.isOpen==="dangerAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
            </div>
            
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="dangerAccordion" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
            </div>
             </div>
             <div className="col-6">
             <div className="accordion-light">
             
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="lightAccordion"?undefined:"lightAccordion")}>

               <Link role="button" to="#">
             <span >{dashboard.isOpen==="lightAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
            </div>
            
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="lightAccordion" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
             </div>
             </div>
            </div>
            <div className="row">
            
             <div className="col-6">
            <div className="accordion-secondary">
            
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="secondaryAccordion"?undefined:"secondaryAccordion")}>

               <Link role="button" to="#">
             <span >{dashboard.isOpen==="secondaryAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
              </div>
             
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="secondaryAccordion" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
            </div>
             </div>
             <div className="col-6">
            <div className="accordion-warning">
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="warningAccordion"?undefined:"warningAccordion")}>

               <Link role="button" to="#">
             <span >{dashboard.isOpen==="warningAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
            </div>
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="warningAccordion" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
            </div>
             </div>
            </div>
            <div className="row">
            
            <div className="col-6">
            <div className="accordion-black">
            
            <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="blackAccordion"?undefined:"blackAccordion")}>

              <Link role="button" to="#">
            <span >{dashboard.isOpen==="blackAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
            </Link>
             </div>
            
             <div className="card">
               <div className="card-body">
                {
                 dashboard.isOpen==="blackAccordion" && <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                     sint occaecat cupidatat non proident,
                   sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                }
                
             </div>
            </div>
            </div>
            </div>
            <div className="col-6">
            <div className="accordion-teal">
            <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="tealAccordion"?undefined:"tealAccordion")}>

              <Link role="button" to="#">
            <span >{dashboard.isOpen==="tealAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
            </Link>
           </div>
            
             <div className="card accordion-bg-teal">
               <div className="card-body">
                {
                 dashboard.isOpen==="tealAccordion" && <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                     sint occaecat cupidatat non proident,
                   sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                }
                
             </div>
            </div>
            </div>
           </div>
           </div>
           <div className="row">
            
            <div className="col-6">
            <div className="accordion-emerald">
            <div className="accordion"onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="emeraldAccordion"?undefined:"emeraldAccordion")}>

              <Link role="button" to="#">
            <span >{dashboard.isOpen==="emeraldAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
            </Link>
             </div>
          
             <div className="card">
               <div className="card-body">
                {
                 dashboard.isOpen==="emeraldAccordion" && <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                     sint occaecat cupidatat non proident,
                   sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                }
                
             </div>
             </div>
            </div>
            </div>
            <div className="col-6">
            <div className="accordion-success">
            <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="successAccordion"?undefined:"successAccordion")}>

              <Link role="button" to="#">
            <span >{dashboard.isOpen==="successAccordion"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
            </Link>
           </div>
           
             <div className="card">
               <div className="card-body">
                {
                 dashboard.isOpen==="successAccordion" && <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                     sint occaecat cupidatat non proident,
                   sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                }
                 </div>
             </div>
            </div>
            </div>
           </div>
           <div className="row">
             <div className="col-6">
             <div className="accordion-default">
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="defaultAccordion1"?undefined:"defaultAccordion1")}>
             <Link role="button" to="#">
             <span >{dashboard.isOpen==="defaultAccordion1"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
             </div>
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="defaultAccordion1" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
            
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="defaultAccordion2"?undefined:"defaultAccordion2")}>
             <Link role="button" to="#">
             <span >{dashboard.isOpen==="defaultAccordion2"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
             </div>
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="defaultAccordion2" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="defaultAccordion3"?undefined:"defaultAccordion3")}>
             <Link role="button" to="#">
             <span >{dashboard.isOpen==="defaultAccordion3"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
             </div>
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="defaultAccordion3" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
             </div>
             </div>
             <div className="col-6">
             <div className="accordion-success">
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="successAccordion1"?undefined:"successAccordion1")}>

               <Link role="button" to="#">
             <span >{dashboard.isOpen==="successAccordion1"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
            </div>
             
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="successAccordion1" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
             
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="successAccordion2"?undefined:"successAccordion2")}>

               <Link role="button" to="#">
             <span >{dashboard.isOpen==="successAccordion2"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
            </div>
             
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="successAccordion2" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
              </div>
             </div>
             
             <div className="accordion" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="successAccordion3"?undefined:"successAccordion3")}>

               <Link role="button" to="#">
             <span >{dashboard.isOpen==="successAccordion3"?<IconChevronDown className="transition-all duration-500 ease-in-out transform rotate-180"/>:<IconChevronUp className="transition-all duration-500 ease-in-out transform rotate-180"/>}</span>
             </Link>
            </div>
             
              <div className="card">
                <div className="card-body">
                 {
                  dashboard.isOpen==="successAccordion3" && <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                 </p>
                 }
                 
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
