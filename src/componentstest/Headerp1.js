import { useState } from 'react';
import Cart from '../assetstest/cart.png';
import Logo1 from '../assetstest/logo1.jpg';
import Search from '../assetstest/search.png';
import { Bars3Icon} from '@heroicons/react/24/solid';
export default function Headerp1(){
    const [toggleMenu , setToggleMenu] = useState(false)
    return <section >
    <div className="bg-white text-black"><header className="flex justify-between px-5 bg-primary pt-6 text-lg">
<a className="logo1"href="https://softek.radiantthemes.com/"><img src={Logo1} alt='https://softek.radiantthemes.com'/></a>
<nav className='hidden md:block '>
<ul className="flex text-black font-semibold">
    <li className='ho1'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Home 
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <div class="bg-transparent">

    <ul class="flex ">
            <li class="relative group ">
                <button  class="text-white-100  inline-flex items-center">
                    Pages
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
                
                <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                    <a href="kbvkjb" class="block px-4 py-2 text-gray-700 hover:bg-blue-100">About Us-01</a>
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
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
                    Portfolio
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className=''>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Blog
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li className=''>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center">
    Shop
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <li><img class='carts' src={Cart} alt='https://softek.radiantthemes.com/cart/'/></li>
    <li><img className='w-6 my-1 mr-5' src={Search} alt='https://softek.radiantthemes.com/'/></li>
    <li> <a href="https://softek.radiantthemes.com/contact-01/" class=" bg-gradient-to-r from-red-500 to-orange-500 text-white text-semibold px-7 py-4 rounded mr-3  mt-2">Discover Us</a></li>
</ul>
</nav>






{toggleMenu && <nav  className='block md:hidden block flex flex-col text-gray-500 fixed top-[65px] bg-blue-50 -ml-6 w-[435px] h-full'>
<ul className="flex text-black font-semibold col-class flex-col  pr-20 pt-20 leading-loose">
    <li className='ho1'>
    <a href="https://softek.radiantthemes.com/404" class="text-white-100  inline-flex items-center -pt-20 pb-3">
    Home 
                    <svg class="w-4 h-4 ml-[290px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
    </li>
    <div class="bg-transparent">

    <ul class="flex ">
            <li class="relative group ">
                <button href="https://softek.radiantthemes.com/404" class="text-white-100 mb-2  inline-flex items-center">
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
<img class='w-6 h-6 mt-1 ml-20 block md:hidden block' src={Cart} alt='https://softek.radiantthemes.com/cart/'/>
    <img className='w-5 my- mr-4 ml-5 block md:hidden block' src={Search} alt='https://softek.radiantthemes.com/'/>
<button onClick={() => setToggleMenu(!toggleMenu)}className='block md:hidden block'><Bars3Icon className='text-black h-8'/></button>
</header>
</div>

</section>
}