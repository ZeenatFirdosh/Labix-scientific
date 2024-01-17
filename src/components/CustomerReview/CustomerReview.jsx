import React, { useState, useEffect } from "react";
import "./CustomerReview.css";
import girl from "../../assets/& Image.svg";
import star from "../../assets/Star 1.svg";
import star5 from "../../assets/Star 5.svg";
import rightarrow from "../../assets/Frame (8).svg";
import leftarrow from "../../assets/Frame (7).svg";
import "./CustomerReview.css";
import Carousel from "react-bootstrap/Carousel";

function CustomerReview() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <section className="py-[4.38rem]">
      <div className="container mx-auto">
        <div className="row">
          <div className="flex justify-center">
            <div className="headline  relative  mb-[2.75rem]">
              Customer Review
            </div>
          </div>

          {/* carousel */}
          <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
            <Carousel.Item>
              <div className="row ">
                <div className="col-md-6 ">
                  <div className="card border-0 card-shadow p-[2.5rem] flex flex-col bg-[#EDFAFF] gap-[1.25rem] ">
                    <div className="flex flex-wrap gap-[1rem]">
                      <div>
                        <img src={girl} alt="" />
                      </div>
                      <div className=" flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-2xl text-[#262626] leading-8 font-semibold ">
                            Jess Santiago
                          </div>
                          <div className="flex gap-1 items-center ">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star5} alt="" />
                          </div>
                        </div>
                        <div className="text-base leading-6 text-[#737373] font-normal ">
                          Lorem ipsum Lorem ipsum dolor sit amet
                        </div>
                      </div>
                    </div>
                    <div className="text-base text-[#737373] leading-6 font-normal">
                      Nullam donec dolor justo elit pharetra accumsan eget
                      neque. Et fusce maecenas sagittis enim. Non mattis nec
                      purus mi facilisi aenean comon. Fermentum sit ultricies
                      vel ipsum tellus aliquet vitae velit, urna...
                    </div>
                  </div>
                </div>
                <div className="col-md-6 hidden md:block">
                  <div className="card border-0  card-shadow p-[2.5rem] flex flex-col bg-[#FAFAFA] gap-[1.25rem] ">
                    <div className="flex gap-[1rem]">
                      <div>
                        <img src={girl} alt="" />
                      </div>
                      <div className=" flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-2xl text-[#262626] leading-8 font-semibold ">
                            Jess Santiago
                          </div>
                          <div className="flex gap-1 items-center ">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star5} alt="" />
                          </div>
                        </div>
                        <div className="text-base leading-6 text-[#737373] font-normal ">
                          Lorem ipsum Lorem ipsum dolor sit amet
                        </div>
                      </div>
                    </div>
                    <div className="text-base text-[#737373] leading-6 font-normal">
                      Nullam donec dolor justo elit pharetra accumsan eget
                      neque. Et fusce maecenas sagittis enim. Non mattis nec
                      purus mi facilisi aenean comon. Fermentum sit ultricies
                      vel ipsum tellus aliquet vitae velit, urna...
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-6 hidden md:block">
                  <div className="card card-shadow border-0 p-[2.5rem] flex flex-col bg-[#EDFAFF] gap-[1.25rem] ">
                    <div className="flex gap-[1rem]">
                      <div>
                        <img src={girl} alt="" />
                      </div>
                      <div className=" flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-2xl text-[#262626] leading-8 font-semibold ">
                            Jess Santiago
                          </div>
                          <div className="flex gap-1 items-center ">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star5} alt="" />
                          </div>
                        </div>
                        <div className="text-base leading-6 text-[#737373] font-normal ">
                          Lorem ipsum Lorem ipsum dolor sit amet
                        </div>
                      </div>
                    </div>
                    <div className="text-base text-[#737373] leading-6 font-normal">
                      Nullam donec dolor justo elit pharetra accumsan eget
                      neque. Et fusce maecenas sagittis enim. Non mattis nec
                      purus mi facilisi aenean comon. Fermentum sit ultricies
                      vel ipsum tellus aliquet vitae velit, urna...
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-shadow border-0 p-[2.5rem] flex flex-col bg-[#FAFAFA] gap-[1.25rem] ">
                    <div className="flex gap-[1rem]">
                      <div>
                        <img src={girl} alt="" />
                      </div>
                      <div className=" flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-2xl text-[#262626] leading-8 font-semibold ">
                            Jess Santiago
                          </div>
                          <div className="flex gap-1 items-center ">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star5} alt="" />
                          </div>
                        </div>
                        <div className="text-base leading-6 text-[#737373] font-normal ">
                          Lorem ipsum Lorem ipsum dolor sit amet
                        </div>
                      </div>
                    </div>
                    <div className="text-base text-[#737373] leading-6 font-normal">
                      Nullam donec dolor justo elit pharetra accumsan eget
                      neque. Et fusce maecenas sagittis enim. Non mattis nec
                      purus mi facilisi aenean comon. Fermentum sit ultricies
                      vel ipsum tellus aliquet vitae velit, urna...
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-shadow border-0 p-[2.5rem] flex flex-col bg-[#EDFAFF] gap-[1.25rem] ">
                    <div className="flex gap-[1rem]">
                      <div>
                        <img src={girl} alt="" />
                      </div>
                      <div className=" flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-2xl text-[#262626] leading-8 font-semibold ">
                            Jess Santiago
                          </div>
                          <div className="flex gap-1 items-center ">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star5} alt="" />
                          </div>
                        </div>
                        <div className="text-base leading-6 text-[#737373] font-normal ">
                          Lorem ipsum Lorem ipsum dolor sit amet
                        </div>
                      </div>
                    </div>
                    <div className="text-base text-[#737373] leading-6 font-normal">
                      Nullam donec dolor justo elit pharetra accumsan eget
                      neque. Et fusce maecenas sagittis enim. Non mattis nec
                      purus mi facilisi aenean comon. Fermentum sit ultricies
                      vel ipsum tellus aliquet vitae velit, urna...
                    </div>
                  </div>
                </div>
                <div className="col-md-6 hidden md:block">
                  <div className="card card-shadow border-0 p-[2.5rem] flex flex-col bg-[#FAFAFA] gap-[1.25rem] ">
                    <div className="flex  gap-[1rem]">
                      <div>
                        <img src={girl} alt="" />
                      </div>
                      <div className=" flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-2xl text-[#262626] leading-8 font-semibold ">
                            Jess Santiago
                          </div>
                          <div className="flex gap-1 items-center ">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star5} alt="" />
                          </div>
                        </div>
                        <div className="text-base leading-6 text-[#737373] font-normal ">
                          Lorem ipsum Lorem ipsum dolor sit amet
                        </div>
                      </div>
                    </div>
                    <div className="text-base text-[#737373] leading-6 font-normal">
                      Nullam donec dolor justo elit pharetra accumsan eget
                      neque. Et fusce maecenas sagittis enim. Non mattis nec
                      purus mi facilisi aenean comon. Fermentum sit ultricies
                      vel ipsum tellus aliquet vitae velit, urna...
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            {/* <Carousel.Prev className="carousel-control-prev-icon" />
      <Carousel.Next className="carousel-control-next-icon" /> */}
          </Carousel>
          <div className="flex justify-center items-center gap-3 mt-[2rem]">
            <div type="button" className="left-arr" onClick={handlePrev}>
              <img src={leftarrow} alt="" />
            </div>
            <div>{index + 1} / 3</div>
            <div type="button" className="left-arr" onClick={handleNext}>
              <img src={rightarrow} alt="" />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default CustomerReview;
