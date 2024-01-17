import React from "react";
import img1 from "../../assets/set-laboratory-glassware-beaker-filled-different-color-liquid-with-reflection-white 1.png";
import img2 from "../../assets/modern-equipment-in-the-biochemical-laboratory-2023-11-27-05-02-08-utc.png";
import img3 from "../../assets/iStock-163521122 1.png";
import img4 from "../../assets/closeup-shot-of-many-laboratory-pipette-tips-used-2023-11-27-05-32-24-utc 1.png";
import img5 from "../../assets/still-life-world-science-day-chemistry-composition.png";
import img6 from "../../assets/side-view-scientist-wearing-protection-gloves 2.png";
import "../../App.css";
import "./category.css";
function Category() {
  return (
    <section>
      <div className="container mx-auto ">
        <div className="row  ">
          <div className=" flex justify-center ">
            <div className=" relative mt-[4rem] mb-[2.75rem] headline">
              Category
            </div>
          </div>
          <div className="flex gap-[1.5rem]  items-center flex-wrap">
            <div className=" grow flex flex-col items-center gap-[1rem] category-text">
              <img src={img1} alt="" className="img-fluid" />
              <p className="text-center">LAB EQUIPMENT</p>
            </div>
            <div className="grow flex flex-col items-center gap-[1rem] category-text">
              <img src={img2} alt="" className="img-fluid" />
              <p className="text-center">CENTRIFUGES</p>
            </div>
            <div className="grow flex flex-col items-center gap-[1rem] category-text">
              <img src={img3} alt="" className="img-fluid" />
              <p className="text-center">PIPETTES</p>
            </div>
            <div className="grow flex flex-col items-center gap-[1rem] category-text">
              <img src={img4} alt="" className="img-fluid" />
              <p className="text-center">PIPETTE TIPS</p>
            </div>
            <div className="grow flex flex-col items-center gap-[1rem] category-text">
              <img src={img5} alt="" className="img-fluid" />
              <p className="text-center">CELL CULTURE</p>
            </div>
            <div className="grow flex flex-col items-center gap-[1rem] category-text">
              <img src={img6} alt="" className="img-fluid" />
              <p className="text-center">CENTRIFUGE TUBES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
