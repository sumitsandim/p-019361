
import React from "react";

export const ResourcesSection = () => {
  const resources = [
    { title: "Admission Essays", icon: "essay-icon" },
    { title: "Student Visa", icon: "visa-icon" },
    { title: "LOR", icon: "lor-icon" },
    { title: "SOP", icon: "sop-icon" },
  ];

  return (
    <section className="px-[136px] py-10 max-md:px-10 max-sm:px-5">
      <h2 className="text-[32px] font-semibold text-center mb-3.5">
        Resources for you
      </h2>
      <p className="text-2xl text-center mb-[60px]">
        Learn the process in simple steps with these guides handpicked for you
      </p>
      <div className="flex gap-[30px] justify-center flex-wrap">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="w-[210px] h-[210px] bg-white border shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center rounded-full border-solid border-[#E1E1E1]"
          >
            {/* Using placeholder images since URL_10, etc. are not valid */}
            <img
              src={`https://placehold.co/79x90?text=${resource.title}`}
              alt={resource.title}
              className="w-[79px] h-[90px]"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-[30px] justify-center text-xl text-center mt-[30px]">
        {resources.map((resource, index) => (
          <div key={index} className="w-44">
            {resource.title}
          </div>
        ))}
      </div>
    </section>
  );
};
