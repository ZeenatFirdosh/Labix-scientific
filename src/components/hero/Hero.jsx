import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hero from "../../assets/fgsd 2.png";
import btncart from "../../assets/Frame (5).svg";
import herobg from "../../assets/Frame 2226 (1).png";
import "./hero.css";

function Hero() {
  return (
    <>
      <section className="bg-[#FAFAFA] relative">
        <img src={herobg} alt="" className="absolute bottom-0 end-0 img-fluid "/>
        <div className="container mx-auto  pt-[6rem]">
          <div className="row justify-between">

            <div className="col-md-5  ">
              <div className="pe-[4rem]">
                <div className="text-4xl sm:text-5xl leading-none font-semibold text-wrap">
                  Lorem ipsum loret ullamsdcorper sit{" "}
                  <span className="text-[#068FFF]">Labix Scientific.</span>
                </div>
                <div className="herobody pt-[1.19rem]">
                  Lorem ipsum dolor sit amet consecteturst nisl consectetur eu
                  vivemet ullamcorper a nec faucibus donec sit hendrerit duis.{" "}
                </div>
               
                  <div className=" cursor-pointer w-fit hero-button mt-[1.19rem]">
                    <div>Buy Now</div>
                    <div>
                      <img src={btncart} alt="" />
                    </div>
                  </div>
               
              </div>
            </div>
            <div className="col-md-5 relative">
              <img src={hero} alt="" className="img-fluid z-10"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
