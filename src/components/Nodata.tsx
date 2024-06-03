import React from 'react';
import noDataGif from '../assets/Searchengines.gif'; 

interface NodataProps {
  message: string;
}

const Nodata: React.FC<NodataProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-full p-8">
      <div className="text-center">
        <img src={noDataGif} alt="No Data Available" className="mx-auto mb-4" />
        <h2 className="sm:text-xl md:text-2xl lg:text-3xl font-bold">{message}</h2>
      </div>
    </div>
  );
};

export default Nodata;
