import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import SidebarSecond from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Footer from "../../utils/footer/Footer";
import Image1 from "../../../assets/images/avatar.jpg";
import Image2 from "../../../assets/images/avatar-2.jpg";
import Image3 from "../../../assets/images/avatar-3.jpg";
import Image4 from "../../../assets/images/avatar-4.jpg";
import Image5 from "../../../assets/images/avatar-5.jpg";
import Button from "../../utils/button/Button";
import IconHelpCircleOutline from "../../../assets/icons/IconHelpCircleOutline";




export default function Chat() {
  const dashboard=useContext(GlobalStateContext);
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
  return (
    <div className="wrapper">
     <SidebarSecond/>
     <div className={`min-h-screen relative ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
               
      <NavHeaderSecond/>
      <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
        <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 mb-4">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal">Chat Messages</h4>
             </div>
            </div>
            <div className="card mb-20 overflow-y-auto">
                <div className="flex flex-col md:flex-row lg:flex-row">
                    <div className="basis-1/5 border-r-2 pl-3">
                        <input type="text" name="search" id="search"  className=" p-2 my-8 mx-3 rounded border border-gray-300  focus:border-custom-blue/50 focus:ring-custom-blue/50 focus:outline-custom-blue/50  transition duration-500 ease-in-out" placeholder="Search"/>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Vanessa Tucker</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-green-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">online</span></span>
                        </div>
                        <div>
                            <Button className="bg-green-700/50 text-white  font-semibold rounded-md py-1 px-2 mr-3 mt-2">5</Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Vanessa Tucker</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-green-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">online</span></span>
                        </div>
                        <div>
                            <Button className="bg-green-700/50 text-white  font-semibold rounded-md py-1 px-2 mr-3 mt-2">5</Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Vanessa Tucker</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-green-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">online</span></span>
                        </div>
                        <div>
                            <Button className="bg-green-700/50 text-white  font-semibold rounded-md py-1 px-2 mr-3 mt-2">5</Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Vanessa Tucker</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-green-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">online</span></span>
                        </div>
                        <div>
                            <Button className="bg-green-700/50 text-white  font-semibold rounded-md py-1 px-2 mr-3 mt-2">5</Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Vanessa Tucker</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-green-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">online</span></span>
                        </div>
                        <div>
                            <Button className="bg-green-700/50 text-white  font-semibold rounded-md py-1 px-2 mr-3 mt-2">5</Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Vanessa Tucker</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-green-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">online</span></span>
                        </div>
                        <div>
                            <Button className="bg-green-700/50 text-white  font-semibold rounded-md py-1 px-2 mr-3 mt-2">5</Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Vanessa Tucker</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-green-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">online</span></span>
                        </div>
                        <div>
                            <Button className="bg-green-700/50 text-white  font-semibold rounded-md py-1 px-2 mr-3 mt-2">5</Button>
                        </div>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Mohammed Salah</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-red-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">offline</span></span>
                        </div>
                       
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Mohammed Salah</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-red-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">offline</span></span>
                        </div>
                       
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Mohammed Salah</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-red-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">offline</span></span>
                        </div>
                       
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Mohammed Salah</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-red-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">offline</span></span>
                        </div>
                       
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Mohammed Salah</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-red-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">offline</span></span>
                        </div>
                       
                    </div>
                    <div className="flex justify-between items-start mb-3">
                        <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3">
                          <h4 className="font-normal text-black/70">Mohammed Salah</h4>
                          <span className="flex"><IconHelpCircleOutline className="bg-red-600/60 rounded-full mt-1 mr-1"/><span className="text-black/60">offline</span></span>
                        </div>
                       
                    </div>
                    </div>
                    <div className="basis-4/5 mt-4">
                    <div className="flex flex-row justify-between items-start mb-3 border-b pl-4">
                        <img src={Image3} alt="chat image" className="rounded-full hidden md:block" width={50} height={50}/>
                        <div className="flex-grow pl-3 mt-3 hidden md:block">
                          <h4 className="font-bold text-black/90">Sharon Lessman</h4>
                          <span className="italic">typing...</span>
                        </div>
                        <div className="flex md:flex-row  gap-x-2 gap-y-3 mr-10  my-4 ">
                            <Button className="bg-custom-blue/70 text-white md:py-3 py-1 px-6 rounded-md">tele</Button>
                            <Button className="bg-teal-800/70 text-white md:py-3 py-1 px-6 rounded-md">tele</Button>
                            <Button className="bg-gray-400/20 border border-gray-300 md:py-3 py-1 px-6 hover:bg-gray-400/80 text-gray-300 font-bold  rounded-md">...</Button>
                        </div>
                       
                    </div>
                    <div className="flex flex-row gap-x-5 items-start mb-3 px-4 pb-4">
                      <div className="flex-grow">
                      <p className="text-justify text-lg py-3 px-6 text-black/50  bg-gray-300/50 rounded-md md:ml-72 ml-0">
                            <span className="text-xl font-semibold">You</span><br></br>
                            Cras pulvinar, sapien id vehicula aliquet, 
                            diam velit elementum orci.
                            </p>
                      </div>
                      <div>
                      <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                      <p className="pt-3 text-black/50 font-light">1:11 pm</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-x-5 items-start mb-3 px-4 pb-4">
                      <div>
                      <img src={Image3} alt="chat image" className="rounded-full" width={50} height={50}/>
                      <p className="pt-3 text-black/50 font-light text-sm">1:11 pm</p>
                      </div>
                      <div className="flex-grow">
                      <p className="text-justify text-lg py-3 px-6 text-black/50  bg-gray-300/30 rounded-md md:mr-72 mr-0">
                            <span className="text-xl font-semibold">Sharon Lessman</span><br></br>
                            Cras pulvinar, sapien id vehicula aliquet, 
                            diam velit elementum orci.
                            </p>
                      </div>
                    </div>
                    <div className="w-full relative md:px-10 px-2 border-t mt-14">
                    <form action="" className="my-5">
                        <input type="text" name="search" id="search" className="w-full rounded-sm p-[.50rem]  border border-gray-300  focus:border-custom-blue/50 focus:ring-blue/50 focus:outline-blue/50 transition duration-500 ease-in" placeholder="Type your message here"/>
                        <span><Button  type="submit" className=" absolute md:right-10 right-2 text-white bg-custom-blue border border-custom-blue/60 hover:bg-custom-blue py-[.55rem] px-6"><span className="drop-shadow-md">Send</span></Button></span>
                     </form>
                    </div>
                    </div>
                </div>
            </div>
                
        </main>
      <Footer/>
    </div>
    
    </div>
  )
}
