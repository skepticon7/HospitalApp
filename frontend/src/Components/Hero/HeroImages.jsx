import React from 'react';
import doc1 from "../../assets/doctor1.png";
import doc2 from "../../assets/doctor2.png";
import doc3 from "../../assets/doctor3.png";

function HeroImages() {
  return (
    <section id='home' className="flex gap-4 w-1/2">
      <div className="color-lightblue  rounded-lg w-2/3 ">
        <img className="relative bottom-[-15px] flex-1 w-full" src={doc1} alt="doctor1" />
      </div>
      <div className="flex flex-col gap-4   items-center justify-center w-1/2 ">
        <div className="color-mediumblue rounded-lg ">
          <img className="w-full flex-1" src={doc2} alt="doctor2" />
        </div>
        <div className="color-lightgreen rounded-lg ">
          <img className="w-full flex-1" src={doc3} alt="doctor3" />
        </div>
      </div>
    </section>
  );
}

export default HeroImages;
