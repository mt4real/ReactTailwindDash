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
import IconPlus from "../../../assets/icons/IconPlus";



export default function Tasks() {

    const tasks=[
        {
           
            taskTitle:"Pending",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",
            
        },
        {
           
            taskTitle:"Pending",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"In Progress",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"In Progress",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabiturrr ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"Pending",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"Pending",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
          
            taskTitle:"Pending",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"Completed",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"In Progress",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"In Progress",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcuuu.",
            taskText:"CCurabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"In Progress",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcuyu.",
            taskText:"CCurabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"Pending",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"Pending",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"Completed",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"Completed",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"Completed",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"In Progress",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
            
            taskTitle:"Completed",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"In Progress",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"Completed",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
        {
           
            taskTitle:"Completed",
            taskTitleText:"Nam pretium turpis et arcu. Duis arcu.",
            taskText:"Curabitur ligula sapien, tincidunt non, euismod vitae,posuere imperdiet, leo.Maecenas malesuada.posuere imperdiet, leo.Maecenas malesuada.",

            
        },
    ]
  const dashboard=useContext(GlobalStateContext);
  return (
    <>
     <SidebarSecond/>
     <div className={`min-h-screen relative ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
               
      <NavHeaderSecond/>
      <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
        
            <div className="flex flex-row justify-between pt-10 pb-5">
            <div>
            <h4 className="text-2xl md:text-3xl text-black font-normal">Tasks</h4>
            </div>
            <div>
            <Button className="bg-custom-blue rounded hover:text-white hover:bg-blue-600 text-white px-6 py-2"><IconPlus className="inline-block font-extrabold text-white text-2xl"></IconPlus>Add task</Button>
            </div>
            </div>
           <div className="flex flex-col md:flex-row lg:flex-row">
            <div className="basis-1/3">
            <div className="card h-full px-4">
            <div className="card-header pr-4 py-4">
            <div className="flex flex-row justify-between">
            <div>
            <h1 className="font-bold text-xl">Pending</h1>
            </div>
            <div>
            <h1>dropdown</h1>
            </div>
            </div>
            <h1 className="pt-2 pb-6 text-base">
            Nam pretium turpis et arcu. Duis arcu.
            </h1>
            </div>
            {
                    tasks.map((task,i)=>{
            if(task.taskTitle=="Pending"){
            
            return <div className="card-body" key={i}>
           
            <div className="border border-gray-400/30 rounded-md  bg-custom-light p-3">
            <div className="flex flex-row justify-between">
            <div>
            <h1>
                {task.taskText}
            </h1>
            </div>
            <div>
                <input type="checkbox" className="bg-custom-blue rounded"  name="" id="" />
            </div>
            </div>
            <div className="flex flex-row justify-between pt-4">
            <div>
                <Button className="bg-custom-blue rounded hover:text-white hover:bg-blue-600 text-white px-2 py-1">View</Button>
            </div>
            <div>
                <img src={Image3} alt="tasks image"  className="rounded-full" width={40} height={40}/>
            </div>
            </div>
            
            </div>
            
           
           
            </div>
             }

              })

            }    
           
            </div>
                        
      
        
            </div>
            <div className="basis-1/3">
            <div className="card h-full px-4">
            <div className="card-header pr-4 py-4">
            <div className="flex flex-row justify-between">
            <div>
            <h1 className="font-bold text-xl">In Progress</h1>
            </div>
            <div>
            <h1>dropdown</h1>
            </div>
            </div>
            <h1 className="pt-2 pb-6 text-base">
            Nam pretium turpis et arcu. Duis arcu.
            </h1>
            </div>
            {
                    tasks.map((task,i)=>{
            if(task.taskTitle=="In Progress"){
            
            return <div className="card-body" key={i}>
           
            <div className="border border-gray-400/30 rounded-md  bg-custom-light p-3">
            <div className="flex flex-row justify-between">
            <div>
            <h1>
                {task.taskText}
            </h1>
            </div>
            <div>
                <input type="checkbox" className="bg-custom-blue rounded"  name="" id="" />
            </div>
            </div>
            <div className="flex flex-row justify-between pt-4">
            <div>
                <Button className="bg-custom-blue rounded hover:text-white hover:bg-blue-600 text-white px-2 py-1">View</Button>
            </div>
            <div>
                <img src={Image3} alt="tasks image"  className="rounded-full" width={40} height={40}/>
            </div>
            </div>
            
            </div>
            
           
           
            </div>
             }

              })

            }    
           
            </div>
                        
      
        
            </div>
            <div className="basis-1/3">
            <div className="card h-full px-4">
            <div className="card-header pr-4 py-4">
            <div className="flex flex-row justify-between">
            <div>
            <h1 className="font-bold text-xl">Completed</h1>
            </div>
            <div>
            <h1>dropdown</h1>
            </div>
            
            </div>
            <h1 className="pt-2 pb-6 text-base">
            Nam pretium turpis et arcu. Duis arcu.
            </h1>
            </div>
            {
                    tasks.map((task,i)=>{
            if(task.taskTitle=="Completed"){
            
            return <div className="card-body" key={i}>
           
            <div className="border border-gray-400/30 rounded-md  bg-custom-light p-3">
            <div className="flex flex-row justify-between">
            <div>
            <h1>
                {task.taskText}
            </h1>
            </div>
            <div>
                <input type="checkbox" className="bg-custom-blue rounded"  name="" id="" />
            </div>
            </div>
            <div className="flex flex-row justify-between pt-4">
            <div>
                <Button className="bg-custom-blue rounded hover:text-white hover:bg-blue-600 text-white px-2 py-1">View</Button>
            </div>
            <div>
                <img src={Image5} alt="tasks image"  className="rounded-full" width={40} height={40}/>
            </div>
            </div>
            
            </div>
            
           
           
            </div>
             }

              })

            }    
           
            </div>
                        
      
        
            </div>
           </div>
                
        </main>
      <Footer/>
    </div>
    
    </>
  )
}
