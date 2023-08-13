import React, {useContext, useState} from 'react';
import IconMenu from '../../../assets/icons/IconMenu';
import { Link } from 'react-router-dom';
import MyImage from "../../../assets/images/my_pic.jpg";
import { GlobalStateContext } from '../../../GlobalStateContext';
import Dropdown from '../menu/Dropdown';
import MegaMenu from '../menu/MegaMenu';
import IconChevronUp from '../../../assets/icons/IconChevronUp';
import IconSettingsOutline from '../../../assets/icons/IconSettingsOutline';
import IconPrivacyGuard from '../../../assets/icons/IconPrivacyGuard';
import IconHelpCircleOutline from '../../../assets/icons/IconHelpCircleOutline';
import IconTranslate from '../../../assets/icons/IconTranslate';
import IconLogOut from '../../../assets/icons/IconLogOut';
import IconBell from '../../../assets/icons/IconBell';
import IconEnvelope from '../../../assets/icons/IconEnvelope';
import IconDarkMode from '../../../assets/icons/IconDarkMode';
import DropdownLarge from '../menu/DropdownLarge';
import Image1 from "../../../assets/images/avatar.jpg";
import Image2 from "../../../assets/images/avatar-2.jpg";
import Image3 from "../../../assets/images/avatar-3.jpg";
import Image4 from "../../../assets/images/avatar-4.jpg";
import Image5 from "../../../assets/images/avatar-5.jpg";
import Button from "../button/Button";






