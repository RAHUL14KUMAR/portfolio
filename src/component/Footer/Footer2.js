import React from 'react'
import {TbBrandLinkedin} from 'react-icons/tb'
import {BiLogoTwitter} from 'react-icons/bi'
import {AiOutlineGithub} from 'react-icons/ai'
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
            <div className="flex m-2 text-center">
          <a href="https://www.linkedin.com/in/rahul-kumar-216872227/" className='text-white text-4xl mr-5' target="_blank"><TbBrandLinkedin/></a>
          <a href="https://twitter.com/RahulKu41405561" className='text-white text-4xl mr-5' target="_blank"><BiLogoTwitter/></a>
          <a href="https://github.com/RAHUL14KUMAR" className='text-white text-4xl mr-5' target="_blank"><AiOutlineGithub/></a>
        </div>
        </div>
    </div>

  )
}

export default Footer2
