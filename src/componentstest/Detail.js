import sys from '../assetstest/sys.jpg';
import tick from '../assetstest/tick.png';
import cart1 from '../assetstest/cart1.png';
import cart2 from '../assetstest/cart2.png';
import cart3 from '../assetstest/cart3.png';
export default function Detail(){
    return <body class="bg-white">

    
    <section class="max-w-7xl mx-auto px-6 py-12 "><nav className='hidden md:block'>
        <div class="flex flex-col md:flex-row items-center justify-between mr-1 mt-5 font-sans ">

        
            <div class="sysimg">
            <img src={sys} alt='sys'/>
            </div>

            <div class="md:w-1/2 md:pl-12">
            <h2 className='font-bold text-xl mb-5'>About Company</h2>
                <h2 class="text-4xl font-bold text-black-900 mb-6 leading-normal">We Provide IT Solutions That Help You Succeed</h2>
                <p class="text-gray-400 mb-6 leading-relaxed">
                    Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.
                    Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris.
                </p>

               
                <div class="space-y-4">

                    <div class="flex items-start">
                        <div class="text-blue-500">
                        <img className='w-10 pt-4' src={tick} alt='tick'/>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-bold text-gray-800 mb-2">Seamless Management</h3>
                            <p class="text-gray-400 leading-relaxed mr-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctu adipiscing elit ut elit tellus tellus.</p>
                        </div>
                    </div>

                   
                    <div class="flex items-start">
                        <div class="text-blue-500">
                        <img className='w-10 pt-4'  src={tick} alt='tick'/>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-bold text-gray-800 mb-2">Flawless Incorporation</h3>
                            <p class="text-gray-400 leading-relaxed mr-4">Consectetur adipiscing adipiscing elit ut elit tellus elit ut elit tellus, luctu lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </nav>






        <nav className='block md:hidden block'>
        <div class="flex flex-col md:flex-row items-center justify-between mr-1 mt-5 font-sans ">

        
            <div class="sysimg1">
            <img src={sys} alt='sys'/>
            </div>

            <div class="md:w-1/2 md:pl-12">
            <h2 className='font-bold text-xl mb-5'>About Company</h2>
                <h2 class="text-4xl font-bold text-black-900 mb-6 leading-normal">We Provide IT Solutions That Help You Succeed</h2>
                <p class="text-gray-400 mb-6 leading-relaxed">
                    Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.
                    Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris.
                </p>

               
                <div class="space-y-4">

                    <div class="flex items-start">
                        <div class="text-blue-500">
                        <img className='w-10 pt-4' src={tick} alt='tick'/>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-bold text-gray-800 mb-2">Seamless Management</h3>
                            <p class="text-gray-400 leading-relaxed mr-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctu adipiscing elit ut elit tellus tellus.</p>
                        </div>
                    </div>

                   
                    <div class="flex items-start">
                        <div class="text-blue-500">
                        <img className='w-10 pt-4'  src={tick} alt='tick'/>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg font-bold text-gray-800 mb-2">Flawless Incorporation</h3>
                            <p class="text-gray-400 leading-relaxed mr-4">Consectetur adipiscing adipiscing elit ut elit tellus elit ut elit tellus, luctu lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </nav>




    </section>
    <nav className='hidden md:block'>
    <div class="services flex justify-between items-center p-15 max-w-6xl mx-auto space-x-6 mt-10">
        <div class="service-card bg-white rounded-lg p-6 w-1/3 shadow-lg  transform transition-transform duration-300 hover:-translate-y-2">
            <div class="cart1">
            <img src={cart1} alt='cart1'/>
            </div>
            <h3 class="text-xl font-bold text-black mb-2 ml-20">Business Goals</h3>
            <p class="text-gray-500 pl-20">Lorem Ipsum. Progravida nibh an sollicitudin, lorem quis.</p>
        </div>

        <div class="service-card bg-white rounded-lg p-6 w-1/3 shadow-lg  transform transition-transform duration-300 hover:-translate-y-2">
            <div class="cart2">
            <img src={cart2} alt='cart2'/>
            </div>
            <h3 class="text-xl font-bold text-black mb-2 ml-20">Coding & Design</h3>
            <p class="text-gray-500 pl-20">Progravida nibh an lorem quis em bibendum an auctor.</p>
        </div>

        <div class="service-card bg-white rounded-lg p-6 w-1/3 shadow-lg  transform transition-transform duration-300 hover:-translate-y-2">
            <div class="cart3">
            <img src={cart3} alt='cart3'/>
            </div>
            <h3 class="text-xl font-bold text-black mb-2 ml-20">Technology</h3>
            <p class="text-gray-500 pl-20">Lorem Ipsum. Progravida nibh pn sollicitudin, rogravida velit.</p>
        </div>
    </div>
    </nav>



    <nav className='block md:hidden block'>
    <div class="services  items-center p-15 max-w-6xl mx-auto space-x-6 mt-10">
        <div class="service-card bg-white rounded-lg  m-4 text-center shadow-lg  transform transition-transform duration-300 hover:-translate-y-2">
            
            <img className='cart12' src={cart1} alt='cart1'/>
            
            <h3 class="text-xl font-bold text-black mb-2 ml-">Business Goals</h3>
            <p class="text-gray-500 pl-">Lorem Ipsum. Progravida nibh an sollicitudin, lorem quis.</p>
        </div>

        <div class="service-card bg-white rounded-lg p-6 m-4 text-center shadow-lg  transform transition-transform duration-300 hover:-translate-y-2">
            <div class="cart12">
            <img src={cart2} alt='cart2'/>
            </div>
            <h3 class="text-xl font-bold text-black mb-2 ">Coding & Design</h3>
            <p class="text-gray-500 ">Progravida nibh an lorem quis em bibendum an auctor.</p>
        </div>

        <div class="service-card bg-white rounded-lg p-6 m-4 text-center shadow-lg  transform transition-transform duration-300 hover:-translate-y-2">
            <div class="cart12">
            <img src={cart3} alt='cart3'/>
            </div>
            <h3 class="text-xl font-bold text-black mb-2 ">Technology</h3>
            <p class="text-gray-500 ">Lorem Ipsum. Progravida nibh pn sollicitudin, rogravida velit.</p>
        </div>
    </div>
    </nav>
</body>
}