import React from "react";

interface ScholarshipCardProps {
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  universities: string;
  awardees: number;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  title,
  provider,
  amount,
  deadline,
  universities,
  awardees,
}) => {
  return (
    <div className="w-[376px] bg-white border p-6 rounded-[20px] border-solid border-[#E1E1E1]">
      <div className="flex items-center gap-1.5 mb-[5px]">
        <h3 className="text-xl font-semibold">{title}</h3>
        <svg className="w-[22px] h-[22px]" viewBox="0 0 22 22" fill="none">
          <path
            d="M14.1873 11.8157L15.576 19.6312C15.5916 19.7232 15.5787 19.8178 15.539 19.9023C15.4994 19.9868 15.4348 20.0571 15.3541 20.104C15.2734 20.1508 15.1803 20.1719 15.0873 20.1644C14.9942 20.1569 14.9057 20.1212 14.8335 20.062L11.5519 17.5989C11.3934 17.4806 11.201 17.4166 11.0032 17.4166C10.8055 17.4166 10.613 17.4806 10.4546 17.5989L7.16743 20.0611C7.09531 20.1202 7.00689 20.1558 6.91397 20.1633C6.82105 20.1708 6.72805 20.1498 6.64737 20.1031C6.5667 20.0564 6.50219 19.9862 6.46244 19.9019C6.4227 19.8176 6.40961 19.7231 6.42493 19.6312L7.81277 11.8157"
            stroke="#868686"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="text-base text-[#868686] mb-2">by {provider}</div>
      <div className="my-5 border-t border-[#E1E1E1]" />
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-base text-[#868686] mb-3">Amount offered</div>
          <div className="text-lg">{amount}</div>
        </div>
        <div>
          <div className="text-base text-[#868686] mb-3">
            Application deadline
          </div>
          <div className="text-xl text-[#868686]">{deadline}</div>
        </div>
        <div>
          <div className="text-base text-[#868686] mb-3">Application for</div>
          <div className="text-lg">{universities}</div>
        </div>
        <div>
          <div className="text-base text-[#868686] mb-3">No. of Awardees</div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg">{awardees}</span>
            <div className="w-[110px] h-6 bg-[#F2A74E] text-base rounded-[7px] flex items-center justify-center">
              Merit Based
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-6">
        <button className="w-[154px] h-11 border flex items-center justify-center gap-[9px] rounded-[22px] border-solid border-black">
          <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z"
              fill="black"
            />
          </svg>
          <span>Brochure</span>
        </button>
        <button className="w-[154px] h-11 bg-[#F7A61C] text-base font-semibold text-white rounded-[22px]">
          View & Apply
        </button>
      </div>
    </div>
  );
};
