
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ResourcesSection = () => {
  const resources = [
    { 
      title: "Admission Essays", 
      icon: "📝", 
      description: "Learn how to write compelling essays that stand out to university admissions committees.",
      link: "/resources/essays"
    },
    { 
      title: "Student Visa", 
      icon: "🛂", 
      description: "Complete guide to student visa application, interview tips and required documents.",
      link: "/resources/visa"
    },
    { 
      title: "Letters of Recommendation", 
      icon: "📋", 
      description: "Tips for securing strong recommendation letters from professors and employers.",
      link: "/resources/lor"
    },
    { 
      title: "Statement of Purpose", 
      icon: "📄", 
      description: "Step-by-step guide to writing an impactful statement of purpose for your application.",
      link: "/resources/sop"
    },
  ];

  return (
    <section className="px-[136px] py-14 max-md:px-10 max-sm:px-5 bg-gradient-to-br from-white to-blue-50">
      <h2 className="text-[32px] font-semibold text-center mb-3.5 text-[#333]">
        Resources for you
      </h2>
      <p className="text-xl text-center mb-[60px] text-[#666]">
        Learn the process in simple steps with these guides handpicked for you
      </p>
      <div className="flex gap-[30px] justify-center flex-wrap">
        {resources.map((resource, index) => (
          <Card 
            key={index} 
            className="w-[270px] border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
          >
            <CardContent className="flex flex-col items-center p-8">
              <div className="w-[120px] h-[120px] bg-blue-100 rounded-full flex items-center justify-center mb-4 text-5xl">
                {resource.icon}
              </div>
              <h3 className="text-xl font-medium text-center text-[#022859] mb-3">{resource.title}</h3>
              <p className="text-sm text-[#666] text-center mb-5">{resource.description}</p>
              <Button 
                asChild
                className="bg-[#F7A61C] hover:bg-[#e69400] text-white rounded-full w-full"
              >
                <Link to={resource.link}>View Guide</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
