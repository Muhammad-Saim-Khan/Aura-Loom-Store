import React from "react";
import P1 from "../../assets/four.png";
import P2 from "../../assets/five.png";
import P3 from "../../assets/six.png";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const ProductsData = [
  {
    id: 1,
    title: " Black Knit Sweater",
    image: P1,
    desc: "Get winter-ready with Aura Loom’s Winter Collection! 🖤 Elevate your style with this classic black knit sweater—comfort and glamour  ",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Olive Green Hoodie",
    desc: "Style Meets Comfort 🖤✨ Introducing Aura Loom's Winter Collection Hoodies in Olive Green! 🌿 Stay trendy, warm, and classy this season. ❄️",
    image: P2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Elegant Sweatshirt",
    desc: "🤍 Winter in Style Starts Here! 🤍 Embrace the chill with the Aura Loom Winter Collection! This elegant sweatshirt is yours ",
    image: P3,
    delay: 1.1,
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center pb-10"
        >
          Our Products
        </motion.h1>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
            >
              <img
                src={item.image}
                alt=""
                className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-handwriting text-center">
                  {item.title}
                </h1>
                <p className="text-center text-sm text-gray-600">{item.desc}</p>
                <a target="_blank" href="https://wa.me/+923353413029">
                  {" "}
                  <button className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">
                    {" "}
                    Buy Now x
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
