import React, { useContext, useState } from 'react';

function DropdownLarge({children}){
   

    return(
            <div className=" bg-white transition-all duration-500 shadow-lg w-full  rounded border border-black/10 
               ">
               {children}
            </div>
        
    )
}
export default DropdownLarge;