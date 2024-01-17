import React from "react";
import "./Header.css";



function Header() {
  return (
    <div className="flex justify-center bg-[#068FFF] sm:block hidden">
      <ul className="head-ul py-[0.75rem]">
        <li className="underline underline-offset-4 decoration-2">Home</li>
        <li className="hover:underline underline-offset-4 decoration-2">Products</li>
        <li className="hover:underline underline-offset-4 decoration-2">Applications</li>
        <li className="hover:underline underline-offset-4 decoration-2">About</li>
        <li className="hover:underline underline-offset-4 decoration-2">Support</li>
        <li className="hover:underline underline-offset-4 decoration-2">Blogs</li>
        <li className="hover:underline underline-offset-4 decoration-2">Contact us</li>
      </ul>
      
    </div>
  );
}

export default Header;
