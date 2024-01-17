import React from "react";
import i1 from "../../assets/01.png";
import i2 from "../../assets/09.png";
import i3 from "../../assets/11.png";
import i4 from "../../assets/xxx.png";
import i5 from "../../assets/nurse.png";
import "./OurBlogs.css";

function OurBlogs() {
  return (
    <section className="bg-[#FAFAFA] py-[4.38rem] ">
      <div className="container mx-auto">
        <div className="row">
          <div className="flex justify-center">
            <div className="headline  relative  mb-[2.75rem]">
              Our Blogs
            </div>
          </div>

         
            <div className="col-lg-6">
              <div className="card h-full shadow-0 pe-lg-2 border-0 pb-5 pb-lg-0">
                <img src={i1} alt="" className="img-fluid" />
                <div className="text-sm text-[#737373] leading-5 font-normal pt-[1.5rem]">
                  May 23, 2023
                </div>
                <div className="pt-[0.75rem] text-2xl leading-8 font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Ut ultrices aenean sed
                  et et dolor.
                </div>
                <div className="pt-[0.75rem] text-sm leading-5 font-normal">
                  Lorem ipsum dolor sit amet consectetur. Ut id aliquam sem eu
                  maecenas nibh cum phasellus. Nullam nulla interdum posuere.
                  Lorem ipsum dolor sit amet consectetur. Ut id aliquam sem eu
                  maecenas nibh cum phasellus. Nullam nulla interdum posuere.
                </div>
                <div className="flex gap-[0.75rem] mt-[0.5rem] ">
                  <div className="btn1">LAB EQUIPMENT</div>
                  <div className="btn2">CENTRIFUGE TUBES</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card ps-lg-2 shadow-0 border-0">
                <div className="row ">

                <div className=" col-sm-6 ">
                  <img src={i4} alt="" className="img-fluid w-full  md:h-full object-cover overflow-hidden" />
                </div>
                <div className="col-sm-6 ps-4">
                  <div className="text-sm text-[#737373] leading-5 font-normal pt-[1.5rem] ">
                    May 23, 2023
                  </div>
                  <div className="pt-[0.75rem] text-2xl leading-8 font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Ut ultrices 
                  </div>
                  <div className="pt-[0.75rem] text-sm leading-5 font-normal">
                  Lorem ipsum dolor sit amet consectetur. Ut id aliquam sem eu maecenas nibh cum phasellus. Nullam nulla interdum
                  </div>
                  <div className="flex flex-wrap gap-[0.75rem] mt-[0.5rem]">
                    <div className="btn1">LAB EQUIPMENT</div>
                    <div className="btn2">CENTRIFUGE TUBES</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="card border-0 ps-lg-2 shadow-0  mt-[1.5rem]">
                <div className="row">

                <div className="col-sm-6">
                  <img src={i5} alt="" className="img-fluid w-full  md:h-full object-cover " />
                </div>
                <div className="col-sm-6 ps-4">
                  <div className="text-sm text-[#737373] leading-5 font-normal pt-[1.5rem] ">
                    May 23, 2023
                  </div>
                  <div className="pt-[0.75rem] text-2xl leading-8 font-semibold">
                  Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="pt-[0.75rem] text-sm leading-5 font-normal">
                  Lorem ipsum dolor sit amet consectetur. Ut id aliquam sem eu maecenas nibh cum phasellus. Nullam nulla interdum posuere.                  </div>
                  <div className="flex flex-wrap gap-[0.75rem] mt-[0.5rem]">
                    <div className="btn1">PIPETTE TIPS</div>
                    <div className="btn2">PIPETTES</div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
}

export default OurBlogs;
