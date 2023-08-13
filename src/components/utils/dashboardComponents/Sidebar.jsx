import React, {useContext, useState, useRef, useEffect} from 'react';
import { GlobalStateContext } from '../../../GlobalStateContext';
import IconHomeAlt from '../../../assets/icons/IconHome';
import IconEcommerceWallet from "../../../assets/icons/IconEcommerceWallet";
import IconChevronDown from "../../../assets/icons/IconChevronDown";
import IconChevronUp from "../../../assets/icons/IconChevronUp";
import IconCalendarWeek from "../../../assets/icons/IconCalendarWeek";
import IconEnvelope from "../../../assets/icons/IconEnvelope";
import IconPageBreak from "../../../assets/icons/IconPageBreak";
import IconPagesLine from "../../../assets/icons/IconPagesLine";
import IconLayoutSidebarInset from "../../../assets/icons/IconLayoutSidebarInset";
import IconSoftwareLayers from "../../../assets/icons/IconSoftwareLayers";
import IconColumnsGap from "../../../assets/icons/IconColumnsGap";
import IconTableViewComfortable from '../../../assets/icons/IconTable';
import { Link } from 'react-router-dom';


export default function SidebarSecond() {

  
    const pages=[
      {
        subMenu:"Profile Page",
        href:"/profile-page"
      },
      {
        subMenu:"Blank Page",
        href:"/blank-page"
      },
      {
        subMenu:"Client Page",
        href:"/client-page"
      },
      {
        subMenu:"Notification Page",
        href:"/message-Notifications-page"
      },
      {
        subMenu:"Chat Page",
        href:"/chat-page"
      },
      
  ];

  const profile=[
    
    {
      menuName:"Profile",
      icon:IconPagesLine,
      href:"/profile-page"
    },
  ];

  const auth=[
    {
      subMenu:"Login",
      href:"/login"
    },
    {
      subMenu:"Register",
      href:"/register"
    },
    {
      subMenu:"Forgot Password",
      href:"/forgot-password"
    },
    {
      subMenu:"Reset Password",
      href:"/reset-password"
    },
  ];

  const errors=[

    {
      subMenu:"Error404",
      href:"/error404"
    },
    {
      subMenu:"Error500",
      href:"/error500"
    },
    {
      subMenu:"Error403",
      href:"/error403"
    },

  ];

  const layouts=[
    {
      subMenu:"Form Layouts",
      href:"/form-layouts"
    },
  ];
    const tables=[
      {
        subMenu:"Table Variants",
        href:"/table-variants"
      },
  ];
  const uiElements=[
    {
      subMenu:"UI Buttons",
      href:"/ui-buttons"
    },
    {
      subMenu:"UI Cards",
      href:"/ui-cards"
    },
    {
      subMenu:"UI Grids",
      href:"/ui-grids"
    },
    {
      subMenu:"UI Accordion",
      href:"/ui-accordions"
    },
];

    const dashboard=useContext(GlobalStateContext);

    
  return (
    <aside  className={`bg-mprimary shadow-xl fixed z-20 h-full scrollbars overflow-y-scroll  ${dashboard.hideSidebar?'hidden transition-all duration-500':'transition-all duration-500 w-64 '}`}>
       <div className=" flex justify-center pb-10 pt-5">
        <Link className="text-2xl text-white font-extrabold transition duration-500" to="/" role="button">ReactTailwindDash</Link>
       </div>
      

       <ul className="flex flex-col justify-center pl-8">
        <li className=" text-2xl  transition-all duration-500 ease-in-out mb-5  opacity-1 text-white"><Link to="#" role='button'><span className="mr-3"><IconHomeAlt className="inline-block w-4 h-4"/></span><span className="text-lg">Dashboard</span></Link></li>
        
        <li className=" text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="#" role='button'><span className="mr-3"><IconCalendarWeek  className="inline-block w-4 h-4"/></span><span className="text-lg">Calendar</span></Link></li>
        <li className=" text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="#" role='button'><span className="mr-3"><IconEnvelope  className="inline-block w-4 h-4"/></span><span className="text-lg">Projects</span></Link></li>
        
        <li onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="pages"?undefined:"pages")} className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="#" role='button'><span className="mr-3"><IconPageBreak  className="inline-block w-4 h-4"/></span><span className="text-lg">Pages</span>
        <span className="inline-block float-right">{dashboard.isOpen==="pages"?<IconChevronDown className="inline-block transition-all duration-500 ease-in-out  transform rotate-180"/>:<IconChevronUp className="inline-block transition-all duration-500 ease-in-out transform rotate-90"/>}</span></Link>
        
        {
          pages.map((page, i)=>(
            dashboard.isOpen==="pages" &&(
              <ul  className="mt-3 transition-all duration-500 ease-in-out" key={i}>
           <li className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to={page.href} role='button'><span className="text-lg ml-7">{page.subMenu}</span></Link></li>
            </ul>
            )
            
          ))
              }
            </li>
            <li  className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="/profile-page" role='button'><span className="mr-3"><IconPagesLine  className="inline-block w-4 h-4"/></span><span className="text-lg">Profile</span></Link></li>
            <li onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="auth"?undefined:"auth")} className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="#" role='button'><span className="mr-3"><IconPageBreak  className="inline-block w-4 h-4"/></span><span className="text-lg">Auth</span>
              <span className="inline-block float-right">{dashboard.isOpen==="auth"?<IconChevronDown className="inline-block transition-all duration-500 ease-in-out  transform rotate-180"/>:<IconChevronUp className="inline-block transition-all duration-500 ease-in-out transform rotate-90"/>}</span></Link>
        
        {
          auth.map((page, i)=>(
            dashboard.isOpen==="auth"&&(
              
          <ul  className="mt-3 transition-all duration-500 ease-in-out" key={i}>
           <li className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to={page.href} role='button'><span className="text-lg ml-7">{page.subMenu}</span></Link></li>
           
            </ul>
            )
            
          ))
            
              }
            </li>
            <li  onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="error"?undefined:"error")} className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="#" role='button'><span className="mr-3"><IconPageBreak  className="inline-block w-4 h-4"/></span><span className="text-lg">Error</span>
              <span className="inline-block float-right">{dashboard.isOpen==="error"?<IconChevronDown className="inline-block transition-all duration-500 ease-in-out  transform rotate-180"/>:<IconChevronUp className="inline-block transition-all duration-500 ease-in-out transform rotate-90"/>}</span></Link>
        
        {
          errors.map((error, i)=>(
            dashboard.isOpen==="error" &&(
              <ul  className="mt-3 transition-all duration-500 ease-in-out" key={i}>
           <li className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to={error.href}><span className="text-lg ml-7">{error.subMenu}</span></Link></li>
           
            </ul>
            )
            
          ))
            
              }
            </li>
            <li onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="layout"?undefined:"layout")} className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="#" role='button'><span className="mr-3"><IconPageBreak  className="inline-block w-4 h-4"/></span><span className="text-lg">Layouts</span>
              <span className="inline-block float-right">{dashboard.isOpen==="layout"?<IconChevronDown className="inline-block transition-all duration-500 ease-in-out  transform rotate-180"/>:<IconChevronUp className="inline-block transition-all duration-500 ease-in-out transform rotate-90"/>}</span></Link>
        
        {
          layouts.map((layout, i)=>(
            dashboard.isOpen==="layout" &&(
              <ul  className="mt-3 transition-all duration-500 ease-in-out" key={i}>
           <li className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to={layout.href}><span className="text-lg ml-7">{layout.subMenu}</span></Link></li>  
            </ul>
            )
            
          ))
            
              }
            </li>

            <li className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="/tasks" role='button'><span className="mr-3"><IconSoftwareLayers  className="inline-block w-4 h-4"/></span><span className="text-lg">Tasks</span></Link></li>
            <li className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="/invoice" role='button'><span className="mr-3"><IconColumnsGap  className="inline-block w-4 h-4"/></span><span className="text-lg">Invoice</span></Link></li>
            <li onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="table"?undefined:"table")} className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="#" role='button'><span className="mr-3"><IconTableViewComfortable  className="inline-block w-4 h-4"/></span><span className="text-lg">Tables</span>
              <span className="inline-block float-right">{dashboard.isOpen==="table"?<IconChevronDown className="inline-block transition-all duration-500 ease-in-out  transform rotate-180"/>:<IconChevronUp className="inline-block transition-all duration-500 ease-in-out transform rotate-90"/>}</span></Link>
        
        {
          tables.map((table, i)=>(
            dashboard.isOpen==="table" &&(
              <ul  className="mt-3 transition-all duration-500 ease-in-out" key={i}>
           <li className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to={table.href} role='button'><span className="text-lg ml-7">{table.subMenu}</span></Link></li>  
            </ul>
            )
            
          ))
            
              }
            </li>
            <li onClick={()=>dashboard.setIsOpen(dashboard.isOpen==="uiElement"?undefined:"uiElement")} className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to="#" role='button'><span className="mr-3"><IconTableViewComfortable  className="inline-block w-4 h-4"/></span><span className="text-lg">UI Elements</span>
              <span className="inline-block float-right">{dashboard.isOpen==="uiElement"?<IconChevronDown className="inline-block transition-all duration-500 ease-in-out  transform rotate-180"/>:<IconChevronUp className="inline-block transition-all duration-500 ease-in-out transform rotate-90"/>}</span></Link>
        
        {
          uiElements.map((uiElement, i)=>(
            dashboard.isOpen==="uiElement" &&(
              <ul  className="mt-3 transition-all duration-500 ease-in-out" key={i}>
           <li className="text-2xl  transition-all duration-500 ease-in-out mb-5  text-gray-400 opacity-1"><Link to={uiElement.href} role='button'><span className="text-lg ml-7">{uiElement.subMenu}</span></Link></li>  
            </ul>
            )
            
          ))
            
              }
            </li>

          
          </ul>
      </aside>
  )
}
