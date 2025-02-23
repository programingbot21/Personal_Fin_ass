const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="flex relative z-30 justify-center sm:justify-between gap-5 items-center mt-6 mx-auto  max-w-[1300px]  rounded-[90px] py-3 px-3 sm:p-8 lg:p-14 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]">
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden flex-none">
      <path d="M14.5 18.25L8.25 12L14.5 5.75M0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="flex sm:flex-1 gap-4 lg:gap-6"><svg width={42} height={63} viewBox="0 0 42 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none">
        <path fillRule="evenodd" clipRule="evenodd" d="M21 0.833344C32.2758 0.833344 41.4166 9.9742 41.4166 21.25C41.4166 24.6593 40.5834 27.8717 39.1039 30.6983L21 62.0833L3.31538 31.4595C1.57498 28.4542 0.583313 24.9693 0.583313 21.25C0.583313 9.9742 9.72416 0.833344 21 0.833344ZM21 6.66668C12.9458 6.66668 6.41665 13.1959 6.41665 21.25C6.41665 23.566 6.95093 25.7882 7.96198 27.7943L8.45197 28.6893L21 50.4167L33.6366 28.5362C34.9071 26.3423 35.5833 23.8555 35.5833 21.25C35.5833 13.1959 29.0541 6.66668 21 6.66668ZM21 12.5C25.8325 12.5 29.75 16.4175 29.75 21.25C29.75 26.0825 25.8325 30 21 30C16.1675 30 12.25 26.0825 12.25 21.25C12.25 16.4175 16.1675 12.5 21 12.5ZM21 18.3333C19.3891 18.3333 18.0833 19.6392 18.0833 21.25C18.0833 22.8608 19.3891 24.1667 21 24.1667C22.6108 24.1667 23.9166 22.8608 23.9166 21.25C23.9166 19.6392 22.6108 18.3333 21 18.3333Z" fill="#C0B7E8" />
      </svg>
      <div className="text-white">
        <h2 className="hidden sm:inline-block text-2xl font-bold ">Pay Us a Visit</h2>
        <p className="text-sm mt-3">Union St, Seattle, WA 98101, United States</p>
      </div>
    </div><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:hidden flex-none">
      <path d="M9.5 18.25L15.75 12L9.5 5.75M23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg><span className="h-28 w-[1px] hidden sm:inline-block bg-[#C0B7E8] " />
    <div className="hidden sm:flex flex-1 gap-4 lg:gap-6"><svg width={51} height={51} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.6458 11.9792C33.458 12.3327 35.2569 13.1319 36.5625 14.4375C37.8681 15.7431 38.6673 17.542 39.0208 19.3542M32.875 3.375C36.64 3.79326 40.028 5.61471 42.7083 8.29167C45.3887 10.9686 47.202 14.3605 47.625 18.125M47.6237 36.5051V43.1666C47.634 45.7131 45.3443 47.8395 42.7734 47.6077C20.5835 47.625 3.37515 30.2568 3.39252 8.21591C3.16097 5.65866 5.27686 3.37761 7.82008 3.37522H14.4948C15.5746 3.36461 16.6214 3.74621 17.4401 4.4489C19.7676 6.44667 21.2648 13.2274 20.6887 15.923C20.239 18.0276 18.1175 19.4999 16.6752 20.9394C19.8425 26.4985 24.4545 31.1014 30.0247 34.2624C31.467 32.823 32.9423 30.7057 35.051 30.2568C37.7561 29.6811 44.5805 31.1803 46.5702 33.5241C47.2758 34.3552 47.6507 35.4161 47.6237 36.5051Z" stroke="#C0B7E8" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="text-white">
        <h2 className=" text-2xl font-bold ">Give Us a Call</h2>
        <p className="text-sm mt-3">(110) 1111-1010 </p>
      </div>
    </div><span className="hidden lg:inline-block h-28 w-[1px]  bg-[#C0B7E8] " />
    <div className="hidden  lg:flex flex-1 gap-4 lg:gap-6"><svg width={55} height={45} viewBox="0 0 55 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.91825 4.33491C4.40836 3.8448 5.08545 3.54166 5.83333 3.54166H49.1667C49.9146 3.54166 50.5916 3.8448 51.0817 4.33491M3.91825 4.33491C3.42814 4.82502 3.125 5.50211 3.125 6.24999V38.75C3.125 40.2458 4.33756 41.4583 5.83333 41.4583H49.1667C50.6624 41.4583 51.875 40.2458 51.875 38.75V6.24999C51.875 5.5021 51.5719 4.82502 51.0817 4.33491M3.91825 4.33491L23.6698 24.0864C25.7852 26.2017 29.2148 26.2017 31.3302 24.0864L51.0817 4.33491" stroke="#C0B7E8" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="text-white">
        <h2 className=" text-2xl font-bold ">Send Us a Message</h2>
        <p className="text-sm mt-3">Contact@HydraVTech.com</p>
      </div>
    </div>
  </div>
      </footer>
    );
  };
  
  export default Footer;
  