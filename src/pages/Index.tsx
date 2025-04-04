
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ActivityList } from '@/components/ActivityList';
import { PopularGuides } from '@/components/PopularGuides';
import { ExamGuides } from '@/components/ExamGuides';
import { ArticleCard } from '@/components/ArticleCard';
import { ScholarshipCard } from '@/components/ScholarshipCard';
import { ResourcesSection } from '@/components/ResourcesSection';

const Index = () => {
  const articles = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc2d745f555f60955dbedd15ae542e61bb801ce",
      title: "Study in Dubai: Is it better than USA or UK?",
      author: "Priya Garg",
      date: "Apr 1 2025"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc63fcf6bff3db7b15bd99d781dbeae5f10f64",
      title: "Top 10 scholarships for International Students",
      author: "Anna Sharma",
      date: "Apr 2 2025"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/91071d9d95d54f7a242e75102e20f2e4faae89b2",
      title: "How to write SOP?",
      author: "Rishi Kumar",
      date: "Apr 3 2025"
    }
  ];

  const scholarships = [
    {
      title: "ABC Scholarship",
      provider: "ABC University",
      amount: "$10,000",
      deadline: "30 May, 2025",
      universities: "All universities",
      awardees: 10
    },
    {
      title: "XYZ Scholarship",
      provider: "XYZ Foundation",
      amount: "$5,000",
      deadline: "15 June, 2025",
      universities: "Selected universities",
      awardees: 5
    },
    {
      title: "Global Education Fund",
      provider: "Global Foundation",
      amount: "$15,000",
      deadline: "1 July, 2025",
      universities: "Any university",
      awardees: 20
    }
  ];

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="container mx-auto py-10 px-5">
        <HeroSection />
        <div className="mt-10 flex justify-center">
          <ActivityList />
        </div>
        
        <div className="mt-16">
          <PopularGuides />
        </div>
        
        <div className="mt-16">
          <ExamGuides />
        </div>
        
        <div className="mt-16 px-[136px] max-md:px-10 max-sm:px-5">
          <h2 className="text-[32px] font-semibold mb-6">Articles for you</h2>
          <div className="flex gap-5 overflow-x-auto pb-5 max-md:flex-wrap">
            {articles.map((article, index) => (
              <ArticleCard 
                key={index}
                image={article.image}
                title={article.title}
                author={article.author}
                date={article.date}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 px-[136px] max-md:px-10 max-sm:px-5">
          <h2 className="text-[32px] font-semibold mb-6">Scholarships for you</h2>
          <div className="flex gap-5 overflow-x-auto pb-5 max-md:flex-wrap">
            {scholarships.map((scholarship, index) => (
              <ScholarshipCard 
                key={index}
                title={scholarship.title}
                provider={scholarship.provider}
                amount={scholarship.amount}
                deadline={scholarship.deadline}
                universities={scholarship.universities}
                awardees={scholarship.awardees}
              />
            ))}
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
