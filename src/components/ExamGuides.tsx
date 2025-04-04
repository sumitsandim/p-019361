import React from "react";

export const ExamGuides = () => {
  const examLogos = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb69d05d49134b380bc9a867cad2e81d851480ab", alt: "Exam Logo 1" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/37b7fc2562bf35aaef824da6a5b7ca1d6bf7f4c9", alt: "Exam Logo 2" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/08685eb528639058f6e4f92223ac2c6a20b112ed", alt: "Exam Logo 3" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8821c33736c936b658737ef502c47e683a6bca3b", alt: "Exam Logo 4" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/37c041b2da533988477b8dc487df3952b33a4c24", alt: "Exam Logo 5" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe0f7eab2ef652d9cad9198d5edfcaf054c0cccf", alt: "Exam Logo 6" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e01c90efa9518c30fd9059de52be262b1c3ab4b7", alt: "Exam Logo 7" },
  ];

  return (
    <section className="px-[136px] py-10 max-md:px-10 max-sm:px-5">
      <h2 className="text-[32px] font-semibold text-center mb-6">
        Explore competitive exam guides
      </h2>
      <div className="flex gap-[17px] overflow-x-auto pb-5">
        {examLogos.map((logo, index) => (
          <div
            key={index}
            className="w-[152px] h-[94px] flex-[shrink] bg-white shadow-[0px_3.42px_3.42px_rgba(0,0,0,0.25)] flex items-center justify-center rounded-[17px] border-[0.855px] border-[#E1E1E1]"
          >
            <img
              src={logo.image}
              alt={logo.alt}
              className="w-[70px] h-[70px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
