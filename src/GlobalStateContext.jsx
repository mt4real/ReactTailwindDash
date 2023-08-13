
import React,{createContext,useState} from 'react';

export  const GlobalStateContext=createContext();

export const DataProvider=({children})=>{

const[hideSidebar, setHideSidebar]=useState(true);
const[sidebarSubmenu, setSidebarSubMenu]=useState(false);
const[dropDown, setDropDown]=useState(false);
const[subPages, setSubPages]=useState(false)
const[megaMenu, setMegaMenu]=useState(false);
const[resources,setResources]=useState(false);
const[currentTab,setCurrentTab]=useState("Tab 1");
const[currentTask, setCurrentTask]=useState("Pending");
const[auth, setAuth]=useState(null);
const[error, setError]=useState(false);
const[layout, setLayout]=useState(false);
const[table, setTable]=useState(false);
const[currentTab2, setCurrentTab2]=useState("Tab 1");
const[uiElement, setUiElement]=useState(false);
const[iconSetting, setIconSetting]=useState( false);
const[messageSetting, setMessageSetting]=useState( false);
const[isOpen, setIsOpen]=useState();


const toggleSidebar=()=>{ 
        setHideSidebar(!hideSidebar);
    }

  const toggleSidebarSubMenu=()=>setSidebarSubMenu(!sidebarSubmenu);
  const toggleDropdown=()=> setDropDown(!dropDown);
  const subPagesDropdown=()=> setSubPages(!subPages);
  const toggleMegaMenu=()=> setMegaMenu(!megaMenu);
  const toggleResources=()=> setResources(!resources);
  const toggleCurrentTab=()=> setCurrentTab(!currentTab);
  const toggleCurrentTab2=()=> setCurrentTab2(!currentTab2);
  const toggleAuth=()=> setAuth(!open);
  const toggleError=()=> setError(!error);
  const toggleLayout=()=> setLayout(!layout);
  const toggleTable=()=> setTable(!table);

  

    return (
        <GlobalStateContext.Provider value={{hideSidebar,
             setHideSidebar, sidebarSubmenu,
        setSidebarSubMenu,dropDown,setDropDown,
        subPages,setSubPages, megaMenu,setMegaMenu, resources,setResources
        ,currentTab, setCurrentTab,currentTab2, setCurrentTab2, auth, setAuth
        , error, setError,layout, setLayout,
        table, setTable,
        currentTask, setCurrentTask,
        uiElement, setUiElement,
        iconSetting, setIconSetting,
        messageSetting, setMessageSetting,isOpen, setIsOpen}}>
            {children}
        </GlobalStateContext.Provider>
    )
}
