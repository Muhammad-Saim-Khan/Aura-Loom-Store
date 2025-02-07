import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CardsImg from "../../assets/credit-cards.webp";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import Img from "../../assets/onw.png";
const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <img src={Logo} alt="" className="max-w-[100px] invert" />
            <div>
              <p className="flex items-center gap-2">
                <a
                  target="_blank"
                  className="hover:underline hover:text-[#3b55ff]"
                  href=""
                >
                  Rameesha Ahmed
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone />
                +92 335 3413029
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Karachi, Pakistan
              </p>
            </div>
          </motion.div>
          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61565645455948&mibextid=LQQJ4d"
              >
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a target="_blank" href="https://www.instagram.com/_auraloom_/">
                {" "}
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a target="_blank" href="https://github.com/Muhammad-Saim-Khan">
                <FaGithub className="text-3xl hover:scale-105 duration-300" />
              </a>{" "}
            </div>
            <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={CardsImg} alt="" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
          Copyright &copy; 2025. All Rights Reserved <br /> Design By{" "}
          <a
            className="text-[#ffffff] font-bold font-handwriting hover:text-[blue]"
            href="https://github.com/Muhammad-Saim-Khan"
          >
            Muhammad Saim Khan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
