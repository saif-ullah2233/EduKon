import React from "react";
import logo from "../image/logo.png";

export const TopBare = () =>{
    return (
        <div>
             <div className='w-screen h-13 p-7 bg-black flex items-center justify-center gap-240 align-middle'>
                  <div className='w-70 h-13 p-7 bg-cover bg-center bg-no-repeat flex items-center  justify-start align-middle'>
                    
                    <div className='w-5 h-10  bg-cover bg-center bg-no-repeat mt-3 ml-3  flex items-right justify-right align-right'
                    style={{backgroundImage: `url(${logo})`}}
                    >
            
                    </div>
                     <span className='text-xl font-bold   text-white '>
                      envato
                     </span>
                     <span className='text-xl   text-white'>market</span>
                  </div>
                  <div className='w-50 h-13 p-7 flex items-center justify-center align-middle'>
                  <div className='w-27 h-3 py-4 px-0 bg-[#89bc4a] rounded-sm flex items-center justify-center text-white text-lg font-semibold '>
              Buy now
            </div>
                  </div>
                   </div>
        </div>
    )
}