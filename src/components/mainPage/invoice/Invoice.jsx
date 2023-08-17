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



export default function Invoice() {

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
              <h4 className="text-2xl md:text-3xl text-black font-normal pb-4">Invoice</h4>
             </div>
            </div>
           <div className="card h-full mb-20 px-4">
                <h1  className="py-6 text-xl md:text-2xl">Hello <span className="text-black font-extrabold">Afolabi Busari,</span> <br></br>
               <span className="text-xl text-black/80"> This is N4000 being a payment for the delivery service we offer you</span>
                </h1>
                <div className="flex flex-col md:flex-row lg:flex-row justify-between pb-6">
                <div >
                <h4>
                    Receipt No:<br></br>
                   <span className="text-black font-bold">700094</span>
                </h4>
                </div>
                <div >
                <h4 className="pr-20">
                    Date of Payment<br></br>
                   <span className="text-black/80 font-bold text-xl"> 05-Aug-2023
                    5:46 PM</span>              
                      </h4>
                </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row justify-between border-y pt-6 pb-5">
                 <div  className="pb-4">
                 <h4>
                 Customer<br></br>
                <span className="text-black/80 font-extrabold text-xl">Afolabi Busari</span><br></br>
                <span className="text-xl text-black/60">
                Sango,Poly Road,<br></br>
                Oyo State,Ibadan,<br></br>
                Nigeria       <br></br>
                mtreal62@gmail.com
                </span>
                 </h4>
                 </div>
                <div >
                <h4>
                 Payment To<br></br>
                <span className="text-black/80 font-bold text-xl">Mervii Technologies Limited</span><br></br>
                <span className="text-xl text-black/60">
               Sango,Poly Road,<br></br>
                Oyo State,Ibadan,<br></br>
                Nigeria <br></br>
                info@adminkit.com
               </span>
                 </h4>
                </div>
                </div>
               <div className="table-responsive">

               <table   className="table table-striped" style={{display:"table"}}>
                      <thead>
                            <tr>
                             <th>S/N</th>
                             <th>Description</th>
                             <th>Per Delivery</th>
                             <th>Items Delivered</th>
                             <th>Amount</th>
                           
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td className="text-black/80">1</td>
                            <td className="text-black/80">Delivery from Sango to Challenge</td>
                            <td className="text-black/80">N2000</td>
                            <td className="text-black/80">3</td>
                            <td className="text-black/80">N6000</td>
                        </tr>
                        <tr>
                            <td className="text-black/80">2</td>
                            <td className="text-black/80">Delivery from Sango to Mobil</td>
                            <td className="text-black/80">N2500</td>
                            <td className="text-black/80">2</td>
                            <td className="text-black/80">N5000</td>
                        </tr>
                        <tr>
                            <td className="text-black/80">3</td>
                            <td className="text-black/80">Delivery from Sango to Akala Express</td>
                            <td className="text-black/80">N3000</td>
                            <td className="text-black/80">2</td>
                            <td className="text-black/80">N6000</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="text-black font-extrabold text-2xl">
                            Subtotal:
                           </td>
                           <td className="text-black font-extrabold text-xl">N17,000</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="text-black font-extrabold text-2xl">
                            Discount:
                           </td>
                           <td className="text-black font-extrabold text-xl">5%</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="text-black font-extrabold text-2xl">
                            Total:
                           </td>
                           <td className="text-black font-extrabold text-xl">N16,150</td>
                        </tr>
                     </tbody>
                    </table> 
               </div>
                    <div  className="flex justify-center">
                    <div>
                        <p className="text-base text-black/70 ">Thanks for the patronage, we hope to do business with you everyday</p>
                    </div>
                    </div>
                    <div  className="flex justify-center py-5">
                   <Button type="button" className="bg-blue-500 rounded-lg px-6 py-2 text-white hover:bg-blue-600 hover:text-white">Print receipt</Button>
                    </div>
                   
            </div>
                
        </main>
      <Footer/>
    </div>
    
    </>
  )
}
