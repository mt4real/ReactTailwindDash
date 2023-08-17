import React,{ useContext, useState} from "react";
import NavHeaderSecond from '../../utils/dashboardComponents/NavHeader';
import Sidebar from '../../utils/dashboardComponents/Sidebar';
import { GlobalStateContext } from "../../../GlobalStateContext";
import Footer from "../../utils/footer/Footer";
import Button from "../../utils/button/Button";
import CardImage1 from "../../../assets/images/unsplash-1.jpg";
import CardImage2 from "../../../assets/images/unsplash-2.jpg";
import CardImage3 from "../../../assets/images/unsplash-3.jpg";
import { Link } from "react-router-dom";



export default function Cards() {

    const tabList = [
        {
          name: "Tab 1",
          contentHeader:"Card with tabs",
          label: "Active",
          content:(
            <div className="tab-content">
            <h1>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        here you can add contents 
                        </h1>
                        <div className="flex justify-start items-start py-5">
                             <Button className="btn btn-primary">Go to another page</Button>
                        </div>
             </div>
          ),
        },
        {
          name: "Tab 2",
          contentHeader:"Card with tabs",
          label: "Link",
          content: (
    
            <div className="tab-content">
            <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </h1>
                        <div className="flex justify-start items-start py-5">
                             <Button className="btn btn-primary">Go to another page</Button>
                        </div>
             </div>
          ),
        },
       
       
          
      ];
     
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
              <h4 className="text-2xl md:text-3xl text-black font-normal pb-4">Cards</h4>
             </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-x-4 pb-4">
                <div className="basis-1/3 pb-4">
                    <div className="card">
                      <img src={CardImage3} alt="card image" className="w-auto h-auto rounded-t-md" width={100} height={100}/>
                      <p className="pl-3 text-xl py-4">Card Image with links</p>
                      <div className="card-body">
                       <h1>
                       Some quick example text to build on the card title and make up the bulk of the card's content.
                       here you can add contents 
                       </h1>
                       <div className="card-text">
                            <Link to="" role="button" className="card-link">Card link</Link>
                            <Link to="" role="button" className="card-link">Another link</Link>
                       </div>
                      </div>
                    </div>
                </div>
                <div className="basis-1/3 pb-4">
                    <div className="card">
                      <img src={CardImage2} alt="card image" className="w-auto h-auto rounded-t-md" width={100} height={100}/>
                      <p className="pl-3 text-xl py-4">Card Image with Button</p>
                      <div className="card-body">
                       <h1>
                       Some quick example text to build on the card title and make up the bulk of the card's content.
                       here you can add contents 
                       </h1>
                       <div className="flex justify-start items-start py-5">
                            <Button className="btn btn-primary">Go to another page</Button>
                       </div>
                      </div>
                    </div>
                </div>
                <div className="basis-1/3 pb-4">
                    <div className="card">
                      <img src={CardImage1} alt="card image" className="w-auto h-auto rounded-t-md" width={100} height={100}/>
                      <p className="pl-3 text-xl py-4">Card Image with links</p>
                      <div className="card-body">
                       <div className="flex flex-col">
                        <ul>
                            <li className="border-b text-xl py-3">Lorem ipsum dolor sit amet</li>
                            <li className="border-b text-xl py-3">Lorem ipsum dolor sit amet</li>
                            <li className="border-b text-xl py-3">Lorem ipsum dolor sit amet </li>
                        </ul>

                       </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-x-4 pb-4">
                <div className="basis-1/3 pb-4">
                    <div className="card">
                      <p className="pl-3 text-xl py-4">Card with links</p>
                      <div className="card-body">
                       <h1>
                       Some quick example text to build on the card title and make up the bulk of the card's content.
                       here you can add contents 
                       </h1>
                       <div className="card-text">
                            <Link to="" role="button" className="card-link">Card link</Link>
                            <Link to="" role="button" className="card-link">Another link</Link>
                       </div>
                      </div>
                    </div>
                </div>
                <div className="basis-1/3 pb-4">
                    <div className="card">
                      <p className="pl-3 text-xl py-4">Card with Button</p>
                      <div className="card-body">
                       <h1>
                       Some quick example text to build on the card title and make up the bulk of the card's content.
                       here you can add contents 
                       </h1>
                       <div className="flex justify-start items-start py-5">
                            <Button className="btn btn-primary">Go to another page</Button>
                       </div>
                      </div>
                    </div>
                </div>
                <div className="basis-1/3 pb-4">
                    <div className="card">
                      <p className="pl-3 text-xl py-4">Card with links</p>
                      <div className="card-body">
                       <div className="flex flex-col">
                        <ul>
                            <li className="border-b text-xl py-3">Lorem ipsum dolor sit amet</li>
                            <li className="border-b text-xl py-3">Lorem ipsum dolor sit amet</li>
                            <li className="border-b text-xl py-3">Lorem ipsum dolor sit amet </li>
                        </ul>

                       </div>
                      </div>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-x-4 pb-4">
            <div className="basis-1/2 pb-4">
                    <div className="card">
            <ul aria-labelledby="tabs" role="tablist" className="tabs tab-list-inline">
                  {tabList.map((tab, i) => (
                <li
                  key={i}
                  onClick={() => dashboard.setCurrentTab(tab.name)}
                  className={`px-4 py-4 text-xl  cursor-pointer ${tab.name === dashboard.currentTab ? "text-custom-blue": "text-black/50"}`}
               role="button">
                <Link to="#" role="presentation">{tab.label}</Link>
                </li>
                
                 ))}
                 <li className="text-black/50  px-4 py-4" aria-disabled="true"><Link to="" className="cursor-default text-black/50 opacity-[0.8]" role="presentation" disabled="disabled">Disabled</Link></li>
                    </ul>
                    
                      <div className="card-body">
                      {tabList.map((tab, i) => {
                    if (tab.name === dashboard.currentTab) {
                        return <div key={i}>
                              { <h1 className="text-xl py-5">{tab.contentHeader}</h1>}
                            
                            {tab.content}
                            </div>;
                    } else {
                        return null;
                    }
                    })}
                      </div>
                    </div>
                </div>
                <div className="basis-1/2 pb-4">
                    <div className="card">
            <ul aria-labelledby="tabs" role="tablist" className="tabs tab-list-inline">
                  {tabList.map((tab, i) => (
                <li
                  key={i}
                  onClick={() => dashboard.setCurrentTab2(tab.name)}
                  className={`px-4 py-4 text-xl my-2 mx-2 cursor-pointer ${tab.name === dashboard.currentTab2 ? "bg-custom-blue text-white rounded-md": "text-black/50"}`}
               role="button">
                <Link to="#" role="presentation">{tab.label}</Link>
                </li>
                
                 ))}
                 <li className="text-black/50  px-4 py-4 my-2 mx-2" aria-disabled="true"><Link to="" className="cursor-default text-black/50 opacity-[0.8]" role="presentation" disabled="disabled">Disabled</Link></li>
                    </ul>
                    
                      <div className="card-body">
                      {tabList.map((tab, i) => {
                    if (tab.name === dashboard.currentTab2) {
                        return <div key={i}>
                              { <h1 className="text-xl py-5">{tab.contentHeader}</h1>}
                            
                            {tab.content}
                            </div>;
                    } else {
                        return null;
                    }
                    })}
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
