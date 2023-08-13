import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import SidebarSecond from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import IconArrowDownUp from "../../../assets/icons/IconArrowDownUp";
import IconCartAlt from "../../../assets/icons/IconCartAlt";
import Footer from "../../utils/footer/Footer";


export default function TailwindDashboard() {
  const dashboard=useContext(GlobalStateContext);
  return (
    <>
     <SidebarSecond/>
     <div className={`min-h-screen relative ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
               
      <NavHeaderSecond/>
        <main className={`pt-20 content ${dashboard.hideSidebar?'w-full left-0 transition-all duration-500 ease-in-out':'calc-width left-64 transition-all duration-500 ease-in-out'}`}>
        <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
          <div className="flex flex-shrink-0">
          <h1  className="md:text-3xl text-2xl font-medium text-black/70 pl-1 pt-10 pb-5">Welcome <span className="text-custom-blue font-normal">Back </span>Afolabi</h1>
          </div>
        </div>
         <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal  mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row pt-1 pb-1 gap-x-2">
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
        </div>
        </div>                      
        </div>
        </div>
        <div className="basis-1/4  pb-2">
        <div className="bg-white  rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
        <div className="overview-boxes">
        <div className="box flex justify-between">
          <div className="right-side">
            <div className="box-topic text-sm font-semibold mb-2 -mt-3 transition-all duration-500">Total Order</div>
            <div className="number font-lg-big text-black/80 font-normal mt-3 transition-all duration-500">40,876</div>
            <div className="indicator flex justify-between mt-6">
              <IconArrowDownUp className="rounded-full text-sm text-custom-blue font-md-small  bg-indigo-100 transition-all duration-500"/>
              <span className="text-sm">Up from yesterday</span>
            </div>
          </div>
          <IconCartAlt className="font-lg-big text-lg rounded text-custom-blue  bg-indigo-100 transition-all duration-500"/>
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
