import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Sidebar from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Footer from "../../utils/footer/Footer";
import Image1 from "../../../assets/images/avatar.jpg";
import Image2 from "../../../assets/images/avatar-2.jpg";
import Image3 from "../../../assets/images/avatar-3.jpg";
import Image4 from "../../../assets/images/avatar-4.jpg";
import Image5 from "../../../assets/images/avatar-5.jpg";
import Button from "../../utils/button/Button";



export default function MessageNotificationLists() {

    const notificationMessages=[
        {
            img:Image1,
            personalName:"Sade Adu",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image2,
            personalName:"Sade Wole",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image3,
            personalName:"Sade Adu",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image4,
            personalName:"Sade Sola",
            friendName:"Tola Wole",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image3,
            personalName:"Subair Busari",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image1,
            personalName:"Sade Kola",
            friendName:"Mohammed Busari",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image1,
            personalName:"Sade Adu",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image2,
            personalName:"Taiwo Busari",
            friendName:"Tola Segun",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image3,
            personalName:"Sade Adu",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image4,
            personalName:"Sade Adu",
            friendName:"Tola Wole",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image3,
            personalName:"Subair Kolawole",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image5,
            personalName:"Sade Kola",
            friendName:"Mohammed Busari",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image3,
            personalName:"Subair Busari",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image3,
            personalName:"Sade Kola",
            friendName:"Mohammed Busari",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image2,
            personalName:"Sade Adu",
            friendName:"Tola Thompson",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
        {
            img:Image2,
            personalName:"Taiwo Busari",
            friendName:"Tola Segun",
            date:"Today 8:51 pm",
            time:"8min ago"
        },
    ]
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
              <h4 className="text-2xl md:text-3xl text-black font-normal pb-4">Notifications lists</h4>
             </div>
            </div>
           <div className="card h-full mb-20">
            <div className="card-header">
                <h1 className="text-xl">Notifications</h1>
            </div>
            <div className="card-body mb-5">
                {
                    notificationMessages.map((notifyMsg, i)=>(
                  <div className="flex justify-between items-start border-b py-5 text-sm md:text-base" key={i}>
                    <img src={notifyMsg.img} alt="admin notification image" width={60} height={60} className="rounded-full"/>
                            <div className="flex-grow pl-2">
                                <h4><span className="text-black/70 font-black">{notifyMsg.personalName}</span> started following <span className="text-black/70 font-black">{notifyMsg.friendName}</span></h4>
                            <p>{notifyMsg.date}</p>
                        </div>
                        <div>
                            <span>{notifyMsg.time}</span>
                        </div>
                  </div> 
                    ))
                }
                  
                  
                  
            </div>
            <div className=" flex justify-center items-center">
                <Button type="submit" className="bg-custom-blue hover:bg-custom-blue/90 w-full md:w-1/3 px-6 py-4 text-white shadow-lg  mb-10 text-lg font-normal md:mx-0 mx-6">Load more</Button>
            </div>
           </div>
                
        </main>
      <Footer/>
    </div>
    
    </>
  )
}
