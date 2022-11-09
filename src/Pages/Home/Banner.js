import React from "react";
import { Link } from "react-router-dom";
import banner from "../../Assets/banner.gif";

const Banner = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            {/* banner text  */}

            <div className="p-8 sm:p-16 lg:p-24 text-teal-400">
              <h2 className="text-2xl font-bold sm:text-3xl">Mahmud Hasan</h2>
              <p className="text-xl my-3">Professional Photographer</p>

              <p className="mt-4 text-gray-600">
                I would love for my work to be seen as a celebration of human
                endeavour, whether concentrating on an individual’s personal
                sporting pursuits, or the artistry and craft involved in a
                highly skilled, labour-intensive industry. I shoot in a fast,
                fluid fashion, creating situations that build believable scenes,
                whilst encouraging and allowing my subjects the freedom to move,
                laugh, enjoy and be themselves.
              </p>

              <Link
                to="/services"
                className="mt-8 inline-block rounded border border-teal-400 bg-teal-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Explore My Services
              </Link>
            </div>
          </div>

          {/* banner image  */}
          <div className="relative z-10 lg:py-16">
            <div className="relative h-96 sm:h-80 lg:h-full rounded-lg shadow-lg overflow-hidden">
              <img
                alt="House"
                src={banner}
                className="absolute inset-0 mx-auto z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
