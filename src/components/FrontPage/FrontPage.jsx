import React from 'react';
import { GrGallery } from "react-icons/gr";


const FrontPage = ({onGetStarted}) => {
  return (
    <div className=' w-full h-screen text-center content-center text-5xl font-bold'>
        <h1 className=' pl-[490px] flex'>Welcome to <p><GrGallery className='ml-5'/></p>BgRemover</h1>
        <button onClick={onGetStarted}  className='text-black border-2 border-solid border-black  font-medium  rounded-lg text-sm px-5 py-2.5 text-center hover:bg-black hover:text-white'>Get Started</button>
    </div>
  )
};

export default FrontPage;