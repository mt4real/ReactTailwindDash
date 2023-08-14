import React,{ useContext, useState} from "react";
import SidebarSecond from '../../utils/dashboardComponents/Sidebar';
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Footer from '../../utils/footer/Footer';
import { GlobalStateContext } from "../../../GlobalStateContext";
//import Calendar from 'rc-calendar';
import Calendar from 'react-calendar';
import "../../../assets/css/cal.css";





export default function Calendars() {
    const dashboard=useContext(GlobalStateContext);
    
    const [date, setDate] = useState(new Date());



    return (
        <>
         <SidebarSecond/>
         <div className={`min-h-screen relative ${
                  dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64  transition-all duration-500'}`}>
                   
          <NavHeaderSecond/>
          <main className={`pt-20 content ${
              dashboard.hideSidebar?'w-full left-0 transition-all duration-500':'calc-width left-64 transition-all duration-500'}`}>
           {/* <div className="w-screen"> */}
           <div className="flex flex-row flex-wrap  flex-shrink-0 pt-10 pb-5">
             <div className="flex flex-shrink-0">
              <h4 className="text-2xl md:text-3xl text-black font-normal">Calendar</h4>
             </div>
             </div>
             <div className="row">
                <div className="col-12">
                <h4 className="text-base text-black font-normal ">
              React-Calendar is a simple calendar library that provides the ability
               to pick days, months, years, or even decades. It also supports date range<br></br>
                selection and a variety of languages for more complex use cases.<br></br>
                <span className="pt-10 font-bold">For more info visit <span className="text-custom-blue font-normal">https://www.npmjs.com/package/react-calendar, https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/</span></span>
              </h4>
                </div>
             </div>
            

           <div className="row">
            <div className="col-6">
              <div className="card shadow-2xl md:h-auto h-96">
              <div className='mb-72 calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card shadow-2xl md:h-auto h-96 bg-custom-light">
              <div className='mb-72 calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
              </div>
            </div>
           </div>
           <div className="row">
            <div className="col-6">
              <div className="card shadow-2xl  md:h-auto h-96">
              <div className='mb-72 calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card shadow-2xl md:h-auto h-96 bg-custom-light">
              <div className='mb-72 calendar-container'>
                <Calendar onChange={setDate} value={date} />
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
