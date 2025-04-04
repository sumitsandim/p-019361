
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
      className="block w-[376px] h-[400px] bg-white border overflow-hidden rounded-[20px] border-[#E1E1E1] hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
    >
      <img src={image} alt={title} className="w-full h-[305px] object-cover" />
      <div className="p-3.5">
        <h3 className="text-[15px] text-[#2F1238] mb-[34px] line-clamp-2 hover:text-[#F7A61C] transition-colors">{title}</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-[3px] text-gray-600">
            <User className="w-3 h-3" />
            <span className="text-xs">{author}</span>
          </div>
          <div className="flex items-center gap-[3px] text-[#B89F9F]">
            <Calendar className="w-3 h-3" />
            <span className="text-xs">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
