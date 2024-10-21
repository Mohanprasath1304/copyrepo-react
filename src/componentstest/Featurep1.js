import carv from '../assetstest/carv.jpg';
import round from '../assetstest/round.png';
export default function Featurep1(){
    return <body class="bg-sky-50">

    <section class="max-w-6xl mx-auto pt-20 pb-20 px-3 flex items-center space-x-8  ">
        <div class="w-1/2 pt-7">
            <h3 class="text-black-900 text-lg font-bold mb-2">Our History</h3>
            <h1 class="text-4xl font-bold text-black mb-6 leading-normal">Expertise In Diverse Business Verticals</h1>
            <p class="text-gray-500 mb-8 leading-relaxed">
                Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.
            </p>

            <div class="mb-6">
                <div class="flex items-start mb-4">
                <img src={round} alt='round'/> 
                    <div class="ml-4">
                        <h4 class="text-lg font-semibold">Technical Assessment</h4>
                        <p class="text-gray-400 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctu adipiscing elit ut elit tellus tellus

</p>
                    </div>
                </div>

                <div class="flex items-start mt-5 pt-3">
                <img src={round} alt='round'/>
                    <div class="ml-4">
                        <h4 class="text-lg font-semibold">Joint Collaboration</h4>
                        <p class="text-gray-400 leading-relaxed">Consectetur adipiscing adipiscing elit ut elit tellus elit ut elit tellus, luctu lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>

 
        <div class="feaimg">
        <img src={carv} alt='carv'/>
        </div>
    </section>
    <div class="bg-gradient-to-r from-violet-900 to-violet-600 pt-10 pb-10">
    
    <div class="boxmodel12" >
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center">
            <div>
                <h2 class="text-5xl font-bold mb-2">2,531</h2>
                <p class="text-lg">Project Finished</p>
            </div>
            <div>
                <h2 class="text-5xl font-bold mb-2">15+</h2>
                <p class="text-lg">Years Experience</p>
            </div>
            <div>
                <h2 class="text-5xl font-bold mb-2">280</h2>
                <p class="text-lg">Happy Clients</p>
            </div>
            <div>
                <h2 class="text-5xl font-bold mb-2">3,587</h2>
                <p class="text-lg">Recognition</p>
            </div>
        </div>
        </div>
    </div>

</body>
}