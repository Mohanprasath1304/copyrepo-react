export default function Feature(){
    return<section class="bg-gray-50 flex justify-center items-center min-h-screen mb-20">

    <div class="bg-gradient-to-r from-indigo-900 to-blue-700  to-blue-700 xl:w-[1150px] xl:px-24 xl:pb-10 xl:pt-12 w-80 px-10 py-10 rounded-lg shadow-lg">
       <h2 className="text-center text-white font-bold mb-5">Contact Us</h2>
       <h1 className="text-center text-4xl text-white font-bold mb-9">Get in touch</h1>
       <form action="#" method="POST">
            <div class="mb-4">
                
                <input type="text" id="name" name="name" class="w-full placeholder-red-50 p-3 rounded bg-gradient-to-r from-blue-600 to-blue-600  to-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required/>
            </div>
            
            <div class="mb-4">
                
                <input type="email" id="email" name="email" class="w-full placeholder-red-50 p-3 rounded bg-gradient-to-r from-blue-600 to-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required/>
            </div>
            
            <div class="mb-4">
               
                <input type="tel" id="phone" name="phone" class="w-full placeholder-red-50 p-3 rounded bg-gradient-to-r from-blue-600 to-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" required/>
            </div>
            
            <div class="mb-4">
               
                <input type="text" id="company" name="company" class="w-full placeholder-red-50 p-3 rounded bg-gradient-to-r from-blue-600 to-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company Name" required/>
            </div>
            
            <div class="mb-6">
               
                <textarea id="message" name="message" class="w-full placeholder-red-50 p-3 rounded bg-gradient-to-r from-blue-600 to-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Your Message" required></textarea>
            </div>

            <div className="ml-20">
            <button type="submit" class="w-40  bg-gradient-to-r from-red-500 to-orange-400 text-white p-3 ml-[300px] rounded-lg font-bold text-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                Send Message
            </button>
            </div>
        </form>
    </div>

</section>
}