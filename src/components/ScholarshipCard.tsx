
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, DollarSign, Building, Users, Download } from "lucide-react";

interface ScholarshipCardProps {
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  universities: string;
  awardees: number;
  slug?: string;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  title,
  provider,
  amount,
  deadline,
  universities,
  awardees,
  slug = "",
}) => {
  const formattedSlug = slug || title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="w-[376px] bg-white border p-6 rounded-[20px] border-solid border-[#E1E1E1] hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-1.5 mb-[5px]">
        <h3 className="text-xl font-semibold">{title}</h3>
        <svg className="w-[22px] h-[22px] text-gray-500" viewBox="0 0 22 22" fill="none">
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
          <div className="text-base text-[#868686] mb-3 flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Amount offered
          </div>
          <div className="text-lg">{amount}</div>
        </div>
        <div>
          <div className="text-base text-[#868686] mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Application deadline
          </div>
          <div className="text-xl text-[#868686]">{deadline}</div>
        </div>
        <div>
          <div className="text-base text-[#868686] mb-3 flex items-center gap-2">
            <Building className="w-4 h-4" />
            Application for
          </div>
          <div className="text-lg">{universities}</div>
        </div>
        <div>
          <div className="text-base text-[#868686] mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            No. of Awardees
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg">{awardees}</span>
            <div className="w-[110px] h-6 bg-[#F2A74E] text-base rounded-[7px] flex items-center justify-center">
              Merit Based
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-6">
        <Link 
          to={`/scholarships/${formattedSlug}/brochure`} 
          className="w-[154px] h-11 border flex items-center justify-center gap-[9px] rounded-[22px] border-solid border-black hover:bg-black/5 transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Brochure</span>
        </Link>
        <Link 
          to={`/scholarships/${formattedSlug}`} 
          className="w-[154px] h-11 bg-[#F7A61C] text-base font-semibold text-white rounded-[22px] flex items-center justify-center hover:bg-[#e69400] transition-colors"
        >
          View & Apply
        </Link>
      </div>
    </div>
  );
};
