import React from 'react'
import LinkButton from '../../utils/button/LinkButton'


export default function Error403() {
  return (
    <>
    <div className="flex items-center flex-row justify-center pt-32">
        <h1 className="text-9xl font-bold text-black">403</h1>
    </div>
    <div className="flex flex-row items-center justify-center">
    <h4 className=" text-5xl font-normal">
      Error forbidden
        </h4>
    </div>
    <div className="flex flex-row items-center justify-center">
    <h4 className=" text-lg text-center">
    You are not authorized or you do not<br></br> have permission
     to view this page<br></br>
    </h4>
    </div>
     <div className="flex justify-center items-center pt-5">
     <LinkButton to="/" className="bg-custom-blue border border-custom-blue rounded-md py-2 px-4 hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg w-1/4 text-center">Go back to dashboard page</LinkButton>
     </div>
    </>
  )
}
