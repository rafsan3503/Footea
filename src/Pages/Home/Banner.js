import React from "react";
import { Link } from "react-router-dom";
import banner from "../../Assets/banner.gif";

const Banner = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div class="relative z-10 lg:py-16">
            <div class="relative h-64 sm:h-80 lg:h-full rounded-lg shadow-lg overflow-hidden">
              <img
                alt="House"
                src={banner}
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div class="relative flex items-center bg-gray-100">
            <span class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div class="p-8 sm:p-16 lg:p-24 text-teal-400">
              <h2 class="text-2xl font-bold sm:text-3xl">
                Emotions through photos
              </h2>

              <p class="mt-4 text-gray-600">
                "It's not enough to just own a camera. Everyone owns a camera.
                To be a photographer, you must understand, appreciate, and
                harness the power you hold!"- Mark Denman
              </p>

              <Link
                href="/services"
                class="mt-8 inline-block rounded border border-teal-400 bg-teal-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
