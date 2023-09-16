import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-700 ">
      <div className="container mx-auto mt-6 md:px-16 p-10  text-white grid lg:grid-cols-5 md:grid-cols-2 gap-4">
        <div className="p-3">
          <h1 className="text-3xl font-semibold mb-5 cursor-pointer hover:text-gray-300 duration-200">
            JobMagnet
          </h1>
          <p className="text-gray-300 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            doloribus dignissimos enim.
          </p>
          <div>
            <FontAwesomeIcon
              className="text-xl me-3 cursor-pointer hover:text-gray-300"
              icon={faFacebook}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="text-xl me-3 cursor-pointer hover:text-gray-300"
              icon={faTwitter}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="text-xl me-3 cursor-pointer hover:text-gray-300"
              icon={faInstagram}
            ></FontAwesomeIcon>
          </div>
        </div>

        <div className="p-3">
          <h1 className="text-xl font-semibold mb-5">Company</h1>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            About Us
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            {" "}
            Work
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Latest News
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Careers
          </p>
        </div>

        <div className="p-3">
          <h1 className="text-xl font-semibold mb-5">Product</h1>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Prototype
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Plans & Pricing
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Customers
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Integrations
          </p>
        </div>

        <div className="p-3">
          <h1 className="text-xl font-semibold mb-5">Support</h1>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Help Desk
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Sales
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Become a Partner
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            Developers
          </p>
        </div>

        <div className="p-3">
          <h1 className="text-xl font-semibold mb-5">Company</h1>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            45 Thomas Road, TYP
          </p>
          <p className="text-gray-300 mb-3 cursor-pointer hover:underline duration-200">
            +9479 -848-4458
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
