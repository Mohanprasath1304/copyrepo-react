import Light from '../assets/Light.png';
import Lock from '../assets/Lock.png';
import Manage from '../assets/Manage.png';
import Lap from '../assets/Lap.png';
export default function Option(){
    return <section class="text-center">
    <h2 class="textfeature"><b>Featured Services</b></h2>
    <h1 class="text-4xl font-bold mt-7">Build Audience And Grow Your Business</h1>
    <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text.
    </p>

   
    <div class="xl:mt-12 xl:pr-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-3 my3 xl:mx-auto">
       
        <div class="bg-white xl:p-6 rounded-lg shadow-md mt-5 ">
            <div class="xl:w-[130px] xl:ml-[35px] ml-36 w-24 ">
               
            <img src={Light} alt='Light'/>
            </div>
            <h3 class="mt-4 text-xl font-semibold">Business Idea</h3>
            <p class="text-gray-500 mt-2">
                Praesent elit quam, placerat eu molestie eu, vestibulum et augue, mattis interdum.
            </p>
        </div>

      
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="xl:w-[100px] xl:ml-[55px] xl:mt-[20px] ml-32 w-20">
            <img src={Lock} alt='Lock'/>
                
            </div>
            <h3 class="mt-4 text-xl font-semibold">Data Security</h3>
            <p class="text-gray-500 mt-2">
                Praesent elit quam, placerat eu molestie eu, vestibulum et molestie.
            </p>
        </div>

        
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="xl:w-[100px] xl:ml-[55px] xl:mt-[20px] ml-32 w-20">
                
            <img src={Manage} alt='Manage'/>
            </div>
            <h3 class="mt-4 text-xl font-semibold">IT Management</h3>
            <p class="text-gray-500 mt-2">
                Praesent elit quam, placerat eu molestie, vestibulum et augue, mattis interdum.
            </p>
        </div>

      
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="xl:w-[100px] xl:ml-[55px] xl:mt-[20px] ml-32 w-20">
              
            <img src={Lap} alt='Lap'/>
            </div>
            <h3 class="mt-4 text-xl font-semibold">IT Consultancy</h3>
            <p class="text-gray-500 mt-2">
                Praesent elit quam, placerat molestie eu molestie eu augue, mattis interdum.
            </p>
        </div>
    </div>
</section>

}