import React, { useState } from "react";
import Logo from '../assets/logo1.png';
import face from '../assets/face.png';
import twit from '../assets/twit.png';
import link from '../assets/link.png';
import pin from '../assets/pin.png';
import minion from '../assets/minion.png';

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  

  return (
    <footer className="relative bg-gradient-to-r from-indigo-900 to-blue-800 text-white xl:pt-40 pt-20 xl:pb-20 pl-20 pr-10 leading-loose">
     
    <nav className="hidden md:block">
      <div className=" xl:absolute bg-white xl:pt-10 xl:pb-10 xl:pl-12 xl:pr-32 xl:items-center xl:justify-between xl:-mb-[700px] xl:-mt-[240px] xl:-ml-2 shadow-lg border border-gray-500 rounded-[10px] hidden md:block">
        <div className="max-w-xl flex-wrap">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking For Business Opportunity?</h2>
          <p className="text-gray-500">Lorem Ipsum is simply dummy the industry’s standard dummy text.</p>
        </div>
        <div className="xl:ml-[550px] xl:-mt-[60px]">
          <a href="https://softek.radiantthemes.com/" className="box-class">
            Get In Touch
          </a>
        </div>
      </div>

      
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
      <div className="  container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 ">
        <div>
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
      
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 border rounded-md text-black focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border rounded-md text-black focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

     
      <section
        className="fixed right-0 bottom-0 xl:mb-0 lg:mb-0 md:mb-12 mb-4 xl:mr-4 lg:mr-4 md:mr-4 mr-0 xl:p-8 lg:p-4 p-4"
        style={{ zIndex: 999 }}
      >
       
          <div>
            <img onClick={openPopup} className="w-24 animate-float cursor-pointer" src={minion} alt="minion" />
            <h1 className="ml-9 animate-float cursor-pointer text-yellow-400">
              <i>Login</i>
            </h1>
            </div>
       
      </section>
    </div>
    </footer>
  );
}
