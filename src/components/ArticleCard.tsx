import React from "react";

interface ArticleCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  author,
  date,
}) => {
  return (
    <div className="w-[376px] h-[400px] bg-white border overflow-hidden rounded-[20px] border-[#E1E1E1]">
      <img src={image} alt={title} className="w-full h-[305px] object-cover" />
      <div className="p-3.5">
        <h3 className="text-[15px] text-[#2F1238] mb-[34px]">{title}</h3>
        <div className="flex items-center gap-[3px]">
          <span className="text-xs">{author}</span>
          <span className="text-xs text-[#B89F9F]">{date}</span>
        </div>
      </div>
    </div>
  );
};
