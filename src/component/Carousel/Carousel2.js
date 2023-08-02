import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react'
import './ResponsiveCarousel.css';
import ReactPlayer from 'react-player';


const ResponsiveCarousel = () => {
    const carouselStyle = {
        width:'400px' // Set your desired height here
      };
  return (
    <>
    <div class="w-full pb-50 bg-gray-200 mt-5">
        <h1 class="pt-5 text-center font-mono text-4xl font-bold text-pink-700 underline">My Works</h1>
        <div class="mt-5">
        <Carousel
            className="custom-carousel-container"
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
        >
            <div class="m-2 flex flex-col items-center justify-between md:flex flex-col md:justify-center bg-white p-5 class">
                <div class="m-5">
                <ReactPlayer class="h-[15em] w-[100em]" url="https://youtu.be/cfBvAH7znEg" controls />
                </div>
                <div>
                <h1 class="text-center font-mono font-bold">codeHelp[Hackathon winning project]</h1>
                <p class="ml-5">students and teachers login themselves first.after logging students can ask 10 doubts.after asking 10 doubts student have to buy our subscription and the doubts asked by the student are passed to doubts section where allthe teachers are available and they help the student in solving their doubts</p>
                <p class="ml-6 mt-2 text-center font-mono font-bold">TechUsed:Mern Stack,Socket.io,Agora</p>
                <div class="flex justify-center">
                    <a href='https://github.com/rohitranjan-2702/CodeHelp_Final' class=" no-underline button m-2 bg-pink-700 p-2 pl-5 pr-5 text-white" target="_blank">RepoLink</a>
                    <a href="https://bikramhere.live/" class="no-underline button m-2 bg-pink-700 p-2 pl-5 pr-5 text-white" target="_blank">Deployed Link</a>
                </div>
                </div>
            </div>

            <div class="m-2 flex flex-col items-center justify-between md:flex flex-col md:justify-center bg-white p-5 class">
                <div class="m-5">
                <ReactPlayer class="h-[15em] w-[100em]" url="https://youtu.be/3dla2WtrDwo" controls />
                </div>
                <div>
                <h1 class="text-center font-mono font-bold">Flow Estate[Hackathon project]</h1>
                <p class="ml-5">this project aims to provide a solution to the problem of unfair pricing and potential scams in property transactions. By leveraging verified user data, incentivizing participation through NFT tokens, and utilizing blockchain technology for secure transactions, the project seeks to empower property buyers with reliable information and protect them from unscrupulous practices in the real estate market.</p>

                <p class="ml-6 mt-2 text-center font-mono font-bold">TechUsed:Next js,Mongodb,Node js ,Express js,cloudinary,flow,OCR</p>
                <div class="flex justify-center">
                    <a href='https://github.com/RAHUL14KUMAR/flow' class=" no-underline button m-2 bg-pink-700 p-2 pl-5 pr-5 text-white" target="_blank">RepoLink</a>
                    <a href="https://devfolio.co/projects/flow-estate-52bb" class=" no-underline button m-2 bg-pink-700 p-2 pl-5 pr-5 text-white" target="_blank">Devfolio Link</a>
                </div>
                </div>
            </div>

            <div class="m-2 flex flex-col items-center justify-between md:flex flex-col md:justify-center bg-white p-5 class">
                <div class="m-5">
                <ReactPlayer class="h-[15em] w-[100em]" url="https://youtu.be/jJeQDf3Imbw" controls />
                </div>
                <div>
                <h1 class="text-center font-mono font-bold">Mall Management</h1>
                <p class="ml-5">It is a college project where user can see the details of the products,add the product in to the cart and place the order after that a rate
                list generate with address details and amount that the user has to pay, user has two options for payment(online
                    Payment,cash on delivery)and, their is also an admin who can add the new product in the list, delete those
                    product which are outdated in the market,manages his/her sale’s history,keep a check on the amount of the
                    particular product available</p>
                <p class="ml-6 mt-2 text-center font-mono font-bold">TechUsed:Mern Stack,Redux, RazorPay Payment Gateway</p>
                <div class="flex justify-center">
                    <a href='https://github.com/RAHUL14KUMAR/mallMangement' class="no-underline button m-2 bg-pink-700 p-2 pl-5 pr-5 text-white" target="_blank">RepoLink</a>
                </div>
                </div>
            </div>

            <div class="m-2 flex flex-col items-center justify-between md:flex flex-col md:justify-center bg-white p-5 class">
                <div class="m-5">
                <ReactPlayer class="h-[15em] w-[100em]" url="https://youtu.be/FEl85mVZ4NE" controls />
                </div>
                <div>
                <h1 class="text-center font-mono font-bold">PostPe</h1>
                <p class="ml-5">Its normally a frontend clone of postpe and the main aim to this project is while building i learned more about animation and how we use them </p>
                <p class="ml-4 mt-5 text-center font-mono font-bold">TechUsed:HTML,CSS</p>
                <div class="flex justify-center">
                    <a href='https://github.com/RAHUL14KUMAR/postpe-clone/' class="no-underline button m-4 bg-pink-700 p-2 pl-5 pr-5 text-white" target="_blank">Repo Link</a>
                    <a href="https://rahul14kumar.github.io/postpe-clone/" class="no-underline button m-4 bg-pink-700 p-2 pl-5 pr-5 text-white" target="_blank">Deploy Link</a>
                </div>
                </div>
            </div>
        </Carousel>
        </div>
    </div>
    </>
  );
};

export default ResponsiveCarousel;