import React from 'react';

interface DetailProps {
  poster_path: string;
  title: string;
  duration: string;
  description: string;
}

const Detail: React.FC<DetailProps> = ({ poster_path, title, duration, description }) => {
  return (
    <div className="flex p-8">
      <div className="w-1/3">
        <img src={poster_path} alt={title} className="max-w-full" />
      </div>
      <div className="w-2/3 ml-8">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{duration}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Detail;
