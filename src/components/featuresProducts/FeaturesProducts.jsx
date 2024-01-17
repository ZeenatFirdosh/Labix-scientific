import React from "react";
import "./FeaturesProducts.css";
import hand from "../../assets/pngimg 1.png";
import fp1 from "../../assets/Frame 2240.png";
import fp2 from "../../assets/Untitled-1 1.png";
import fp3 from "../../assets/pngegg 1.png";
import fp4 from "../../assets/5be1a3a0a4d24-a587145d08e3dcaa3ccf07ac1caeb83e 1.png";
import fp5 from "../../assets/cell-culture-cell-and-tissue-culture-petri-dishes-cell-culture-4abe8771626b540228505ca6a89e1426 1.png";
import cardbg from "../../assets/Rectangle 9.png";
import rarrow from "../../assets/Frame (1).svg";

function FeaturesProducts() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="row">
          <div className="flex justify-center ">
            <div className="headline  relative mt-[4rem] mb-[2.75rem]">
              Features Products
            </div>
          </div>

          <div className="col-md-6 pb-4 pb-md-0 ">
            <div className="pe-lg-2">
              
                <div className="card1 relative bg-[#F5F5F5]">
                  <img
                    src={hand}
                    alt=""
                    className="absolute bottom-0 end-0 img-fluid"
                  />
                  <div className="card1-inside">
                   
                    <div>
                      <div className="text-2xl leading-8 text-[#262626] font-normal">
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                      <div className="text-base leading-6 mt-2 text-[#737373] font-normal">
                        Velit id consequat id sit vitae lobortis ut integer.
                      </div>
                    </div>
                    
                    <div className="text-3xl z-10 mt-[7.6rem] leading-9 font-medium ">
                      $98
                    </div>
                  </div>
                </div>
              
                {/* lowercard left */}
              <div className="mt-[1.88rem] flex gap-[1.5rem] justify-between">
                {/* 1l8 */}
                <div className="relative  ">
                  <div className="card2 bg-card-bg bg-cover  relative">
                  {/* <img
                        src={cardbg}
                        alt=""
                        className="absolute top-0 overflow-hidden -z-10 object-cover w-full bottom-0 end-0 img-fluid"
                      /> */}
                    <div className="card1-inside">
                      {/* 1 */}
                      <div>
                        <div className="text-base leading-6 mt-2 text-white font-normal">
                          Velit id consequat id sit vitae lobortis ut integer.
                        </div>
                      </div>
                      {/* 2 */}
                      <div className="text-3xl z-10 mt-[7.6rem] text-white leading-9 font-medium ">
                        $98
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2 r8 */}
                <div className="relative ">
                  <div className="card1  relative bg-[#FAFAFA]">
                    <img
                      src={fp2}
                      alt=""
                      className="absolute z-1 bottom-0 end-0 img-fluid"
                    />
                    <div className="card1-inside">
                      {/* 1 */}
                      <div>
                        <div className="text-base leading-6 font-normal text-[#737373]">
                          Velit id consequat id sit vitae lobortis ut integer.
                        </div>
                      </div>
                      {/* 2 */}
                      <div className="text-3xl z-10 mt-[7.6rem] leading-9 font-medium ">
                        $98
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* r8*/}
          {/* col2 */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="card1 bg-[#EDFAFF]  flex-1 ">
                  <div className="text-center flex justify-center flex-1">
                    <img src={fp3} alt="" className="img-fluid " />
                  </div>
                  <div className="mt-[1rem]">
                    <h1 className="text-2xl leading-8 font-normal text-[#262626]">
                      Lorem ipsum dolor sit amet{" "}
                    </h1>
                    <p className="text-base leading-6 mt-[0.75rem] font-normal text-[#737373]">
                      Velit id consequat id sit vitae lobortis ut integer.
                    </p>
                    <div className="text-3xl mt-[2.5rem] leading-9 font-medium ">
                      $98
                    </div>
                  </div>
                </div>
              </div>
              {/* col3 */}
              <div className="col-md-6  ">
                <div className="md:ps-2 flex flex-col justify-between">
                  <div className="relative mb-[1.5rem] ">
                    <div className="card2 bg-[#068FFF] opacity-75 relative">
                      <img
                        src={fp4}
                        alt=""
                        className="absolute bottom-0 end-0 z-1 img-fluid"
                      />
                      <div className="card1-inside">
                        {/* 1 */}
                        <div>
                          <div className="text-base leading-6 mt-2 text-white font-normal">
                            Velit id consequat id sit vitae lobortis ut integer.
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="flex w-full justify-between items-center mt-[8rem] ">
                    <div className="text-3xl z-10  text-white leading-9 font-medium ">
                      $98
                    </div>
                    <div className="arrow-div z-10">
                      <img src={rarrow} alt="" />
                    </div>
                    </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-auto h-full ">
                    <div className="card2 h-full relative bg-[#EDFAFF]">
                      <img
                        src={fp5}
                        alt=""
                        className="absolute bottom-0 end-0 img-fluid"
                      />
                      <div className="card1-inside">
                        {/* 1 */}
                        <div>
                          <div className="text-base leading-6 font-normal text-[#737373]">
                            Velit id consequat id sit vitae lobortis ut integer.
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="text-3xl z-10 mt-[8rem] leading-9 font-medium ">
                          $98
                        </div>
                      </div>
                    </div>
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

export default FeaturesProducts;
