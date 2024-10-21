import uimg1 from '../assetstest/uimg1.jpg';
import uimg2 from '../assetstest/uimg2.jpg';
import uimg3 from '../assetstest/uimg3.jpg';
import uimg4 from '../assetstest/uimg4.jpg';
export default function User(){
    return   <section class="py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h3 class="text-xl font-bold text-black-800 mb-4 mt-7">Team Member</h3>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Our Proficient Team</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div class="bg-white rounded-lg  p-6">
            <img className='uimg11' src={uimg1} alt='uimg1'/>
                <div class="text-center mt-6">
                    <h3 class="text-lg font-bold text-gray-900 mr-10">Rossy Miller</h3>
                    <p class="text-sm text-gray-500 mr-10">HR Manager</p>
                </div>
            </div>
           
            <div class="bg-white rounded-lg  p-6">
            <img className='uimg12' src={uimg2} alt='uimg2'/>
                <div class="text-center mt-6">
                    <h3 class="text-lg font-bold text-gray-900 ml-30">John William</h3>
                    <p class="text-sm text-gray-500">Product Manager</p>
                </div>
            </div>
           
            <div class="bg-white rounded-lg  p-6">
            <img className='uimg13' src={uimg3} alt='uimg3'/>
                <div class="text-center mt-6">
                    <h3 class="text-lg font-bold text-gray-900">Sofia Johnson</h3>
                    <p class="text-sm text-gray-500">Web Designer</p>
                </div>
            </div>
            
            <div class="bg-white rounded-lg  p-6">
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