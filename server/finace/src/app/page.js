import Footer from "@/Components/Fotter/Footer";
import Navbar from "@/Components/Navbar/Navbar";



export default function Home() {
  return (
    
    <div>
     
     <Navbar/>
     
     <main className="flex-col" >
      
     <section className="bg-[#302c42] h-115 overflow-hidden pb-9 px-4 md:px-8">
  
  <section className="relative  flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-9 md:gap-4 max-w-[1300px] py-4  my-12">
    <svg width={736} height={423} className="absolute top-[50px] sm:top-[200px] sm:right-[-150px]" viewBox="0 0 736 423" fill="none">
      <path d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5" stroke="url(#paint0_linear_16_172)" strokeWidth={6} />
      <defs>
        <linearGradient id="paint0_linear_16_172" x1="700.5" y1="-3.99998" x2="14.5" y2={361} gradientUnits="userSpaceOnUse">
          <stop stopColor="#343045" />
          <stop offset="0.213542" stopColor="#C0B7E8" />
          <stop offset="0.71875" stopColor="#8176AF" />
          <stop offset={1} stopColor="#343045" />
        </linearGradient>
      </defs>
    </svg><svg className="absolute sm:right-28 md:right-6" width={383} height={846} viewBox="0 0 383 846" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845" stroke="url(#paint0_linear_16_173)" strokeWidth={6} />
      <defs>
        <linearGradient id="paint0_linear_16_173" x1="16.5" y1="39.5" x2={363} y2={814} gradientUnits="userSpaceOnUse">
          <stop offset="0.0104167" stopColor="#343045" />
          <stop offset="0.229167" stopColor="#C0B7E8" />
          <stop offset="0.776042" stopColor="#8176AF" />
          <stop offset={1} stopColor="#343045" />
        </linearGradient>
      </defs>
    </svg><svg className="absolute -top-14 sm:right-7" width={416} height={675} viewBox="0 0 416 675" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672" stroke="url(#paint0_linear_16_171)" strokeWidth={6} />
      <defs>
        <linearGradient id="paint0_linear_16_171" x1="365.5" y1={28} x2={110} y2={594} gradientUnits="userSpaceOnUse">
          <stop stopColor="#343045" />
          <stop offset="0.276042" stopColor="#8176AF" />
          <stop offset="0.739583" stopColor="#C0B7E8" />
          <stop offset={1} stopColor="#343045" />
        </linearGradient>
      </defs>
    </svg>
    <div className="md:w-[520px]  z-20">
      <h1 className="text-3xl md:text-[56px] lg:text-[66px] leading-[56px] text-white font-bold">
        <span className="text-[#C0B7E8]">Dive </span>Into The Depths
        Of<span className="text-[#C0B7E8]"> Virtual Reality</span></h1>
      <p className="text-base text-white mt-4 md:mt-9 mb-10 md:mb-16">Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris
        eros in vitae .</p>
      <div className="flex gap-6 sm:gap-10">
        <button className="uppercase font-bold text-xs rounded-[40px] py-2 lg:py-4 px-4 lg:px-9 text-[#302c42]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">BUILD YOUR WORLD</button><svg className="w-8 h-6 sm:w-12 sm:h-9" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.8334 19L2.16669 19M43.8334 19L27.1667 35.6667M43.8334 19L27.1667 2.33333" stroke="#C0B7E8" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </svg></div>
    </div>
    <div className="p-5 z-20 bg-black rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] bg-opacity-20"><img className="max-w-[590px] w-full" src="https://iili.io/39E0tiQ.png" alt="" />
    </div>
  </section>
  
</section>

      </main>
      <Footer/>
    </div>
  );
}
