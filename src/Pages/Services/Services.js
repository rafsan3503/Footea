import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Services = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <span class="inline-block h-1 w-12 bg-teal-700"></span>

          <h2 class="mt-1 text-2xl text-teal-400 font-extrabold uppercase tracking-wide lg:text-3xl">
            Services
          </h2>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
          <Link href="#" class="block shadow-lg shadow-teal-200 rounded-lg">
            <div class="flex justify-center">
              <strong class="relative h-6 bg-teal-400 px-4 text-xs uppercase leading-6 text-white">
                Featured
              </strong>
            </div>

            <PhotoProvider>
              <PhotoView src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80">
                <img
                  alt="Trainer"
                  src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
                />
              </PhotoView>
            </PhotoProvider>

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

            <PhotoProvider>
              <PhotoView src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80">
                <img
                  alt="Trainer"
                  src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
                />
              </PhotoView>
            </PhotoProvider>

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

            <PhotoProvider>
              <PhotoView src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80">
                <img
                  alt="Trainer"
                  src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="-mt-3 h-[350px] w-full object-cover sm:h-[450px]"
                />
              </PhotoView>
            </PhotoProvider>

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
                to="/services/01"
                class="mt-6 inline-block rounded bg-teal-500 px-6 py-3 text-sm text-white"
              >
                View Details &#8594;
              </Link>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
