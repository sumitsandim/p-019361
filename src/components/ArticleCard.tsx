
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

interface ArticleCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  slug?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  author,
  date,
  slug = "",
}) => {
  return (
    <Link 
      to={`/articles/${slug || title.toLowerCase().replace(/\s+/g, '-')}`}
      className="block w-full max-w-[376px] h-auto bg-white border overflow-hidden rounded-[20px] border-[#E1E1E1] hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
    >
      <div className="relative h-full">
        <img src={image} alt={title} className="w-full h-[205px] object-cover" />
        <div className="p-4">
          <h3 className="text-[18px] font-medium text-[#2F1238] mb-3 line-clamp-2 hover:text-[#F7A61C] transition-colors">{title}</h3>
          <p className="text-[14px] text-gray-600 mb-4 line-clamp-3">
            Learn about studying opportunities and education system in {title.split(':')[0].trim()}
          </p>
          <div className="flex items-center justify-between gap-3 mt-auto pb-2">
            <div className="flex items-center gap-[3px] text-gray-600">
              <User className="w-3 h-3" />
              <span className="text-xs">{author}</span>
            </div>
            <div className="flex items-center gap-[3px] text-[#B89F9F]">
              <Calendar className="w-3 h-3" />
              <span className="text-xs">{date}</span>
            </div>
          </div>
          <button className="w-full h-8 bg-[#F7A61C] hover:bg-[#e69400] text-sm font-medium text-white rounded-full transition-colors mt-2">
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};
