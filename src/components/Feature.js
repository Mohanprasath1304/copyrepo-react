import Workimg from '../assets/workimg.jpg';
export default function Feature(){
    return <section class="flex items-center justify-center min-h-screen bg-white xl:py-12 xl:mx-10 mx-5 pl-2 ">
      
    <div class="container xl:mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 xl:px-6">
      
      <div class="text-left max-w-xl mb-12 lg:mb-0">
        <h2 class="text-indigo-600 xl:text-lg font-bold mt-10">Who We Are</h2>
        <h1 class="xl:text-4xl text-2xl font-bold text-gray-900 xl:mt-5 my-auto xl:pr-20 mt-3 space-y-0 leading-normal ">We Provide Additional Services That Will Grow Your Business</h1>
        <p class="text-gray-500 mt-4 leading-loose space-y-10">
          Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus. 
          Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris. Phasellus magna erat, consectetur nec 
          faucibus at, mollis vitae mauris.
        </p>
        <div class="xl:flex flex-wrap items-center xl:space-x-4 xl:mt-10 item-center leading-normal mt-10 ">
  <div class="bg-gradient-to-r from-orange-500 to-red-500 xl:-ml-1 xl:-mr-1 p-4 ml-36 mr-44  rounded-full">
    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"></path>
    </svg>
  </div>
  <span class="xl:text-lg text-lg ml-24  font-medium">See How We Work</span>
</div>
      </div>

      <div class="relative xl:mb-10 mb-72 ">
      <img src={Workimg} alt='workimg'/>
      </div>
    </div>
    <div>

    </div>
  </section>
}