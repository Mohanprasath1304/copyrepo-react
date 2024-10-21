import { useState } from 'react';
import CartN from '../assetsnext/cartN.png';
import Logo1N from '../assetsnext/logo1N.jpg';
import SearchN from '../assetsnext/searchN.png';
import contactus from '../assetsnext/contactus.PNG';
import { Bars3Icon} from '@heroicons/react/24/solid';
export default function Headercontect(){
    const [toggleMenu , setToggleMenu] = useState(false)
    return <section >
    <div className="bg-white text-black"><header className="flex justify-between xl:pl-2 bg-primary pt-6 text-lg">
<a className="xl:mx-9 xl:w-40 w-48 pl-8"href="https://softek.radiantthemes.com/"><img src={Logo1N} alt='https://softek.radiantthemes.com'/></a>
<nav className='hidden md:block '>
<ul className="flex text-black font-semibold">
    <li className='my-3 mr-'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Home 
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <div class="bg-transparent">

        <ul class="flex ">
            <li class="relative group mt-3 mr-">
                <button  class="text-white-100  inline-flex items-center">
                    Pages
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
                
                <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    <a href="https://softek.radiantthemes.com/about-us-01/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-01</a>
                    <a href="https://softek.radiantthemes.com/about-us-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-02</a>
                    <a href="https://softek.radiantthemes.com/services-01/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-01</a>
                    <a href="https://softek.radiantthemes.com/services-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-02</a>
                    <a href="https://softek.radiantthemes.com/services-03/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-03</a>
                    <a href="https://softek.radiantthemes.com/why-choose-us/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Why Choose Us</a>
                    <a href="https://softek.radiantthemes.com/team/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Team</a>
                    <a href="https://softek.radiantthemes.com/pricing/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Pricing</a>
                    <a href="https://softek.radiantthemes.com/404" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">404 Page</a>
                </div>
            </li>
        </ul>
       
</div>
    <li className='my-3 mr- '>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Portfolio
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className='my-3 mr-'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Blog
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className='my-3 mr-'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Shop
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li><img class='w-[24px] mt-[15px] -pb-[5px] ml-[px]' src={CartN} alt='https://softek.radiantthemes.com/cart/'/></li>
    <li><img className='w-6 my-1 mr-5 mt-3.5 -ml-4' src={SearchN} alt='https://softek.radiantthemes.com/'/></li>
    <li> <a href="https://softek.radiantthemes.com/contact-01/" class="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white text-semibold px-7 py-3  mr-10 rounded hover:bg-red-600 ">Contect
    Us</a></li>
</ul>
</nav>



{toggleMenu && <nav className='block md:hidden block flex flex-col text-gray-500 fixed top-[65px] bg-blue-50 -ml-2 w-[435px] h-full'>
<ul className="flex text-black font-semibold col-class flex-col  pr-20 pt-20 leading-loose">
    <li className='ho1 -mt-10'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center pb-3">
    Home 
                    <svg class="w-4 h-4 ml-[290px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <div class="bg-transparent">

    <ul class="flex ">
            <li class="relative group pb-4 ">
                <button href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Pages
                    <svg class="w-4 h-4 ml-[287px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
                
                <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    <a href="vhb" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-01</a>
                    <a href="https://softek.radiantthemes.com/about-us-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-02</a>
                    <a href="https://softek.radiantthemes.com/services-01/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-01</a>
                    <a href="https://softek.radiantthemes.com/services-02/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-02</a>
                    <a href="https://softek.radiantthemes.com/services-03/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services-03</a>
                    <a href="https://softek.radiantthemes.com/why-choose-us/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Why Choose Us</a>
                    <a href="Contectpage" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Contect</a>
                    <a href="https://softek.radiantthemes.com/team/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Team</a>
                    <a href="https://softek.radiantthemes.com/pricing/" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">Pricing</a>
                    <a href="https://softek.radiantthemes.com/404" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">404 Page</a>
                </div>
            </li>
        </ul>
</div>
    <li className=' '>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center pb-3">
                    Portfolio
                    <svg class="w-4 h-4 ml-[267px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className=''>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center pb-3">
    Blog
                    <svg class="w-4 h-4 ml-[299px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className=''>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center pb-3">
    Shop
                    <svg class="w-4 h-4 ml-[294px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    
   
</ul>
</nav>}
<img class='w-6 h-6 mt-3 ml-20 block md:hidden block' src={CartN} alt='https://softek.radiantthemes.com/cart/'/>
    <img className='w-3 h-8 mr-4 ml-5 mt-2 block md:hidden block' src={SearchN} alt='https://softek.radiantthemes.com/'/>
<button onClick={() => setToggleMenu(!toggleMenu)}className='block md:hidden block'><Bars3Icon className='text-black h-8 pr-10 mt-2'/></button>
</header>
</div>
<section>
        <div>
        <img className='mt-3' src={contactus} alt='https://softek.radiantthemes.com/'/>
        </div>
    </section>
</section>
}