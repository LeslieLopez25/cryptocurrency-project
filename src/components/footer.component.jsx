import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./theme-toggle.component";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        {/* Support and Info links */}
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        {/* Newsletter signup, theme toggle, and social icons */}
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              {/* Theme toggle component */}
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Sign up for crypto news
              </p>
              {/* Email signup form (non-functional placeholder) */}
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl hover:shadow-2xl md:w-auto my-2">
                    Sign Up
                  </button>
                </form>
              </div>
              {/* Social media icons */}
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebook />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright footer */}
      <p className="text-center py-4">
        © {new Date().getFullYear()} Powered by Coin Gecko
      </p>
    </div>
  );
};

export default Footer;
