
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';

const Scholarship = () => {
  const { slug } = useParams();
  
  return (
    <div className="container mx-auto py-10 px-5">
      <Button asChild variant="ghost" className="mb-5">
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </Button>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Scholarship: {slug}</h1>
        
        <div className="flex gap-4 mb-8">
          <Button className="bg-[#F7A61C] hover:bg-[#e69400]">Apply Now</Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Brochure
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
        
        <div className="prose max-w-none">
          <h2>Scholarship Details</h2>
          <p>
            This is a placeholder for the scholarship details. In a real application, this would fetch the scholarship data based on the slug.
          </p>
          
          <h2>Eligibility</h2>
          <ul>
            <li>Minimum GPA: 3.5</li>
            <li>Must be enrolled in an accredited university</li>
            <li>International students eligible</li>
          </ul>
          
          <h2>Application Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
