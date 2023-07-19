import React from 'react'
// import Background from '../../images/bgg.jpg'
import './section.css'
function section() {
  return (
    <div class="body">
      <div class="flex h-screen w-full flex-col items-center justify-center relative top-[-15px]">
        <h1 class="font-bold text-pink-900 text-3xl">
          Hello World .
        </h1>
        <p class="text-white md:text-6xl my-2 font-mono text-4xl font-bold underline decoration-pink-500/30">I am Rahul kumar</p>
        <p class="text-white font-mono my-[-8px] mx-[45px]">full stack developer|coder</p>
        <p class="text-white font-mono my-[8px] mx-[45px]">web3 enthusiasts</p>
        <button class="text-white font-bold font-sans p-4 border-2 mt-[15px] hover:border-rose-700">More About Me</button>
      </div>
    </div>
  )
}

export default section
