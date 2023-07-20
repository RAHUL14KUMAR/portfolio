import React from 'react'
import './About.css'
function About() {
  return (
    <div className="flex  flex-col items-center justify-center bg-white">
      <div className="h-1/3 w-1/2 flex-col items-center justify-center text-white border-pink-500 ">
        <div className="flex flex-col items-center">
          <h1 className="mt-5 text-xl font-bold text-pink-700">About Me</h1>
          <div className="flex flex-col items-center justify-center">
            <p className="sm:text mx-[35px] mt-2 text-center font-mono font-bold text-black md:text-2xl">Let Me Introduce Myself</p>
            <div className="mt-5 rounded-full border border-pink-700 text-center">
              <img src="https://th.bing.com/th?id=OIP.F3x6fcsPqo7wB6d8k2QVEQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="h-20 w-20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-1 flex flex-col max-w-full">
        <p className="text-center font-sans text-2xl font-bold tracking-widest underline pl-[20px]">Profile</p>
        <p className="mt-1 text-center font-mono pl-[85px] pr-[55px]">A Information Technology(IT) BTech student from Heritage Institute of Technology, Kolkata with excellent academic background and diverse skill set. Experienced in Software Development. I am well versed with Data Structure and Algorithm,Java and MERN Stack. currently i am moving myself towards AWS and web3</p>
        <div className="flex flex-col md:flex-row max-w-full md:justify-between justify-center mx-5 pl-[25px]">
          <div className="mt-5 w-1/2 flex-col text-center media">
            <div className="mt-2">
              <h3 className="text font-bold tracking-widest">Full Name:</h3>
              <p className="font-mono tracking-widest">Rahul Kumar</p>
            </div>
            <div className="mt-2">
              <h3 className="text font-bold tracking-widest">Birth Date:</h3>
              <p className="font-mono tracking-widest">14-12-2001</p>
            </div>
            <div className="mt-2">
              <h3 className="text font-bold tracking-widest">website:</h3>
              <p className="font-mono tracking-widest">14-12-2001</p>
            </div>
            <div className="mt-2">
              <h3 className="text font-bold tracking-widest">email:</h3>
              <p className="font-mono tracking-widest">rahul14.12kr@gmail.com</p>
            </div>
          </div>
          <div className="mt-5 w-1/2 flex-col text-center media">
            <div className="mt-2">
              <h3 className="text font-bold tracking-widest">Skills set:</h3>
              <p className="font-mono tracking-widest">JAVA</p>
              <p className="font-mono tracking-widest">REACT JS</p>
              <p className="font-mono tracking-widest">NEXT JS</p>
              <p className="font-mono tracking-widest">MONGODB</p>
              <p className="font-mono tracking-widest">NODE JS</p>
              <p className="font-mono tracking-widest">EXPRESS JS</p>
              <p className="font-mono tracking-widest">REST API</p>
              <p className="font-mono tracking-widest">JAVASCRIPT</p>
              <p className="font-mono tracking-widest">BOOTSTRAP</p>
              <p className="font-mono tracking-widest">TAILWIND CSS</p>
              <p className="font-mono tracking-widest">CSS</p>
              <p className="font-mono tracking-widest">HTML</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex-col md:flex-row text-center">
        <button className="text mt-[15px] border-2 p-4 pl-[5em] pr-[5em] font-mono font-bold hover:border-pink-500 hover:text-pink-600 transition-colors ml-5 mr-5">Hire Me</button>
        <button className=" mt-[15px] border-2 bg-black p-4 pl-[5em] pr-[5em] font-mono font-bold text-white ml-5 mr-5">Download cv
        </button>
      </div>
    </div>
    

  )
}

export default About
