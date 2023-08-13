import {React} from "react";

import React from 'react'

export default function MessageNotificationLists() {

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
              <h4 className="text-2xl md:text-3xl text-black font-normal pb-4">Modals</h4>
             </div>
            </div>
           
                
        </main>
      <Footer/>
    </div>
    
    </>
  )
}
