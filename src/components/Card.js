import Card1 from '../assets/c1.png';
import Card2 from '../assets/c2.png';
import Card3 from '../assets/c3.png';
import Card4 from '../assets/c4.png';
export default function Card(){
    return <section class="bg-gray-50 xl:pt-7 pt-[600px]"> 
    <div className="container xl:mx-auto xl:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 flex-wrap">
    <div class="container mx-auto px-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
   
    <div class="xl:p-[40px] text-center">
      <div class="bg-white xl:w-[270px] xl:p-6 rounded-md shadow-md xl:text-center transition-transform duration-500 ease-in-out hover:scale-105">
        <img class="c1img mx-auto" src={Card1} alt="Card" />
        <h2 class="text-xl font-semibold mb-2">Social Media Plan</h2>
        <p class="text-gray-600">Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
    </div>

   
    <div class="xl:pt-[50px] xl:pl-[25px] xl:ml-32 xl:mt-3">
      <div class="bg-white xl:w-[270px] xl:p-6 rounded-md shadow-md xl:text-center text-center transition-transform duration-500 ease-in-out hover:scale-105">
        <img class="c1img mx-auto" src={Card2} alt="Card" />
        <h2 class="text-xl font-semibold mb-2">Digital Marketing</h2>
        <p class="text-gray-600">Vivamus ullamcorper text of the printing and typesetting.</p>
      </div>
    </div>

   
    <div class="xl:ml-4 xl:-mt-10 xl:-pt-5 xl:ml-[40px] text-center">
      <div class="bg-white xl:w-[270px] xl:p-6 rounded-md shadow-md xl:text-center transition-transform duration-500 ease-in-out hover:scale-105">
        <img class="c1img mx-auto" src={Card3} alt="Card" />
        <h2 class="text-xl font-semibold mb-2">Business Idea</h2>
        <p class="text-gray-600">Vivamus ullamcorper text of the printing and typesetting.</p>
      </div>
    </div>

   
    <div class="xl:ml-36 xl:pl-2 xl:-mt-5 text-center">
      <div class="bg-white xl:w-[270px] xl:p-6 rounded-md shadow-md xl:text-center pb-20 transition-transform duration-500 ease-in-out hover:scale-105">
        <img class="c1img mx-auto" src={Card4} alt="Card" />
        <h2 class="text-xl font-semibold mb-2">Perfect Analysis</h2>
        <p class="text-gray-600">Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
    </div>
  </div>
</div>

        <div class="xl:ml-[300px] xl:-mr-96 xl:mt-[100px] -pl-40 mx-5 leading-loose ">
            <h2 class="text-black-800 xl:text-lg font-bold xl:mb-4 ">IT Consulting & Design</h2>
            <h1 class="xl:text-4xl font-bold xl:mb-4 leading-normal">Creating New Ideas & Building Brands</h1>
            <p class="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's
                standard dummy text ever since the 1500s, when an unknown.
            </p>
            <p class="text-gray-600 xl:mb-6 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's
                standard dummy text ever since the 1500s.
            </p>
            <a href="https://softek.radiantthemes.com/contact-01/" class="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white text-bold xl:px-10 xl:py-3 px-10 py-3 rounded hover:bg-red-600 xl:mt-2 mt-5 transition-transform duration-500 ease-in-out hover:scale-105">Discover
                More</a>
        </div>
    </div>
    <div class="bg-gray-50">
    <div class="bg-gradient-to-r from-red-600 to-orange-600 xl:p-10 xl:pt-16 xl:pb-10 xl:mx-16 xl:mt-16 pt-10 mt-20 pb-10 " >
        <div class="container xl:mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center">
            <div>
                <h2 class="text-5xl font-bold mb-2">2,531</h2>
                <p class="text-lg">Project Finished</p>
            </div>
            <div>
                <h2 class="text-5xl font-bold mb-2">15+</h2>
                <p class="text-lg">Years Experience</p>
            </div>
            <div>
                <h2 class="text-5xl font-bold mb-2">280</h2>
                <p class="text-lg">Happy Clients</p>
            </div>
            <div>
                <h2 class="text-5xl font-bold mb-2">3,587</h2>
                <p class="text-lg">Recognition</p>
            </div>
        </div>
    </div>
</div>
</section>
}