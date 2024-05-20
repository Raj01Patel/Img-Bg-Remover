import React from 'react'
import { GrGallery } from "react-icons/gr";



function Header() {
    return (
        <nav className='m-0 p-0 box-border'>
            <div className="w-full flex items-center justify-center mt-5 ">
                <GrGallery className='text-[30px] mr-2 ' />
                <h1 className='text-[35px] font-semibold border-b-2 border-black'>BgRemover</h1>
            </div>

            <p className='text-black text-2xl font-light text-center mt-3'>
                Get a transparent background for any image
            </p>
        </nav>
    )
}

export default Header