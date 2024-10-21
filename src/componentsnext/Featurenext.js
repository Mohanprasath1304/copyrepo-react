import contectimg from '../assetsnext/contectimg.png';
import mobile from '../assetsnext/mobile.png';
import loca from '../assetsnext/loca.png';
import mail from '../assetsnext/mail.png';
export default function Featurenext(){
    return <section >
    <div class="flex flex-col bg-gray-50 lg:flex-row items-center justify-center xl:py-12 xl:px-28 px-5 pl-5 pt-10 lg:px-8   ">
       
        <div class=" xl:ml-20 xl:pr-20 ml-5 mr-5 pb-10 flex justify-center w-[900px]">
            <img className='xl:w-[800px] xl:h-[500px] w-[300px] xl:mr-20 xl:ml-5 ml-2'src={contectimg} alt="Contact Illustration" 
            />
        </div>

       
        <div class=" xl:mt-10 xl:lg:mt-0 xl:mr-4 text-left mx-5">
            <h2 class="text-blue-600 text-lg font-bold mb-2">Contact Us</h2>
            <h1 class="text-4xl font-bold mb-4">Get In Touch</h1>
            <p class="text-gray-500 mb-6 leading-loose">
                Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.
            </p>

            <div class="mb-10">
                <div class="flex items-center -pt-5">
                   
                <img className='w-12 -ml-4 mr-3' src={loca} alt='mobile'/>
                    <div>
                        <p class=" text-gray-500 mb-3">Our Location</p>
                        <p class="text-gray-900 mb-5">121 King St. Melbourne VIC 3000, Australia</p>
                    </div>
                </div>

                <div class="flex items-center mb-3">
                   
                   <img className='w-8 -ml-1 mr-4' src={mobile} alt='mobile'/>
                    <div>
                        <p class=" text-gray-500 mb-3">Phone Number</p>
                        <p class="text-gray-900 mb-5">+1 (888) 123-4567</p>
                    </div>
                </div>

                <div class="flex items-center">
                  
                <img className='w-7  mr-5' src={mail} alt='mobile'/>
                    <div>
                        <p class=" text-gray-500 mb-3">Email Address</p>
                        <p class="text-gray-700">info@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
}