import React from "react";

 export const ExperienceYearCounter = ({ startDate }) => {
    const calculateExperience = (start) => {
        const startTime = new Date(start);
        const now = new Date();
    
        const diffInMonths =
          (now.getFullYear() - startTime.getFullYear()) * 12 +
          (now.getMonth() - startTime.getMonth());
    
        const years = diffInMonths / 12;
        const flooredYears = Math.floor(years);
    
        return years % 1 === 0 ? `${flooredYears}` : `${flooredYears}+`;
      };
  return (
    <>
    {calculateExperience(startDate)} years
    </>
  );
};

 

