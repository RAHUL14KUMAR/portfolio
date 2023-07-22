import React from 'react';
import ReactPlayer from 'react-player';
import './Carousel.css'

     export default function VideoComponent() {
       return (
        <div class=" h-screen bg-gray-200 mt-5">
        <h1 class="pt-5 text-center font-mono text-4xl font-bold text-pink-700 underline">My Works</h1>
        <div class="mt-5">
          <div class="m-2 flex flex-col items-center justify-between bg-white p-5 md:flex-row class">
            <div class="m-5">
              <ReactPlayer class="h-[15em] w-[100em]" url="https://youtu.be/cfBvAH7znEg" controls />
            </div>
            <div>
              <h1 class="text-center font-mono font-bold">codeHelp[Hackathon winning project]</h1>
              <p class="ml-5">students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts student have to buy our subscription and the doubts asked by the student are passed to doubts section where allthe teachers are available and they help the student in solving their doubts</p>
              <p class="ml-6 mt-2 text-center font-mono font-bold">TechUsed:Mern Stack,Socket.io,Agora</p>
              <div class="flex justify-center">
                <a href='https://github.com/rohitranjan-2702/CodeHelp_Final' class="button m-2 bg-pink-700 p-2 pl-5 pr-5 text-white">RepoLink</a>
                <a class="button m-2 bg-pink-700 p-2 pl-5 pr-5 text-white">Devfolio Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
       );
     }