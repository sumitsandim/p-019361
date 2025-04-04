import React from "react";

interface GuideCardProps {
  image: string;
  title: string;
  description: string;
  views: number;
}

const GuideCard: React.FC<GuideCardProps> = ({
  image,
  title,
  description,
  views,
}) => {
  return (
    <div className="w-[376px] h-[439px] flex-[shrink] bg-white border overflow-hidden rounded-[20px] border-[#E1E1E1]">
      <img
        src={image}
        alt={title}
        className="w-[346px] h-[181px] mx-[15px] mt-[15px] rounded-[15px]"
      />
      <div className="p-[22px]">
        <h3 className="text-lg font-semibold mb-3.5">{title}</h3>
        <p className="text-sm text-[#868686] mb-4">{description}</p>
        <div className="flex items-center gap-2 mb-[26px]">
          <svg className="w-[20px] h-[14px]" viewBox="0 0 22 16" fill="none">
            <path
              d="M20.544 7.045C20.848 7.471 21 7.685 21 8C21 8.316 20.848 8.529 20.544 8.955C19.178 10.871 15.689 15 11 15C6.31 15 2.822 10.87 1.456 8.955C1.152 8.529 1 8.315 1 8C1 7.684 1.152 7.471 1.456 7.045C2.822 5.129 6.311 1 11 1C15.69 1 19.178 5.13 20.544 7.045Z"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8Z"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-[#868686]">{views} views</span>
        </div>
        <button className="w-[218px] h-10 bg-[#F7A61C] text-base font-semibold text-white mx-auto rounded-[20px] block">
          Download
        </button>
      </div>
    </div>
  );
};

export const PopularGuides = () => {
  const guides = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/15ea6bc050dc4ea3207240cf45c61c54da240529",
      title: "ICICI Bank Education Loan 2025: A Complete Guide",
      description:
        "Want to purseue higher education and are worried about finance? ICICI Bank offers education loan up....",
      views: 19,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/14ea779d95f1403c6e9c7709c5c076b905148bb4",
      title: "ICICI Bank Education Loan 2025: A Complete Guide",
      description:
        "Want to purseue higher education and are worried about finance? ICICI Bank offers education loan up....",
      views: 19,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0842035830e48a8a5ae9ed4dfffd852642819352",
      title: "ICICI Bank Education Loan 2025: A Complete Guide",
      description:
        "Want to purseue higher education and are worried about finance? ICICI Bank offers education loan up....",
      views: 19,
    },
  ];

  return (
    <section className="px-[136px] max-md:px-10 max-sm:px-5">
      <h2 className="text-[32px] font-semibold mb-6">
        Most popular student guides
      </h2>
      <div className="flex gap-5 overflow-x-auto pb-5 max-md:flex-wrap">
        {guides.map((guide, index) => (
          <GuideCard key={index} {...guide} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-5">
        <button className="w-[54px] h-[54px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center">
          <svg className="w-[24px] h-[24px]" viewBox="0 0 62 62" fill="none">
            <path
              d="M36 37.9568L34.0666 40L23.5357 28.8647C23.3659 28.6863 23.2312 28.4741 23.1393 28.2404C23.0473 28.0067 23 27.756 23 27.5029C23 27.2498 23.0473 26.9991 23.1393 26.7654C23.2312 26.5317 23.3659 26.3195 23.5357 26.1411L34.0666 15L35.9982 17.0432L26.1142 27.5L36 37.9568Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="w-[54px] h-[54px] bg-[#868686] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center">
          <svg className="w-[24px] h-[24px]" viewBox="0 0 62 62" fill="none">
            <path
              d="M26 17.0432L27.9334 15L38.4643 26.1353C38.6341 26.3137 38.7688 26.5259 38.8607 26.7596C38.9527 26.9933 39 27.244 39 27.4971C39 27.7502 38.9527 28.0009 38.8607 28.2346C38.7688 28.4683 38.6341 28.6805 38.4643 28.8589L27.9334 40L26.0018 37.9568L35.8858 27.5L26 17.0432Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
