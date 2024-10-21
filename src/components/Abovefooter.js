import wimg from '../assets/wimg.jpg';
export default function Abovefooter(){
    return <section class="flex flex-col md:flex-row justify-between xl:mb-20 xl:pb-20 items-center xl:py-12 pb-10 xl:px-6 md:px-12 mx-4 mb-10">
  
    <div class="relative xl:-mt-8 xl:w-[600px] xl:h-[400px] bg-gradient-to-r from-blue-700 to-blue-300 text-white rounded-[150px] xl:p-8 xl:ml-5 p-10">
        <h2 class="font-bold text-lg mb-4 mt-10 ">Words From Our Clients</h2>
        <p class="mb-6 leading-loose">
            "Praesent eget metus pulvinar, eleifend dolor sed, tempus nibh. Lorem ipsum dolor sit amet Fusce vel scelerisque erat facilisis. Donec hendrerit diam sapien, vel scelerisque erat facilisis ut. Fusce sit amet leo ac eros dignissim porta in vel metus."
        </p>
        <div class="flex xl:items-center -ml-20">
        <img className='xl:w-[70px] xl:mr-5 xl:ml-[150px] w-[70px] mr-5 ml-[150px] ' src={wimg} alt='wimg'/>
            <div>
                <p class="font-bold">Anie Gomez</p>
                <p class="text-sm">Web Developer</p>
            </div>
        </div>
    </div>

   
    <div class="w-full md:w-1/2 bg-white rounded-lg xl:p-5 xl:mt-8 md:mt-0 xl:ml-8 xl:pr-8 ml-3 mr-2 mt-10">
        <h3 class="font-extrabold text-black-500 mb-5">Latest Testimonial</h3>
        <h2 class="font-bold xl:text-4xl text-3xl mb-5">What They Say About Our Company?</h2>
        <p class="text-gray-600 mb-4 leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text. Ever since the 1500s, when an unknown.
        </p>
        <p class="text-gray-600 leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text.
        </p>
    </div>
    
    
</section>


}