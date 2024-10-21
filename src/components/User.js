import uimg1 from '../assets/uimg1.jpg';
import uimg2 from '../assets/uimg2.jpg';
import uimg3 from '../assets/uimg3.jpg';
import uimg4 from '../assets/uimg4.jpg';
export default function User(){
    return   <section class="py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
    <h3 class="text-xl font-bold text-black-800 mb-4 mt-7">Team Member</h3>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Our Proficient Team</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div class="bg-white rounded-lg  xl:p-6 transition-transform duration-500 ease-in-out hover:scale-105  " >
            <img className='xl:max-w-[800px] xl:h-auto rounded-[5px] xl:-ml-[45px] ml-14 mt-5 xl:-mt-0.5' src={uimg1} alt='uimg1'/>
                <div class="xl:text-center xl:mt-6 ">
                    <h3 class="text-lg font-bold text-gray-900 xl:mr-10 xl:-ml-1 mt-6">Rossy Miller</h3>
                    <p class="text-sm text-gray-500 xl:mr-10 ml8">HR Manager</p>
                </div>
            </div>
           
            <div class="bg-white rounded-lg  p-6 transition-transform duration-500 ease-in-out hover:scale-105 hidden md:block">
            <img className='uimg12' src={uimg2} alt='uimg2'/>
                <div class="text-center mt-6">
                    <h3 class="text-lg font-bold text-gray-900 ml-30">John William</h3>
                    <p class="text-sm text-gray-500">Product Manager</p>
                </div>
            </div>
           
            <div class="bg-white rounded-lg  p-6 transition-transform duration-500 ease-in-out hover:scale-105 hidden md:block">
            <img className='uimg13' src={uimg3} alt='uimg3'/>
                <div class="text-center mt-6">
                    <h3 class="text-lg font-bold text-gray-900">Sofia Johnson</h3>
                    <p class="text-sm text-gray-500">Web Designer</p>
                </div>
            </div>
            
            <div class="bg-white rounded-lg  p-6 transition-transform duration-500 ease-in-out hover:scale-105 hidden md:block">
            <img className='uimg14' src={uimg4} alt='uimg4'/>
                <div class="text-center mt-6">
                    <h3 class="text-lg font-bold text-gray-900 ml-10">Donald Moreo</h3>
                    <p class="text-sm text-gray-500 ml-10">Marketing Manager</p>
                </div>
            </div>
        </div>
    </div>
</section>

}