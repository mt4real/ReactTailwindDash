import React from 'react'
import LinkButton from '../../utils/button/LinkButton'


export default function Error500() {
  return (
    <>
    <div className="flex items-center flex-row justify-center pt-32">
        <h1 className="text-9xl font-bold text-black">500</h1>
    </div>
    <div className="flex flex-row items-center justify-center">
    <h4 className=" text-5xl font-normal">
      Internal server error
        </h4>
    </div>
    <div className="flex flex-row items-center justify-center">
    <h4 className=" text-lg text-center">
    The server encountered something unexpected <br></br>
    that didn't allow 
    it to complete the request.</h4>
    </div>
     <div className="flex justify-center items-center pt-5">
     <LinkButton to="/" className="bg-custom-blue border border-custom-blue rounded-md py-2 px-4 hover:text-white hover:bg-indigo-700 font-mono text-white/100 text-lg w-1/4 text-center">Go back to dashboard page</LinkButton>
     </div>
    </>
  )
}
