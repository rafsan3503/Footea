import React from "react";
import { Link } from "react-router-dom";

const ServicesBanner = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 lg:items-stretch">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-teal-500 sm:text-4xl">
              Services
            </h2>

            <p className="mt-4 text-black sm:text-xl">
              The art or process of producing images by the action of radiant
              energy and especially light on a sensitive surface
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
            <Link href="#" class="block shadow-lg shadow-teal-200 rounded-lg">
              <div class="flex justify-center">
                <strong class="relative h-6 bg-teal-400 px-4 text-xs uppercase leading-6 text-white">
                  Featured
                </strong>
              </div>

              <img
                alt="Trainer"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
              />

              <div className="p-3">
                <div class="mt-4 flex items-center justify-between font-medium">
                  <p className="text-teal-400 font-semibold">Price: $189.99</p>

                  <p class="text-xs uppercase tracking-wide">Ratings: 5star</p>
                </div>
                <div className="my-3">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora sunt perferendis animi voluptatibus qui suscipit
                    tempore. Itaque iste omnis voluptas!
                  </p>
                </div>
                <Link
                  href="#"
                  class="mt-6 inline-block rounded bg-teal-500 px-6 py-3 text-sm text-white"
                >
                  View Details &#8594;
                </Link>
              </div>
            </Link>

            <Link href="#" class="block shadow-lg shadow-teal-200 rounded-lg">
              <div class="flex justify-center">
                <strong class="relative h-6 bg-teal-400 px-4 text-xs uppercase leading-6 text-white">
                  Featured
                </strong>
              </div>

              <img
                alt="Trainer"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
              />

              <div className="p-3">
                <div class="mt-4 flex items-center justify-between font-medium">
                  <p className="text-teal-400 font-semibold">Price: $189.99</p>

                  <p class="text-xs uppercase tracking-wide">Ratings: 5star</p>
                </div>
                <div className="my-3">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora sunt perferendis animi voluptatibus qui suscipit
                    tempore. Itaque iste omnis voluptas!
                  </p>
                </div>
                <Link
                  href="#"
                  class="mt-6 inline-block rounded bg-teal-500 px-6 py-3 text-sm text-white"
                >
                  View Details &#8594;
                </Link>
              </div>
            </Link>

            <Link href="#" class="block shadow-lg shadow-teal-200 rounded-lg">
              <div class="flex justify-center">
                <strong class="relative h-6 bg-teal-400 px-4 text-xs uppercase leading-6 text-white">
                  Featured
                </strong>
              </div>

              <img
                alt="Trainer"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
              />

              <div className="p-3">
                <div class="mt-4 flex items-center justify-between font-medium">
                  <p className="text-teal-400 font-semibold">Price: $189.99</p>

                  <p class="text-xs uppercase tracking-wide">Ratings: 5star</p>
                </div>
                <div className="my-3">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora sunt perferendis animi voluptatibus qui suscipit
                    tempore. Itaque iste omnis voluptas!
                  </p>
                </div>
                <Link
                  href="#"
                  class="mt-6 inline-block rounded bg-teal-500 px-6 py-3 text-sm text-white"
                >
                  View Details &#8594;
                </Link>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="#"
              class="mt-6 inline-block rounded border-2 border-teal-200 font-medium text-teal-500 hover:bg-teal-500 px-6 py-3 text-lg hover:text-white"
            >
              See All &#8594;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
