
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Share2, BookmarkPlus } from 'lucide-react';

const Article = () => {
  const { slug } = useParams();
  
  // This would typically come from an API or database
  const articleData = {
    title: slug?.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
    author: "Education Expert",
    date: "April 1, 2025",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc2d745f555f60955dbedd15ae542e61bb801ce",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.",
      "Studying abroad is a life-changing experience that offers numerous benefits, from global exposure to enhanced career prospects. When considering international education, students must weigh factors like academic quality, living costs, and cultural fit.",
      "The education system varies significantly across countries. In the USA, the emphasis is on liberal arts education with flexibility in course selection. The UK offers more specialized programs from the start. European countries often provide tuition-free or low-cost education with programs taught in English.",
      "Scholarships play a crucial role in making international education accessible. Many universities and external organizations offer funding based on academic merit, financial need, or specific talents.",
      "Admission requirements typically include standardized tests like the SAT, ACT, GRE, or GMAT for US universities, while IELTS or TOEFL scores are commonly required for English proficiency. The application process usually involves submitting academic transcripts, letters of recommendation, and personal statements.",
      "When planning to study abroad, it's essential to consider visa requirements, healthcare options, and accommodation arrangements. Many universities provide housing for international students, though off-campus options might be more economical in some locations."
    ],
    relatedArticles: [
      {
        title: "Top Scholarships for International Students",
        slug: "top-scholarships-international-students",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc63fcf6bff3db7b15bd99d781dbeae5f10f64"
      },
      {
        title: "How to Write a Successful SOP",
        slug: "how-to-write-successful-sop",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/91071d9d95d54f7a242e75102e20f2e4faae89b2"
      }
    ]
  };
  
  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10">
      <div className="container mx-auto px-5">
        <Button asChild variant="ghost" className="mb-5 hover:bg-[#F7A61C]/10 hover:text-[#F7A61C]">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="bg-white rounded-[20px] shadow-md overflow-hidden">
          <img 
            src={articleData.image} 
            alt={articleData.title} 
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{articleData.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{articleData.date}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <BookmarkPlus className="w-4 h-4" />
                  Save
                </Button>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-6 text-[#2F1238]">{articleData.title}</h1>
            
            <div className="prose max-w-none">
              {articleData.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#2F1238]">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articleData.relatedArticles.map((article, index) => (
                  <Link 
                    key={index}
                    to={`/articles/${article.slug}`}
                    className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-all"
                  >
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium hover:text-[#F7A61C] transition-colors">{article.title}</h3>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-[#F7A61C] hover:text-[#022859]"
                      >
                        Read more
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
