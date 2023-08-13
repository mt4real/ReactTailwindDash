import React, { useContext, useState } from 'react';

function Dropdown({children}){
   

    return(
            <div className=" bg-white transition-all duration-500 shadow-xl rounded border border-black/10
               p-3" style={{minWidth:"12rem"}}>
               {children}
            </div>
        
    )
}
export default Dropdown;