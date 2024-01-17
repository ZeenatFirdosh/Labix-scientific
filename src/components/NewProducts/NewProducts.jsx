import React, {useState} from "react";
import p1 from "../../assets/Product Images 17 (3).png";
import p2 from "../../assets/Product Images 17 (4).png";
import p3 from "../../assets/Product Images 17 (5).png";
import p4 from "../../assets/Product Images 17 (6).png";
import p5 from "../../assets/Card icon.png";
import rightarrow from "../../assets/Frame (8).svg";
import leftarrow from "../../assets/Frame (7).svg";
import cart from "../../assets/Frame (6).svg"
import Carousel from "react-bootstrap/Carousel";

import "./NewProducts.css";

function NewProducts() {
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
    <section>
      <div className="container mx-auto">
        <div className="row relative">
            <div type="button" className="left" onClick={handlePrev}>
              <img src={leftarrow} alt="" />
            </div>
            
            <div type="button" className="right" onClick={handleNext}>
              <img src={rightarrow} alt="" />
            </div>
          
          <div className="flex justify-center">
            <div className="headline  relative mt-[4rem] mb-[2.75rem]">
              New Products
            </div>
          </div>

          {/* carousel */}
          <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
            <Carousel.Item>
              <div className="relative row">
            {/* card1 */}
            <div className="col-md-3 ">
              <div className="pe-2">
                <div className="products-card card shadow-0 border-0 ">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p1}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="px-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p4}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="px-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p2}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="ps-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p3}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div>
                      <img src={p5} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></Carousel.Item>
            <Carousel.Item>
            <div className="relative row">
            {/* card1 */}
            <div className="col-md-3 hidden md:block">
              <div className="pe-2">
                <div className="products-card card shadow-0 border-0 ">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p1}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="px-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p4}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="px-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p2}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="ps-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p3}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div>
                      <img src={p5} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </Carousel.Item>
            <Carousel.Item><div className="relative row">
            {/* card1 */}
            <div className="col-md-3 hidden md:block">
              <div className="pe-2">
                <div className="products-card card shadow-0 border-0 ">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p1}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="px-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p4}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="px-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p2}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="ps-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p3}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div>
                      <img src={p5} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></Carousel.Item>
          
            <Carousel.Item><div className="relative row">
            {/* card1 */}
            <div className="col-md-3 hidden md:block">
              <div className="pe-2">
                <div className="products-card card shadow-0 border-0 ">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p1}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="px-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p4}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden md:block">
              <div className="px-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p2}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div className="cart">
                      <img src={cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="ps-2">
                <div className="products-card card shadow-0 border-0">
                  <div className="flex justify-center items-center bg-gray-100">
                    <img
                      src={p3}
                      alt=""
                      className="img-fluid mix-blend-darken"
                    />
                  </div>
                  <div className="text-[0.875rem] leading-5 text-[#262626] font-normal mt-[0.75rem]">
                    Lorem ipsum dolor sit amet, coconsectetur adipiscing elit.
                  </div>
                  <div className="flex justify-between items-center mt-[0.87rem]">
                    <div className="flex items-center gap-2">
                      <div className="text-lg text-[#262626] leading-7 font-semibold ">
                        $990.0
                      </div>
                      <div className="card-text-strike">$1299</div>
                    </div>
                    <div>
                      <img src={p5} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></Carousel.Item>
          
          </Carousel>

         
          <div className="flex justify-center pt-[2.75rem] pb-[4.38rem]">
            <button className="p-button">View More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
