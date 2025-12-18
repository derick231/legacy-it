import React from 'react'
import { IoIosLaptop } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

const AboutCard = ({title, desc}) => {
  return (
    <>
        <div className='border border-gray-200 rounded-lg w-2xs shadow-lg flex gap-5 justify-center group'>
            <div>
            <div className='border-4 group-hover:rotate-y-360 duration-800 w-28 h-28 border-[#00c2ff] rounded-full flex justify-center items-center my-3 '>
                <div className=''>
                <FaLaptopCode size={75} color='#00c2ff'/>
                </div>
            </div>

             <h1 className='text-2xl'>{title}</h1>   

             <p>{desc}</p>
             

            </div>
        </div>
    </>
  )
}

export default AboutCard