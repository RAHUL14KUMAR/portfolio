import React,{useState} from 'react'
import 'react-multi-carousel/lib/styles.css'; 
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
    },
};
const def={
    products:[
        {
            id:1,
            title:'CodeHelp[Hackathon winning project]',
            description:"students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts student have to buy our subscription and the doubts asked by the student are passed to doubts section where allthe teachers are available and they help the student in solving their doubts"
        },
        {
            id:2,
            title:'CodeHelp[Hackathon winning project]',
            description:"students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts student have to buy our subscription and the doubts asked by the student are passed to doubts section where allthe teachers are available and they help the student in solving their doubts"
        },
        {
            id:3,
            title:'Social Media',
            description:"students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts student have to buy our subscription and the doubts asked by the student are passed to doubts section where allthe teachers are available and they help the student in solving their doubts"
        },
        {
            id:4,
            title:'Mall Mangement[College project]',
            description:"students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts student have to buy our subscription and the doubts asked by the student are passed to doubts section where allthe teachers are available and they help the student in solving their doubts"
        }
    ]
}
export default function App() {
  return (
    <div class="mt-5 bg-gray-200">
  <div>
    <h1 class="text-center font-mono text-4xl font-bold text-pink-600 underline">My Works</h1>
  </div>
  <div class="flex flex-col md:flex-row">
    <div class="m-5 flex w-1/2 border-black bg-white">
      <div class="p-5">
        <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" position="top" alt="..." />
        <h2 class="text mt-2 text-center font-mono font-bold">CodeHelp[Hackathon winning Project]</h2>
        <p class="mt-5 text-center">students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts a student have to buy our subscription and the doubts asked by the student are passed to doubts section where all the teachers are available and they help the student in solving their doubts</p>
        <div class="mt-5 text-center">
          <button class="bg-cyan-500 p-2 pl-[4em] pr-[4em] text-center shadow-lg shadow-cyan-500/50" href="#">Button</button>
        </div>
      </div>
    </div>
    <div class="m-5 flex w-1/2 border bg-white">
      <div class="p-5">
        <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" position="top" alt="..." />
        <h2 class="text mt-2 text-center font-mono font-bold">Mall Mangement[College project]</h2>
        <p class="mt-5 text-center">Here user can see the details of the products,add the product in to the cart and place the order after that a rate
        list generate with address details and amount that the user has to pay, user has two options for payment(online
        Payment,cash on delivery)and, their is also an admin who can add the new product in the list, delete those
        product which are outdated in the market,manages his/her sale’s history,keep a check on the amount of the
        particular product available</p>
        <div class="mt-5 text-center">
          <button class="bg-cyan-500 p-2 pl-[4em] pr-[4em] text-center shadow-lg shadow-cyan-500/50" href="#">Button</button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row">
    <div class="m-5 flex w-1/2 border bg-white">
      <div class="p-5">
        <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" position="top" alt="..." />
        <h2 class="text mt-2 text-center font-mono font-bold">CodeHelp[Hackathon winning Project]</h2>
        <p class="mt-5 text-center">students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts a student have to buy our subscription and the doubts asked by the student are passed to doubts section where all the teachers are available and they help the student in solving their doubts</p>
        <div class="mt-5 text-center">
          <button class="bg-cyan-500 p-2 pl-[4em] pr-[4em] text-center shadow-lg shadow-cyan-500/50" href="#">Button</button>
        </div>
      </div>
    </div>
    <div class="m-5 flex w-1/2 border bg-white">
      <div class="p-5">
        <img src="https://mdbootstrap.com/img/new/standard/nature/184.webp" position="top" alt="..." />
        <h2 class="text mt-2 text-center font-mono font-bold">CodeHelp[Hackathon winning Project]</h2>
        <p class="mt-5 text-center">students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts a student have to buy our subscription and the doubts asked by the student are passed to doubts section where all the teachers are available and they help the student in solving their doubts</p>
        <div class="mt-5 text-center">
          <button class="bg-cyan-500 p-2 pl-[4em] pr-[4em] text-center shadow-lg shadow-cyan-500/50" href="#">Button</button>
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
}