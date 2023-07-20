import React from 'react'
import './section.css'
import {TbBrandLinkedin} from 'react-icons/tb'
import {BiLogoTwitter} from 'react-icons/bi'
import {AiOutlineGithub} from 'react-icons/ai'
function section() {
  return (
    <div className="body">
      <div className="flex h-screen w-full flex-col items-center justify-center relative top-[-15px]">
        <h1 className="font-bold text-pink-900 text-3xl">
          Hello World .
        </h1>
        <p className="text-white md:text-6xl my-2 font-mono text-4xl font-bold underline decoration-pink-500/30">I am Rahul kumar</p>
        <p className="text-white font-mono my-[-8px] mx-[45px]">full stack developer|coder</p>
        <p className="text-white font-mono my-[8px] mx-[45px]">web3 enthusiasts</p>
        <button className="text-white font-bold font-sans p-4 border-2 mt-[15px] hover:border-rose-700">More About Me</button>
        <div className="mt-[6em] flex">
          <a href="https://www.linkedin.com/in/rahul-kumar-216872227/" className='text-white text-4xl m-5 hover:text-rose-700'><TbBrandLinkedin/></a>
          
          <a href="https://twitter.com/RahulKu41405561" className='text-white text-4xl m-5 hover:text-rose-700'><BiLogoTwitter/></a>
          <a href="https://github.com/RAHUL14KUMAR" className='text-white text-4xl m-5 hover:text-rose-700'><AiOutlineGithub/></a>
        </div>
      </div>
    </div>
  )
}

export default section
