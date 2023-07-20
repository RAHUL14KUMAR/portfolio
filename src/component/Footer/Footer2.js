import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
function Footer2() {
  return (
    <div className="flex bg-pink-700 items-center">
        <div className="flex w-screen flex-col items-center justify-around md:flex-row">
            <div className="m-2 text-center">
                <p className="text-white font-mono font-bold text-xl">© Copyright 2023 |</p>
            </div>
            <div className="m-2 text-center">
                <p className="text-white font-mono font-bold text-xl">Design by : Rahul Kumar</p>
            </div>
            <div className="m-2 text-center flex">
                <div className='text-white' style={{color:"white"}}>{AiOutlineLinkedin}</div>
                <div className='text-white'>{AiOutlineLinkedin}</div>
                <div className='text-white'>{AiOutlineLinkedin}</div>
                <div className='text-white'>{AiOutlineLinkedin}</div>
            </div>
        </div>
    </div>

  )
}

export default Footer2
