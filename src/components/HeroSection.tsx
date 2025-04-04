
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Here you would typically navigate to search results page
  };

  return (
    <div className="relative w-full min-h-[550px] bg-[linear-gradient(90deg,#022859_0%,rgba(2,40,89,0.9)_70%,rgba(2,40,89,0.85)_100%)] px-[115px] py-[23px] rounded-[15px] shadow-lg overflow-hidden max-md:px-10 max-sm:px-5">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-[url('https://images.shiksha.com/mediadata/images/1588142033phpE0hUxc.jpeg')] bg-no-repeat bg-cover"></div>
      </div>
      
      <nav className="flex justify-between items-center relative z-10 mb-8">
        <div className="text-[32px] font-bold text-white">EDUABROAD</div>
        
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#F7A61C] hover:bg-white/10 focus:bg-white/10">COUNTRIES</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[400px]">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <Link to="/countries/usa" className="font-medium hover:text-[#F7A61C]">USA</Link>
                    <Link to="/countries/uk" className="font-medium hover:text-[#F7A61C]">UK</Link>
                    <Link to="/countries/canada" className="font-medium hover:text-[#F7A61C]">Canada</Link>
                    <Link to="/countries/australia" className="font-medium hover:text-[#F7A61C]">Australia</Link>
                    <Link to="/countries/germany" className="font-medium hover:text-[#F7A61C]">Germany</Link>
                    <Link to="/countries/france" className="font-medium hover:text-[#F7A61C]">France</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#F7A61C] hover:bg-white/10 focus:bg-white/10">EXAMS</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[400px]">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <Link to="/exams/ielts" className="font-medium hover:text-[#F7A61C]">IELTS</Link>
                    <Link to="/exams/toefl" className="font-medium hover:text-[#F7A61C]">TOEFL</Link>
                    <Link to="/exams/gre" className="font-medium hover:text-[#F7A61C]">GRE</Link>
                    <Link to="/exams/gmat" className="font-medium hover:text-[#F7A61C]">GMAT</Link>
                    <Link to="/exams/sat" className="font-medium hover:text-[#F7A61C]">SAT</Link>
                    <Link to="/exams/pte" className="font-medium hover:text-[#F7A61C]">PTE</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#F7A61C] hover:bg-white/10 focus:bg-white/10">COLLEGES</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[400px]">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <Link to="/colleges/top-universities" className="font-medium hover:text-[#F7A61C]">Top Universities</Link>
                    <Link to="/colleges/public-universities" className="font-medium hover:text-[#F7A61C]">Public Universities</Link>
                    <Link to="/colleges/private-universities" className="font-medium hover:text-[#F7A61C]">Private Universities</Link>
                    <Link to="/colleges/community-colleges" className="font-medium hover:text-[#F7A61C]">Community Colleges</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#F7A61C] hover:bg-white/10 focus:bg-white/10">FINANCES</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[400px]">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <Link to="/finances/scholarships" className="font-medium hover:text-[#F7A61C]">Scholarships</Link>
                    <Link to="/finances/loans" className="font-medium hover:text-[#F7A61C]">Education Loans</Link>
                    <Link to="/finances/living-costs" className="font-medium hover:text-[#F7A61C]">Living Costs</Link>
                    <Link to="/finances/part-time-jobs" className="font-medium hover:text-[#F7A61C]">Part-time Jobs</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/apply" className="flex px-4 py-2 text-[15px] text-white hover:text-[#F7A61C] transition-colors">
                  APPLY
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/study-in-india" className="flex px-4 py-2 text-[15px] text-white hover:text-[#F7A61C] transition-colors">
                  STUDY IN INDIA
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="flex px-4 py-2 text-[15px] text-white hover:text-[#F7A61C] transition-colors">
                  CONTACT
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-5">
          <Link to="/login" className="text-[15px] text-black w-[99px] h-[30px] bg-white hover:bg-[#F7A61C] hover:text-white transition-colors rounded-[5px] flex items-center justify-center">
            Log in
          </Link>
          <button className="lg:hidden">
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

      <div className="max-w-[741px] mt-[60px] relative z-10">
        <h1 className="text-[42px] font-bold text-white mb-6 leading-tight">
          Top Study Abroad Consultants, Universities, Courses, Exams
        </h1>
        <div className="text-2xl text-white mb-8 opacity-90 flex flex-wrap gap-2">
          <span className="bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded mr-2">52 countries</span> •
          <span className="bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded mx-2">2K+ universities</span> •
          <span className="bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded mx-2">89K+ courses</span> •
          <span className="bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded ml-2">4K+ scholarships</span>
        </div>
        <form onSubmit={handleSearchSubmit} className="flex items-center w-full max-w-[581px] h-[52px] bg-white rounded-[25px] shadow-lg">
          <div className="flex items-center gap-2.5 flex-1 px-[15px]">
            <Search className="w-[24px] h-[24px] text-gray-500" />
            <input
              type="text"
              placeholder="Search college, exam, countries and more."
              className="flex-1 text-sm text-[#57625E] outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="w-[120px] h-full bg-[#F7A61C] hover:bg-[#e69400] text-lg font-semibold text-white rounded-r-[25px] transition-colors">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
