
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
import { Search, Filter, ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[600px]">
                  <div className="grid grid-cols-3 gap-3 p-4">
                    <div className="col-span-3 mb-3">
                      <h3 className="font-semibold text-[#022859] mb-2">Popular Countries</h3>
                      <div className="h-[1px] bg-gray-200"></div>
                    </div>
                    <Link to="/countries/usa" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b3e1fa6cf65b75dab1a5fd07a93f36a09a6f2b78be1b3fcbf0bac74b1a2d92" className="w-6 h-4 object-cover rounded-sm" alt="USA" />
                      USA
                    </Link>
                    <Link to="/countries/uk" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01f889a33c6cfb5af1a369ba8a9df4f35ba83d67a33fd1bce72c1e5a3ba87d41" className="w-6 h-4 object-cover rounded-sm" alt="UK" />
                      UK
                    </Link>
                    <Link to="/countries/canada" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed8c9a81dfe0fb6ca93ca85dbb61d7e6060cf4b974b23f14a3d7091d11d2349a" className="w-6 h-4 object-cover rounded-sm" alt="Canada" />
                      Canada
                    </Link>
                    <Link to="/countries/australia" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8c4cde33e55b8e7e72e24b3a3cf470b69c48a4b4ec8d35d94bfe5b0b6c38b3f" className="w-6 h-4 object-cover rounded-sm" alt="Australia" />
                      Australia
                    </Link>
                    <Link to="/countries/germany" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0daf9e071b87c9c0e5b1fccc7d9e1b23b9efdcc4f7a93b4ce0edd79a46db75" className="w-6 h-4 object-cover rounded-sm" alt="Germany" />
                      Germany
                    </Link>
                    <Link to="/countries/france" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9b5e5ed0f06b3cee7c20f2e1eb8231f11b3c0d34f5ae92b2b01215ebe8f66c3" className="w-6 h-4 object-cover rounded-sm" alt="France" />
                      France
                    </Link>
                    <div className="col-span-3 mt-2">
                      <Button asChild variant="link" className="text-[#F7A61C] p-0 h-auto">
                        <Link to="/countries">View all countries →</Link>
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#F7A61C] hover:bg-white/10 focus:bg-white/10">EXAMS</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[500px]">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <div className="col-span-2 mb-3">
                      <h3 className="font-semibold text-[#022859] mb-2">Popular Exams</h3>
                      <div className="h-[1px] bg-gray-200"></div>
                    </div>
                    <Link to="/exams/ielts" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xs font-bold">IE</span>
                      IELTS
                    </Link>
                    <Link to="/exams/toefl" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">TO</span>
                      TOEFL
                    </Link>
                    <Link to="/exams/gre" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-xs font-bold">GR</span>
                      GRE
                    </Link>
                    <Link to="/exams/gmat" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 text-xs font-bold">GM</span>
                      GMAT
                    </Link>
                    <Link to="/exams/sat" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 text-xs font-bold">SA</span>
                      SAT
                    </Link>
                    <Link to="/exams/pte" className="font-medium hover:text-[#F7A61C] flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xs font-bold">PT</span>
                      PTE
                    </Link>
                    <div className="col-span-2 mt-2">
                      <Button asChild variant="link" className="text-[#F7A61C] p-0 h-auto">
                        <Link to="/exams">View all exams →</Link>
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#F7A61C] hover:bg-white/10 focus:bg-white/10">COLLEGES</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[700px]">
                  <div className="grid grid-cols-3 gap-3 p-4">
                    <div className="col-span-3 mb-3">
                      <h3 className="font-semibold text-[#022859] mb-2">College Types</h3>
                      <div className="h-[1px] bg-gray-200"></div>
                    </div>
                    <Link to="/colleges/top-universities" className="font-medium hover:text-[#F7A61C]">Top Universities</Link>
                    <Link to="/colleges/public-universities" className="font-medium hover:text-[#F7A61C]">Public Universities</Link>
                    <Link to="/colleges/private-universities" className="font-medium hover:text-[#F7A61C]">Private Universities</Link>
                    <Link to="/colleges/community-colleges" className="font-medium hover:text-[#F7A61C]">Community Colleges</Link>
                    <Link to="/colleges/liberal-arts" className="font-medium hover:text-[#F7A61C]">Liberal Arts Colleges</Link>
                    <Link to="/colleges/ivy-league" className="font-medium hover:text-[#F7A61C]">Ivy League Schools</Link>
                    
                    <div className="col-span-3 mt-2 mb-3">
                      <h3 className="font-semibold text-[#022859] mb-2">Popular Universities</h3>
                      <div className="h-[1px] bg-gray-200"></div>
                    </div>
                    
                    <Link to="/colleges/harvard" className="font-medium hover:text-[#F7A61C]">Harvard University</Link>
                    <Link to="/colleges/mit" className="font-medium hover:text-[#F7A61C]">MIT</Link>
                    <Link to="/colleges/stanford" className="font-medium hover:text-[#F7A61C]">Stanford University</Link>
                    <Link to="/colleges/oxford" className="font-medium hover:text-[#F7A61C]">Oxford University</Link>
                    <Link to="/colleges/cambridge" className="font-medium hover:text-[#F7A61C]">Cambridge University</Link>
                    <Link to="/colleges/toronto" className="font-medium hover:text-[#F7A61C]">University of Toronto</Link>
                    
                    <div className="col-span-3 mt-2">
                      <Button asChild variant="link" className="text-[#F7A61C] p-0 h-auto">
                        <Link to="/colleges">View all colleges →</Link>
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-[#F7A61C] hover:bg-white/10 focus:bg-white/10">FINANCES</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white p-4 rounded-md shadow-lg w-[500px]">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <div className="col-span-2 mb-3">
                      <h3 className="font-semibold text-[#022859] mb-2">Financial Options</h3>
                      <div className="h-[1px] bg-gray-200"></div>
                    </div>
                    <Link to="/finances/scholarships" className="font-medium hover:text-[#F7A61C]">Scholarships</Link>
                    <Link to="/finances/loans" className="font-medium hover:text-[#F7A61C]">Education Loans</Link>
                    <Link to="/finances/living-costs" className="font-medium hover:text-[#F7A61C]">Living Costs</Link>
                    <Link to="/finances/part-time-jobs" className="font-medium hover:text-[#F7A61C]">Part-time Jobs</Link>
                    <Link to="/finances/visa-costs" className="font-medium hover:text-[#F7A61C]">Visa & Application Costs</Link>
                    <Link to="/finances/financial-aid" className="font-medium hover:text-[#F7A61C]">Financial Aid</Link>
                    <div className="col-span-2 mt-2">
                      <Button asChild variant="link" className="text-[#F7A61C] p-0 h-auto">
                        <Link to="/finances">Learn more about finances →</Link>
                      </Button>
                    </div>
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
        
        <Dialog>
          <div className="relative">
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
              
              <DialogTrigger asChild>
                <button 
                  type="button" 
                  className="flex items-center gap-1 px-3 border-l border-gray-200 h-full text-gray-600 hover:text-[#F7A61C]"
                  onClick={() => setIsFiltersOpen(true)}
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DialogTrigger>
              
              <button type="submit" className="w-[120px] h-full bg-[#F7A61C] hover:bg-[#e69400] text-lg font-semibold text-white rounded-r-[25px] transition-colors">
                Search
              </button>
            </form>
          </div>
          
          <DialogContent className="sm:max-w-[600px]">
            <div className="py-6">
              <h2 className="text-xl font-bold mb-6">Search Filters</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3 text-[#022859]">Country</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="country-usa" />
                      <label htmlFor="country-usa" className="text-sm cursor-pointer">USA</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="country-uk" />
                      <label htmlFor="country-uk" className="text-sm cursor-pointer">UK</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="country-canada" />
                      <label htmlFor="country-canada" className="text-sm cursor-pointer">Canada</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="country-australia" />
                      <label htmlFor="country-australia" className="text-sm cursor-pointer">Australia</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="country-germany" />
                      <label htmlFor="country-germany" className="text-sm cursor-pointer">Germany</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-[#022859]">Course Level</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="level-bachelors" />
                      <label htmlFor="level-bachelors" className="text-sm cursor-pointer">Bachelor's Degree</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="level-masters" />
                      <label htmlFor="level-masters" className="text-sm cursor-pointer">Master's Degree</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="level-phd" />
                      <label htmlFor="level-phd" className="text-sm cursor-pointer">PhD</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="level-diploma" />
                      <label htmlFor="level-diploma" className="text-sm cursor-pointer">Diploma</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="level-certificate" />
                      <label htmlFor="level-certificate" className="text-sm cursor-pointer">Certificate</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-[#022859]">Budget</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="budget-1" />
                      <label htmlFor="budget-1" className="text-sm cursor-pointer">Under $10,000 / year</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="budget-2" />
                      <label htmlFor="budget-2" className="text-sm cursor-pointer">$10,000 - $20,000 / year</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="budget-3" />
                      <label htmlFor="budget-3" className="text-sm cursor-pointer">$20,000 - $30,000 / year</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="budget-4" />
                      <label htmlFor="budget-4" className="text-sm cursor-pointer">$30,000 - $50,000 / year</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="budget-5" />
                      <label htmlFor="budget-5" className="text-sm cursor-pointer">$50,000+ / year</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-[#022859]">Field of Study</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-business" />
                      <label htmlFor="field-business" className="text-sm cursor-pointer">Business & Management</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-engineering" />
                      <label htmlFor="field-engineering" className="text-sm cursor-pointer">Engineering & Technology</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-arts" />
                      <label htmlFor="field-arts" className="text-sm cursor-pointer">Arts & Humanities</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-science" />
                      <label htmlFor="field-science" className="text-sm cursor-pointer">Natural Sciences</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="field-medical" />
                      <label htmlFor="field-medical" className="text-sm cursor-pointer">Medicine & Health</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end gap-3">
                <Button variant="outline">Clear All</Button>
                <Button className="bg-[#F7A61C] hover:bg-[#e69400]">Apply Filters</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
