import Display from '../assets/Display.jpg';
import M1 from '../assets/m1.png';
import M2 from '../assets/m2.png';
import M3 from '../assets/m3.png';
import M4 from '../assets/m4.png';
import M5 from '../assets/m5.png';
import M6 from '../assets/m6.png';
export default function About(){
    return <section className="custom-section"><nav className='hidden md:block '>
    <center>
    <div class="text-center text-white">
        <h2 class="text-sm font-bold uppercase tracking-wide mt-20 pb-5">Technology Solutions</h2>
        <h1 class="text-4xl md:text-4xl font-semibold mt-2">Better Website Means A Better</h1>
        <h1 class="txt12">User Experience</h1>
    </div>
    <table>
        <tr>
            <td>
            <div class="Box1">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M1} alt='m1'/>
      </div>
      <div>
        <h3 class="font-bold text-lg text-zinc-50">Latest Technology</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
            </td>
            <td>
            <div class="Box2">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M5} alt='m5'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">Media Marketing</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
            </td>
        </tr>
        <tr>
            <td>
            <div class="Box3">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M3} alt='m3'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">High Performance</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
            </td>
            <td class='imgcen'>
            <img src={Display} alt='Dispaly'/>
            </td>
            <td>
            <div class="Box4">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M4} alt='m4'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">Social Media</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
            </td>
        </tr>
        <tr>
            <td>
            <div class="Box5">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M2} alt='m2'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">Network Protection</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
            </td><td>
            <div class="Box6">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M6} alt='m6'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">Customer Support</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div></td>
        </tr>
    </table>
    </center>
    </nav>
   




  
    <nav className='block md:hidden block '>
      <div class='crow'>
    <center>
    <div class="text-center text-white">
        <h2 class="text-sm font-bold uppercase tracking-wide mt-20 pb-5">Technology Solutions</h2>
        <h1 class="text-4xl md:text-4xl font-semibold mt-2">Better Website Means A Better</h1>
        <h1 class="txt12">User Experience</h1>
    </div>
    <div class="Box1md">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M1} alt='m1'/>
      </div>
      <div>
        <h3 class="font-bold text-lg text-zinc-50">Latest Technology</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
  <div class="Box1md1">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M3} alt='m3'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">High Performance</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
  <div class="Box1md1">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M2} alt='m2'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">Network Protection</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
  <img class='imgcen mt-48' src={Display} alt='Dispaly'/>
  <div class="Box2md2">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img  src={M5} alt='m5'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">Media Marketing</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
  <div class="Box2md1">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M4} alt='m4'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">Social Media</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
  <div class="Box2md1">
            <div class="flex items-center space-x-4">
      <div class="bg-blue text-purple-800  pb-7 rounded-full">
      <img src={M6} alt='m6'/>
      </div>
      <div>
        <h3 class="font-semibold text-lg text-zinc-50">Customer Support</h3>
        <p class="text-sm text-slate-400">Simply dummy text of the printing and typesetting</p>
      </div>
    </div>
  </div>
    </center>
    </div>
    </nav>
    </section>
}
