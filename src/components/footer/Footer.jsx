import React from "react";
import logo from "../../assets/Logo (1).svg";
import locn from "../../assets/locn.svg";
import teleg from "../../assets/teleg.svg";
import phon from "../../assets/fon.svg";
import lin from "../../assets/lin.svg";
import fb from "../../assets/fb.svg";
import inst from "../../assets/insta.svg";
import './Footer.css'

function Footer() {
  return (
    //<!-- Footer -->
    <footer class="  text-muted">
      <section class="">
        <div class="container  mt-5">
          <div class="row mt-[4rem]">
            <div class="col-md-6 pb-[34px] text-start col-lg-4 col-xl-3 me-auto ">
              <div className="flex flex-col justify-between gap-5 h-full">
                <div className="">
                  <img src={logo} alt="" className=""/>
                </div>
                <div>
                  <div className="text-sm leading-5 font-normal text-[#535353] ">
                    Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
                    suscipit turpis enim cursus vulputate amet. Lobortis mi
                    platea aliquam senectus tempus mauris neque.
                  </div>
                  <div className="flex mt-[1.5rem] gap-[0.75rem]">
                    <img src={inst} alt="" />
                    <img src={fb} alt="" />
                    <img src={lin} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 pb-[34px] col-lg-2 col-xl-2 ms-auto f-body">
              <h6 class="text-uppercase fw-bold mb-4 text-lg leading-7 text-[#262626] font-semibold">About us</h6>
              <div>
                <a href="#!" class="text-reset">
                  Home
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                  Products
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                  Applications
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                  About
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                  Support
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                  Blogs
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                  Contact us
                </a>
              </div>
            </div>

            <div class="col-md-6 pb-[34px] col-lg-2 col-xl-2  f-body">
              <h6 class="text-uppercase fw-bold mb-4 text-lg leading-7 text-[#262626] font-semibold">Category</h6>
              <div>
                <a href="#!" class="text-reset">
                LAB EQUIPMENT
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                CENTRIFUGES
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                PIPETTES
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                PIPETTE TIPS
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                CELL CULTURE
                </a>
              </div>
              <div className="mt-[0.75rem]">
                <a href="#!" class="text-reset">
                CENTRIFUGE TUBES
                </a>
              </div>
            </div>

            <div class="col-md-6 pb-[34px] col-lg-3 col-xl-3  mb-md-0  f-body">
              <h6 class="text-uppercase fw-bold mb-4 text-lg leading-7 text-[#262626] font-semibold">Category</h6>
              <div className="flex gap-[0.75rem] items-center">
                <img src={phon} alt="" />
                <div>616-423-4168 </div>
              </div>
              <div className="flex mt-[0.75rem] gap-[0.75rem] items-center">
                <img src={teleg} alt="" />
                <div>User@gmail.com</div>
              </div>
              <div className="flex mt-[0.75rem] gap-[0.75rem] items-center">
                <img src={locn} alt="" />
                <div>566 N 1st Street, Titusville 04875-6349</div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div class="text-center py-[1.5rem] copyright">
      Non Copyrighted © 2024 Lorem ipsum dolor sit amet
      </div>
    </footer>
  );
}

export default Footer;
