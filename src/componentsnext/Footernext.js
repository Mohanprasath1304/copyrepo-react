import React, { useState } from "react";
import Logo from '../assets/logo1.png';
import face from '../assets/face.png';
import twit from '../assets/twit.png';
import link from '../assets/link.png';
import pin from '../assets/pin.png';


export default function Footernext() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 
  return (
    <footer className="relative bg-gradient-to-r from-indigo-900 to-blue-800 text-white xl:pt-40 xl:pt-20 xl:pb-5 pl-20 pr-10 leading-loose">
     
    <nav className="hidden md:block">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 ">
        <div>
        <img className='mb-5' src={Logo} alt='https://softek.radiantthemes.com'/>
            <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <div class="flex space-x-4">
            <img className='mb-5 w-9 h-9' src={face} alt='https://softek.radiantthemes.com'/>
            <img className='mb-5 w-9 h-9' src={twit} alt='https://softek.radiantthemes.com'/>
            <img className='mb-5 w-9 h-9' src={link} alt='https://softek.radiantthemes.com'/>
            <img className='mb-5 w-9 h-9' src={pin} alt='https://softek.radiantthemes.com'/>
            </div>
        </div>
       
        <div className="pl-20 ">
            <h3 class="xl:text-xl text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
                <li><a href="https://softek.radiantthemes.com/" class="hover:underline">Home</a></li>
                <li><a href="https://softek.radiantthemes.com/" class="hover:underline">About Us</a></li>
                <li><a href="https://softek.radiantthemes.com/" class="hover:underline">Services</a></li>
                <li><a href="https://softek.radiantthemes.com/" class="hover:underline">Contact Us</a></li>
            </ul>
        </div>
        
        <div class="cen">
            <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
            <p className='pa'>121 King St, Melbourne</p>
            <p>VIC 3000, Australia</p>
            <p>Email: <a href="mailto:info@example.com" class="hover:underline">info@example.com</a></p>
            <p>Phone: <a href="tel:+18881235678" class="hover:underline">+1 (888) 123-5678</a></p>
        </div>
        
        <div className="pr-5 pt-2 ">
            <h3 class="text-xl font-semibold mb-4">Subscribe</h3>
            <p class="mb-4">Follow our newsletter to stay updated about us.</p>
            <form class="flex">
                <input type="email" placeholder="Email Address" class="w-full p-3 rounded-l-md text-black" />
                <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-r-md">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </form>
        </div>
    </div>
    </nav>
<nav className="block md:hidden block">
      <div className="  container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 -mt-20">
        <div className="pt-10">
          <img className="mb-5" src={Logo} alt="Logo" />
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </div>

        <div className="xl:pl-20 xl:pt-2  ">
          <button  onClick={() => toggleAccordion(1)} className="text-xl font-semibold ">
            <div className="w-[250px] h-12 bg-blue-800 pt-2 rounded-lg">
            <span>Quick Links  +</span>
            </div>
            </button>
            {activeIndex === 1 && (
          <ul className="space-y-2 ml-3 -ml-9">
            <li><a href="https://softek.radiantthemes.com/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="https://softek.radiantthemes.com/" className="hover:underline">About Us</a>
            </li>
            <li><a href="https://softek.radiantthemes.com/" className="hover:underline">Services
            </a>
            </li>
            <li><a href="https://softek.radiantthemes.com/" className="hover:underline">Contact Us</a></li>
          </ul>
             )}
        </div>
        
        <div  className="xl:ml-4 xl:-mr-5 xl:">
        
          <button  onClick={() => toggleAccordion(2)} className="text-xl font-semibold ">
          <div className="w-[250px] bg-blue-800 h-12 pt-2  rounded-lg">
            <span>Contact Us   + </span>
            </div>
            </button>
            {activeIndex === 2 && (
                <ul className="">
          <p className="xl:ml-4 xl:-mr-5 xl:pt-2 mr-6 ">121 King St, Melbourne</p>
          <p className="mr-12">VIC 3000, Australia</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (888) 123-5678</p>
          </ul>
        )}
        </div>

        <div className="pr-5 -mb-6">
          <button onClick={() => toggleAccordion(3)} className="text-xl font-semibold ">
          <div className="w-[250px]  h-12 bg-blue-800 border-6 border-blue-100 pt-2 rounded-lg ">
            <span className="pr-4">Subscribe  +</span>
            </div>
            </button>
          {activeIndex === 3 && (
            <ul>
          <p className="mb-4">Follow our newsletter to stay updated about us.</p>
          <form className="flex">
            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-l-md text-black" />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-r-md">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          </ul>
        )}
        </div>
      </div>
      <div className="flex space-x-4">
            <img className="mb-5 w-9 h-9" src={face} alt="Facebook" />
            <img className="mb-5 w-9 h-9" src={twit} alt="Twitter" />
            <img className="mb-5 w-9 h-9" src={link} alt="LinkedIn" />
            <img className="mb-5 w-9 h-9" src={pin} alt="Pinterest" />
          </div>
      </nav>

      <hr className="border-blue-600"></hr>
      <div className="mt-5 text-center text-gray-400">
        <p>2021 RadiantThemes. All Rights Reserved.</p>
      </div>
      <div >
      
    </div>
    </footer>
  );
}
