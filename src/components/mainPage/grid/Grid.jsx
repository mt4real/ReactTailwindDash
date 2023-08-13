import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import SidebarSecond from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Footer from "../../utils/footer/Footer";
import Button from "../../utils/button/Button";
import CardImage1 from "../../../assets/images/unsplash-1.jpg";
import CardImage2 from "../../../assets/images/unsplash-2.jpg";
import CardImage3 from "../../../assets/images/unsplash-3.jpg";
import { Link } from "react-router-dom";



export default function Grids() {

   
     
  const dashboard=useContext(GlobalStateContext);
  return (
    <>
     <SidebarSecond/>
     <div className={`min-h-screen relative ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
               
      <NavHeaderSecond/>
      <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
        
        <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal pb-4">Grids</h4>
             </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="md:text-2xl text-xl text-black/50 py-10">Responsive mobile first flexbox grid system</h4>
              </div>
              <div className="card-body">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-1
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-6
                             </div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-6                            
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-4
                             </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-4
                             </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-4
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-8
                             </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-4
                             </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row">
                        
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-6
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        
                       
                    </div>
                    <div className="row">
                        
                        <div className="col-5 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-5
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-5 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-5
                             </div>
                            </div>
                        </div>
                        
                       
                    </div>
                    <div className="row">
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-6
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        
                       
                    </div>
                
              </div>
            </div> 
            
            {/* <div class="flex flex-wrap flex-row"> */}
            {/* <div class="flex-shrink max-w-full w-full">
                <div class="flex flex-wrap flex-row">
            <div class="flex-shrink max-w-full  w-full sm:w-1/2 lg:w-1/4 mb-6">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
                    <h3 class="text-base font-bold mb-2">i want to know you more than thi babbybbbbbbbb bbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbb , where are you leaving are you with your parent, if that so you are a good person</h3>
                    <h2 class="text-3xl font-bold mb-4">1,200</h2>
                    
                    <div class="flex flex-row justify-between w-full">
                      <div class="flex items-center" title="Target">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
                          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg> 1100
                      </div>
                      <div class="flex items-center text-green-500">
                        +5%
                      </div>
                    </div>

                    
                    <div class="absolute ltr:-right-16 rtl:-left-16 -top-16">
                      <div class="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
                    </div>
                    <div class="absolute ltr:-right-4 rtl:-left-4 -top-24">
                      <div class="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
                    <h3 class="text-base font-bold mb-2">Salesfffffffffffffffffffffffffffffffffffffffyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</h3>
                    <h2 class="text-3xl font-bold mb-4">1,200</h2>
                    
                    <div class="flex flex-row justify-between w-full">
                      <div class="flex items-center" title="Target">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
                          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg> 1100
                      </div>
                      <div class="flex items-center text-green-500">
                        +5%
                      </div>
                    </div>

                    
                    <div class="absolute ltr:-right-16 rtl:-left-16 -top-16">
                      <div class="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
                    </div>
                    <div class="absolute ltr:-right-4 rtl:-left-4 -top-24">
                      <div class="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
                    <h3 class="text-base font-bold mb-2">Sales</h3>
                    <h2 class="text-3xl font-bold mb-4">1,200</h2>
                    
                    <div class="flex flex-row justify-between w-full">
                      <div class="flex items-center" title="Target">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
                          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg> 1100
                      </div>
                      <div class="flex items-center text-green-500">
                        +5%
                      </div>
                    </div>

                    
                    <div class="absolute ltr:-right-16 rtl:-left-16 -top-16">
                      <div class="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
                    </div>
                    <div class="absolute ltr:-right-4 rtl:-left-4 -top-24">
                      <div class="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
                    <h3 class="text-base font-bold mb-2">Sales</h3>
                    <h2 class="text-3xl font-bold mb-4">1,200</h2>
                    
                    <div class="flex flex-row justify-between w-full">
                      <div class="flex items-center" title="Target">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 bi bi-calendar-check" viewBox="0 0 16 16">
                          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg> 1100
                      </div>
                      <div class="flex items-center text-green-500">
                        +5%
                      </div>
                    </div>

                    
                    <div class="absolute ltr:-right-16 rtl:-left-16 -top-16">
                      <div class="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
                    </div>
                    <div class="absolute ltr:-right-4 rtl:-left-4 -top-24">
                      <div class="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
                    </div>
                  </div>
                </div>
                </div>
                </div> */}
                {/* </div> */}
            {/* <div className="container"> */}
                
            {/* <div className="card">
              <div className="card-header">
                <h4 className="md:text-2xl text-xl text-black/50 py-10">Responsive mobile first flexbox grid system</h4>
              </div>
              <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-1
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-6
                             </div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-6sssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddddddddddddddddddddddddddddddddddddd
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-4
                             </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-4
                             </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-4
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-8
                             </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-4
                             </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row">
                        
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-6
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        
                       
                    </div>
                    <div className="row">
                        
                        <div className="col-5 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-5
                             </div>
                            </div>
                        </div>
                        <div className="col-2 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-2
                             </div>
                            </div>
                        </div>
                        <div className="col-5 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-5
                             </div>
                            </div>
                        </div>
                        
                       
                    </div>
                    <div className="row">
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-6
                             </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="card bg-custom-light border border-black/20 py-8">
                             <div className="card-body">
                                this is col-3
                             </div>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
              </div>
            </div> */}
        </main>
      <Footer/>
    </div>
    
    </>
  )
}
