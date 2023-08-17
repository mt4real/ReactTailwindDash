import React,{ useContext, useState} from "react";
import Sidebar from '../../utils/dashboardComponents/Sidebar';
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Footer from '../../utils/footer/Footer';
import { GlobalStateContext } from "../../../GlobalStateContext";


export default function BlankPage() {
    const dashboard=useContext(GlobalStateContext);
    return (
        <>
         <Sidebar/>
         <div className={`min-h-screen relative ${
                  dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64  transition-all duration-500'}`}>
                   
          <NavHeaderSecond/>
          <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 ">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal">Empty Page</h4>
             </div>
            </div>
            <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 mb-72">
             <div className="card">
              <div className="card-header">
              <h4 className="text-xl">Blank card</h4>
              </div>
               <div className="card-body">
                    
             </div>
             </div>
            </div>
            </main>
          <Footer/>
        </div>
        
        </>
      )
}
