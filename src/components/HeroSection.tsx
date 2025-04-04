import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] bg-[linear-gradient(90deg,#022859_0%,rgba(2,40,89,0.58)_48.56%,rgba(2,40,89,0.12)_100%)] px-[115px] py-[23px] rounded-[25px] max-md:px-10 max-sm:px-5">
      <nav className="flex justify-between items-center">
        <div className="text-[32px] font-bold text-white">LOGO</div>
        <div className="flex items-center gap-9 max-md:hidden">
          <a href="#" className="text-[15px] text-white">
            COUNTRIES
          </a>
          <a href="#" className="text-[15px] text-white">
            EXAMS
          </a>
          <a href="#" className="text-[15px] text-white">
            COLLEGES
          </a>
          <a href="#" className="text-[15px] text-white">
            FINANCES
          </a>
          <a href="#" className="text-[15px] text-white">
            APPLY
          </a>
          <a href="#" className="text-[15px] text-white">
            STUDY IN INDIA
          </a>
          <a href="#" className="text-[15px] text-white">
            CONTACT
          </a>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-[15px] text-black w-[99px] h-[30px] bg-white rounded-[5px]">
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

      <div className="max-w-[741px] mt-[90px]">
        <h1 className="text-[32px] font-bold text-white mb-6">
          Top Study Abroad Consultants, Universities, Courses, Exams
        </h1>
        <div className="text-2xl text-white mb-6">
          52 countries • 2K+ universities • 89K+ courses • 4K+ scholarships
        </div>
        <div className="flex items-center w-full max-w-[581px] h-[46px] bg-white rounded-[25px]">
          <div className="flex items-center gap-2.5 flex-1 px-[15px]">
            <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="black"
              />
            </svg>
            <input
              type="text"
              placeholder="Search college, exam, countries and more."
              className="flex-1 text-sm text-[#57625E] outline-none"
            />
          </div>
          <button className="w-[117px] h-full bg-[#F7A61C] text-lg font-semibold text-white rounded-[54px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
