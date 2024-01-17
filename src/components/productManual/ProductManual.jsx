import React from "react";
import "./ProductManual.css";
import book2 from "../../assets/image 27.png";
import book1 from "../../assets/Group 1.png";

function ProductManual() {
  return (
    <section className="py-[2rem] py-lg-[1.5rem] bg-[#EDFAFF]">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-7 my-auto ">
            <div className="relative">
              <div className="headline relative  ">Product Manual</div>
            </div>
            <div className="pt-[16px] text-base leading-6 font-normal pe-md-5">
              Lorem ipsum dolor sit amet consectetur. Mattis praesent consequat
              ac feugiat viverra turpis purus. At netus nulla malesuada ac id
              lobortis in est elit. Mattis praesent consequat ac feugiat viverra
              turpis purus. At netus nulla malesuada ac id lobortis in est
              elit.Mattis praesent consequat ac feugiat viverra turpis purus. At
              netus nulla malesuada ac id lobortis in est elit.
            </div>
            <div className="flex mt-[1.5rem] gap-2">
              <button className="pm-button ">Learn More</button>
              <button className="pm-button-light">View Manual</button>
            </div>
          </div>
          <div className="col-md-5  mt-[3.26rem] ">
            <div className="relative ">
              <img src={book1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductManual;
