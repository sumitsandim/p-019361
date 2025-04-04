
import React from "react";
import { Link } from "react-router-dom";
import { Book, Award, User, ChevronRight } from "lucide-react";

export const ActivityList = () => {
  return (
    <div className="w-[772px] h-auto bg-white shadow-md rounded-[10px] p-5 max-md:w-full hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-5 text-[#333]">List of your activity</h2>
      <div className="flex gap-[15px] flex-wrap">
        <Link to="/my-courses" className="flex items-center gap-2.5 h-10 border px-[15px] rounded-[20px] border-[#E1E1E1] hover:border-[#F7A61C] hover:bg-[#F7A61C]/5 transition-all">
          <span className="text-base font-semibold text-[#F7A61C]">0</span>
          <span className="text-sm">My courses</span>
          <Book className="w-4 h-4 text-[#F7A61C]" />
        </Link>
        
        <Link to="/my-chances" className="flex items-center gap-2.5 h-10 border px-[15px] rounded-[20px] border-[#E1E1E1] hover:border-[#F7A61C] hover:bg-[#F7A61C]/5 transition-all">
          <span className="text-base font-semibold text-[#F7A61C]">0</span>
          <span className="text-sm">My chances</span>
          <Award className="w-4 h-4 text-[#F7A61C]" />
        </Link>
        
        <Link to="/counsellor" className="text-sm gap-2.5 h-10 border px-[15px] rounded-[20px] border-[#E1E1E1] flex items-center hover:border-[#F7A61C] hover:bg-[#F7A61C]/5 transition-all group">
          <User className="w-4 h-4 text-gray-500 group-hover:text-[#F7A61C]" />
          <span>No counsellor assigned</span>
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#F7A61C] group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <Link to="/auth" className="h-10 bg-[#022859] hover:bg-[#033a7a] text-sm font-semibold text-white px-5 rounded-[20px] transition-colors flex items-center">
          Log in / Sign up
        </Link>
      </div>
    </div>
  );
};
