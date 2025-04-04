
import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] bg-[linear-gradient(90deg,#022859_0%,rgba(2,40,89,0.8)_70%,rgba(2,40,89,0.7)_100%)] px-[115px] py-[23px] rounded-[15px] shadow-lg overflow-hidden max-md:px-10 max-sm:px-5">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-[url('https://placehold.co/600x400?text=Pattern')] bg-no-repeat bg-cover"></div>
      </div>
      
      <nav className="flex justify-between items-center relative z-10">
        <div className="text-[32px] font-bold text-white">LOGO</div>
        <div className="flex items-center gap-9 max-md:hidden">
          <a href="#" className="text-[15px] text-white hover:text-[#F7A61C] transition-colors">
            COUNTRIES
          </a>
          <a href="#" className="text-[15px] text-white hover:text-[#F7A61C] transition-colors">
            EXAMS
          </a>
          <a href="#" className="text-[15px] text-white hover:text-[#F7A61C] transition-colors">
            COLLEGES
          </a>
          <a href="#" className="text-[15px] text-white hover:text-[#F7A61C] transition-colors">
            FINANCES
          </a>
          <a href="#" className="text-[15px] text-white hover:text-[#F7A61C] transition-colors">
            APPLY
          </a>
          <a href="#" className="text-[15px] text-white hover:text-[#F7A61C] transition-colors">
            STUDY IN INDIA
          </a>
          <a href="#" className="text-[15px] text-white hover:text-[#F7A61C] transition-colors">
            CONTACT
          </a>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-[15px] text-black w-[99px] h-[30px] bg-white hover:bg-[#F7A61C] hover:text-white transition-colors rounded-[5px]">
            Log in
          </button>
          <button className="hidden max-md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className="max-w-[741px] mt-[90px] relative z-10">
        <h1 className="text-[38px] font-bold text-white mb-6 leading-tight">
          Top Study Abroad Consultants, Universities, Courses, Exams
        </h1>
        <div className="text-2xl text-white mb-8 opacity-90">
          <span className="bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded mr-2">52 countries</span> •
          <span className="bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded mx-2">2K+ universities</span> •
          <span className="bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded mx-2">89K+ courses</span> •
          <span className="bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded ml-2">4K+ scholarships</span>
        </div>
        <div className="flex items-center w-full max-w-[581px] h-[52px] bg-white rounded-[25px] shadow-lg">
          <div className="flex items-center gap-2.5 flex-1 px-[15px]">
            <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#888"
              />
            </svg>
            <input
              type="text"
              placeholder="Search college, exam, countries and more."
              className="flex-1 text-sm text-[#57625E] outline-none"
            />
          </div>
          <button className="w-[120px] h-full bg-[#F7A61C] hover:bg-[#e69400] text-lg font-semibold text-white rounded-r-[25px] transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
