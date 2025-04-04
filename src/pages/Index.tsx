
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ActivityList } from '@/components/ActivityList';
import { PopularGuides } from '@/components/PopularGuides';
import { ExamGuides } from '@/components/ExamGuides';
import { ArticleCard } from '@/components/ArticleCard';
import { ScholarshipCard } from '@/components/ScholarshipCard';
import { ResourcesSection } from '@/components/ResourcesSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Index = () => {
  const articles = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc2d745f555f60955dbedd15ae542e61bb801ce",
      title: "Study in Dubai: Is it better than USA or UK?",
      author: "Priya Garg",
      date: "Apr 1 2025",
      slug: "study-in-dubai"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc63fcf6bff3db7b15bd99d781dbeae5f10f64",
      title: "Top 10 scholarships for International Students",
      author: "Anna Sharma",
      date: "Apr 2 2025",
      slug: "top-scholarships"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/91071d9d95d54f7a242e75102e20f2e4faae89b2",
      title: "How to write SOP?",
      author: "Rishi Kumar",
      date: "Apr 3 2025",
      slug: "how-to-write-sop"
    }
  ];

  const scholarships = [
    {
      title: "ABC Scholarship",
      provider: "ABC University",
      amount: "$10,000",
      deadline: "30 May, 2025",
      universities: "All universities",
      awardees: 10,
      slug: "abc-scholarship"
    },
    {
      title: "XYZ Scholarship",
      provider: "XYZ Foundation",
      amount: "$5,000",
      deadline: "15 June, 2025",
      universities: "Selected universities",
      awardees: 5,
      slug: "xyz-scholarship"
    },
    {
      title: "Global Education Fund",
      provider: "Global Foundation",
      amount: "$15,000",
      deadline: "1 July, 2025",
      universities: "Any university",
      awardees: 20,
      slug: "global-education-fund"
    }
  ];

  // Sample exam guides for the carousel
  const examGuides = [
    {
      name: "IELTS",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/abc123",
      color: "#2196F3"
    },
    {
      name: "TOEFL",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/def456",
      color: "#F44336"
    },
    {
      name: "GRE",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/ghi789",
      color: "#4CAF50"
    },
    {
      name: "GMAT",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/jkl012",
      color: "#9C27B0"
    },
    {
      name: "SAT",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/mno345",
      color: "#FF9800"
    }
  ];

  // Popular articles with locations for the grid
  const popularArticles = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1b2c3d4",
      title: "New York City",
      description: "Explore top universities in NYC"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6g7h8",
      title: "Boston",
      description: "Home to Harvard and MIT"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/i9j0k1l2",
      title: "San Francisco",
      description: "Tech hub with Stanford nearby"
    }
  ];

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="container mx-auto py-6 px-5">
        <HeroSection />
        
        <div className="mt-8 flex justify-center">
          <ActivityList />
        </div>
        
        <div className="mt-16 bg-white py-10 rounded-lg shadow-sm">
          <PopularGuides />
        </div>
        
        {/* Exam Guide Icons Section */}
        <div className="mt-16 px-[136px] max-md:px-10 max-sm:px-5 py-10 bg-white rounded-lg shadow-sm">
          <h2 className="text-[32px] font-semibold mb-6 text-[#333]">Explore competitive exam guides</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {examGuides.map((exam, index) => (
              <Link 
                key={index} 
                to={`/exams/${exam.name.toLowerCase()}`}
                className="flex flex-col items-center gap-2 group"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110"
                  style={{ backgroundColor: exam.color }}
                >
                  <span className="text-white font-bold">{exam.name.substring(0, 2)}</span>
                </div>
                <span className="text-sm font-medium">{exam.name}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Popular Articles Locations Grid */}
        <div className="mt-16 px-[136px] max-md:px-10 max-sm:px-5 bg-white py-10 rounded-lg shadow-sm">
          <h2 className="text-[32px] font-semibold mb-8 text-[#333]">Popular & trending articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Link 
                key={index}
                to={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative h-48 rounded-lg overflow-hidden group"
              >
                <img 
                  src={article.image || `https://source.unsplash.com/random/400x300?${article.title}`} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-semibold mb-1">{article.title}</h3>
                  <p className="text-white/80 text-sm">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <ExamGuides />
        </div>
        
        {/* Articles Section */}
        <div className="mt-16 px-[136px] max-md:px-10 max-sm:px-5 bg-white py-10 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[32px] font-semibold text-[#333]">Articles for you</h2>
            <Button 
              asChild
              variant="outline" 
              className="flex items-center gap-2 text-[#022859] hover:text-[#F7A61C] border-[#022859] hover:border-[#F7A61C]"
            >
              <Link to="/articles">
                View all 
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard 
                key={index}
                image={article.image}
                title={article.title}
                author={article.author}
                date={article.date}
                slug={article.slug}
              />
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-[54px] h-[54px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-[24px] h-[24px]" />
            </button>
            <button className="w-[54px] h-[54px] bg-[#868686] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <ChevronRight className="w-[24px] h-[24px] text-white" />
            </button>
          </div>
        </div>
        
        {/* Blue Banner Section */}
        <div className="mt-16 bg-[#022859] text-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Predict your IELTS, TOEFL, and PTE score in 10+ tests</h2>
              <p className="text-white/80 mb-6">Take a free mock test and get an instant score prediction based on AI analysis</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/exams/ielts" className="bg-white text-[#022859] px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">IELTS</Link>
                <Link to="/exams/toefl" className="bg-white text-[#022859] px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">TOEFL</Link>
                <Link to="/exams/pte" className="bg-white text-[#022859] px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">PTE</Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[300px]">
              <h3 className="text-lg font-semibold text-[#022859] mb-4">Book your test today</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col">
                  <label className="text-xs text-gray-500 mb-1">Exam</label>
                  <select className="border border-gray-300 rounded-md p-2 text-sm">
                    <option>IELTS</option>
                    <option>TOEFL</option>
                    <option>PTE</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs text-gray-500 mb-1">City</label>
                  <select className="border border-gray-300 rounded-md p-2 text-sm">
                    <option>New York</option>
                    <option>Boston</option>
                    <option>San Francisco</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-[#F7A61C] text-white font-medium py-2 rounded-full hover:bg-[#e69400] transition-colors">
                Check Dates
              </button>
            </div>
          </div>
        </div>
        
        {/* Counseling Section */}
        <div className="mt-16 px-[136px] max-md:px-10 max-sm:px-5 bg-white py-10 rounded-lg shadow-sm">
          <h2 className="text-[32px] font-semibold text-center mb-8 text-[#333]">Get free counseling for university shortlisting, admissions and visa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Application Process</h3>
              <p className="text-gray-600 text-sm">Get expert guidance on the complete application process for your dream university</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Scholarship Tips</h3>
              <p className="text-gray-600 text-sm">Learn how to maximize your chances of getting scholarships and financial aid</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visa Guidance</h3>
              <p className="text-gray-600 text-sm">Get step-by-step help with visa application and interview preparation</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-[#F7A61C] hover:bg-[#e69400] text-white rounded-full px-8">
              <Link to="/counselling">Book Free Counseling</Link>
            </Button>
          </div>
        </div>
        
        {/* Scholarships Section */}
        <div className="mt-16 px-[136px] max-md:px-10 max-sm:px-5 bg-white py-10 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[32px] font-semibold text-[#333]">Scholarships for you</h2>
            <Button 
              asChild
              variant="outline" 
              className="flex items-center gap-2 text-[#022859] hover:text-[#F7A61C] border-[#022859] hover:border-[#F7A61C]"
            >
              <Link to="/scholarships">
                View all 
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <ScholarshipCard 
                key={index}
                title={scholarship.title}
                provider={scholarship.provider}
                amount={scholarship.amount}
                deadline={scholarship.deadline}
                universities={scholarship.universities}
                awardees={scholarship.awardees}
                slug={scholarship.slug}
              />
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-[54px] h-[54px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-[24px] h-[24px]" />
            </button>
            <button className="w-[54px] h-[54px] bg-[#868686] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <ChevronRight className="w-[24px] h-[24px] text-white" />
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <ResourcesSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
