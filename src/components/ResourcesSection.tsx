
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ResourcesSection = () => {
  const resources = [
    { title: "Admission Essays", icon: "essay-icon" },
    { title: "Student Visa", icon: "visa-icon" },
    { title: "LOR", icon: "lor-icon" },
    { title: "SOP", icon: "sop-icon" },
  ];

  return (
    <section className="px-[136px] py-14 max-md:px-10 max-sm:px-5 bg-white">
      <h2 className="text-[32px] font-semibold text-center mb-3.5 text-[#333]">
        Resources for you
      </h2>
      <p className="text-xl text-center mb-[60px] text-[#666]">
        Learn the process in simple steps with these guides handpicked for you
      </p>
      <div className="flex gap-[30px] justify-center flex-wrap">
        {resources.map((resource, index) => (
          <Card key={index} className="w-[210px] border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col items-center p-8">
              <div className="w-[120px] h-[120px] bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <img
                  src={`https://placehold.co/79x90?text=${resource.title}`}
                  alt={resource.title}
                  className="w-[79px] h-[90px]"
                />
              </div>
              <h3 className="text-lg font-medium text-center text-[#333]">{resource.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
