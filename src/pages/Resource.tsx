
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Printer, Share2 } from 'lucide-react';

const Resource = () => {
  const { type } = useParams();
  
  const getTitle = () => {
    switch(type) {
      case 'essays': return 'Admission Essays';
      case 'visa': return 'Student Visa Guide';
      case 'lor': return 'Letters of Recommendation';
      case 'sop': return 'Statement of Purpose';
      default: return 'Resource Guide';
    }
  };
  
  return (
    <div className="container mx-auto py-10 px-5">
      <Button asChild variant="ghost" className="mb-5">
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </Button>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{getTitle()}</h1>
        
        <div className="flex gap-4 mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
        
        <div className="prose max-w-none">
          <h2>Introduction</h2>
          <p>
            This is a placeholder for the resource content. In a real application, this would fetch the specific resource guide data based on the type parameter.
          </p>
          
          <h2>Key Points</h2>
          <ul>
            <li>Point 1: Lorem ipsum dolor sit amet</li>
            <li>Point 2: Consectetur adipiscing elit</li>
            <li>Point 3: Nullam auctor, nisl eget ultricies</li>
          </ul>
          
          <h2>Step-by-Step Guide</h2>
          <ol>
            <li>Step 1: Lorem ipsum dolor sit amet</li>
            <li>Step 2: Consectetur adipiscing elit</li>
            <li>Step 3: Nullam auctor, nisl eget ultricies</li>
          </ol>
          
          <h2>Tips and Best Practices</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resource;