export default function NavHeaderSecond() {
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
    <header className={`bg-white z-10 fixed shadow-lg flex justify-between ${dashboard.hideSidebar?'w-full left-0 transition-all duration-500 ease-in-out':'calc-width left-64 transition-all duration-500 ease-in-out'}`}>
    <div className="py-3">
    <IconMenu className="text-4xl text-black/100 font-bold" onClick={()=>dashboard.setHideSidebar(!dashboard.hideSidebar)}/>
   </div>
   <div className="p-4 relative md:flex hidden">
    <ul className="flex flex-row p-2 gap-x-4">
       <li className=" text-black/80 hover:text-black transition-transform duration-500"  aria-labelledby="mega menu" aria-haspopup="true" aria-expanded="false" role="button"  onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="megaMenu"?undefined:"megaMenu")}>Mega Menu <span className="inline-flex"><IconChevronUp className="rotate-180"/></span></li>
       <li className=" text-black/80 hover:text-black transition-transform duration-500"  aria-labelledby="mega menu" aria-haspopup="true" aria-expanded="false" role="button"  onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="resources"?undefined:"resources")}>Resources<span className="inline-flex"><IconChevronUp className="rotate-180"/></span></li>
    </ul>
    <div className="absolute top-16">
    {dashboard.isOpen==="megaMenu" && <MegaMenu/>}
    </div>
    <div className="absolute top-16 left-28">
    {dashboard.isOpen==="resources" && 
       <Dropdown>
            <ul className="flex flex-col flex-wrap text-black/50">
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconSettingsOutline/></span><span className="inline-block ml-4">Account Settings</span></a></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconPrivacyGuard/></span><span className="inline-block ml-4">Privacy</span></a></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconHelpCircleOutline/></span><span className="inline-block ml-4">Help</span></a></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconTranslate/></span><span className="inline-block ml-4">Change Language</span></a></li>
        <li> <hr className="border-t border-gray-200 dark:border-gray-700"/></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconLogOut/></span><span className="inline-block ml-4">LogOut</span></a></li>
      </ul>
      </Dropdown>
      }
    </div>
   </div>
   <div className="w-full md:max-w-xs relative p-4 md:flex hidden">
    <form action="">
        <input type="text" name="search" id="search" className=" w-full p-[.50rem]  bg-gray-400/20 border border-gray-400/20 hover:border-gray-400/20 focus:border-gray-400/20 focus:ring-0" placeholder="Search....."/>
        <span><button  type="submit" className="absolute  right-4 text-gray-400 opacity-[1] bg-mprimary hover:text-white hover:bg-mprimary py-[.60rem] px-6"><span className="drop-shadow-md">Search</span></button></span>
    </form>
   </div>
   <div className=" flex flex-row justify-between">

   <ul className="relative p-4">
   <li className=" text-black/80 hover:text-black transition-transform duration-500"  aria-labelledby="message" aria-haspopup="true" aria-expanded="false" role="button"  ><span className="inline-flex"><IconSettingsOutline className="text-4xl text-slate-700/70"/></span></li>
    </ul>
   
   <ul className="relative p-4">
       <li className=" text-black/80 hover:text-black transition-transform duration-500"  aria-labelledby="notifications" aria-haspopup="true" aria-expanded="false" role="button"  onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="dropDownNotification"?undefined:"dropDownNotification")}> <span className="inline-flex"><IconBell className="text-4xl text-slate-700/70"/></span>
       </li>
    </ul>
  
    <div className="absolute top-16 md:right-72 right-0">
    {dashboard.isOpen==="dropDownNotification" && 
       <DropdownLarge>
          <div>
          <div className="flex justify-center items-center pl-16 py-5 border-b">
            <h4 className="text-xl font-extrabold text-black/60">4 New Notifications</h4>
          </div>
          <div className="max-h-96 overflow-y-auto show scrollbars">
          {
                notificationMessages.map((notifyMsg, i)=>(
                  <div  className={`hover:bg-custom-light cursor-pointer`}>
                  <Link role='button' className='relative' to="#">
                  
                  <div className="flex justify-start items-start pl-16 pt-5 ">
                    <h4 className="text-xl font-bold text-black/50">Updated completed</h4>
                  </div>
              <div className="flex flex-row justify-between items-start px-3 border-b border-gray-200/50 py-3 text-sm md:text-base" key={i}>
                
                <img src={notifyMsg.img} alt="admin notification image" width={40} height={40} className="rounded-full"/>
                        <div className="flex-grow pl-5">
                            <h4><span className="text-black/70 font-black">{notifyMsg.personalName}</span> started following <span className="text-black/70 font-black">{notifyMsg.friendName}</span></h4>
                            <p className="pt-3">{notifyMsg.time}</p>
                    </div>
                   
              </div>
                  </Link>
                  </div>
                    ))
                }
          </div>
                 <div className="flex justify-center items-center pl-16 py-3">
            <Link role='button' to="#" className="">Show all Notifications</Link>
          </div> 
                  
                  
          </div>
      </DropdownLarge>
      }
    </div> 
   
   <ul className="relative p-4">
   <li className=" text-black/80 hover:text-black transition-transform duration-500"  aria-labelledby="dropdown messages" aria-haspopup="true" aria-expanded="false" role="button"  onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="dropDownMessage"?undefined:"dropDownMessage")}><span className="inline-flex"><IconEnvelope className="text-4xl text-slate-700/70"/></span></li>
    </ul>
    
    <div className="absolute top-16 md:right-60 right-0">
    {dashboard.isOpen==="dropDownMessage" && 
       <DropdownLarge>
          <div>
          <div className="flex justify-center items-center pl-16 py-5 border-b">
            <h4 className="text-xl font-extrabold text-black/60">4 New messages</h4>
          </div>
          <div className="max-h-96 overflow-y-auto show scrollbars">
          {
                notificationMessages.map((notifyMsg, i)=>(
                  <div  className={`hover:bg-custom-light cursor-pointer`} key={i}>
                  <Link role='button' className='relative' to="#">
                  
                  <div className="flex justify-start items-start pl-16 pt-5 ">
                    <h4 className="text-xl font-bold text-black/50">Updated completed</h4>
                  </div>
              <div className="flex flex-row justify-between items-start px-3 border-b border-gray-200/50 py-3 text-sm md:text-base" key={i}>
                
                <img src={notifyMsg.img} alt="admin notification image" width={40} height={40} className="rounded-full"/>
                        <div className="flex-grow pl-5">
                            <h4><span className="text-black/70 font-black">{notifyMsg.personalName}</span> started following <span className="text-black/70 font-black">{notifyMsg.friendName}</span></h4>
                            <p className="pt-3">{notifyMsg.time}</p>
                    </div>
                   
              </div>
                  </Link>
                  </div>
                    ))
                }
          </div>
                 <div className="flex justify-center items-center pl-16 py-3">
            <Link role='button' to="#" className="">Show all Messages</Link>
          </div> 
                  
                  
          </div>
      </DropdownLarge>
      }
    </div> 
   </div>
    
  <div className="p-2 relative" aria-labelledby="dropdown" aria-haspopup="true" aria-expanded="false">
    <img src={Image5} alt="profile image" onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="dropDown"?undefined:"dropDown")}  className="rounded-full transition-transform  duration-500"  width={60} height={60}/>
    <div className={`absolute right-10 ${dashboard.dropDown && 'transition-all duration-500 ease-in-out'}`}>
    {dashboard.isOpen==="dropDown" && <Dropdown>
      <ul className="flex flex-col flex-wrap text-black/50">
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconSettingsOutline/></span><span className="inline-block ml-4">Account Settings</span></a></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconPrivacyGuard/></span><span className="inline-block ml-4">Privacy</span></a></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconHelpCircleOutline/></span><span className="inline-block ml-4">Help</span></a></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconTranslate/></span><span className="inline-block ml-4">Change Language</span></a></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconDarkMode/></span><span className="inline-block ml-4">Dark Mode</span></a></li>
        <li> <hr className="border-t border-gray-200 dark:border-gray-700"/></li>
        <li><a href="#" className="block w-full py-2 px-1 clear-both whitespace-nowrap hover:text-custom-blue text-lg"><span className="inline-block ml-3"><IconLogOut/></span><span className="inline-block ml-4">LogOut</span></a></li>
      </ul>
    </Dropdown>
    }
    </div>
  </div>
   </header>
  )
}
