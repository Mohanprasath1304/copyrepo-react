import Fimg from '../assets/fimg.jpg';
export default function Discover(){
    return <section class="bg-gradient-to-r from-indigo-900 to-blue-700 text-white font-sans pr-4 ">
    <div class="xl:max-w-7xl mx-auto flex flex-wrap items-center px-4 py-10 lg:py-10 ">
     
      <div class="max-w-lg leading-relaxed pl-10 text-center md:text-left xl:text-left   ">
        <h2 class="text-base uppercase tracking-widest font-extrabold mb-8">IT Consulting & Design</h2>
        <h1 class="text-3xl md:text-5xl sm:text-4xl xl:text-5xl font-bold mb-3 ">Creating New Ideas</h1>
        <h1 class="text-3xl md:text-5xl sm:text-3xl font-bold mb-6">& Building Brands</h1>
        <p class="text-lg text-gray-200 mb-8">
          Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris. Phasellus magna faucibus mollis vitae mauris.
        </p>
        <a href="https://softek.radiantthemes.com/" class="inline-block bg-red-500 hover:bg-red-600 text-white  font-semibold px-8 py-3 mb-20 rounded-lg">Discover More</a>
        </div>
      <img class='ml-4' src={Fimg} alt='fimg'/>
    </div>
    </section>
}