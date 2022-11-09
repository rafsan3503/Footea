import { async } from "@firebase/util";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, name, img, rating, price, description } = service;

  const handleFeedback = async (event) => {
    event.preventDefault();
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          Good: "Good",
          Medium: "Medium",
          Bad: "Bad",
        });
      }, 1000);
    });

    const { value: feedback } = await Swal.fire({
      title: "Give your feedback",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });

    if (feedback) {
      Swal.fire({ html: `You selected: ${feedback}` });
    }
  };

  const handleNotify = async () => {
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });

    if (email) {
      Swal.fire({
        icon: "success",
        text: `Thank you for Choosing this service!! You will be notified by this email ${email}`,
      });
    }
  };

  return (
    <section>
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8 shadow-md shadow-teal-100">
          <div>
            <h1 className="text-2xl text-teal-200 font-bold lg:text-3xl">
              {name}
            </h1>

            <p className="mt-1 text-sm text-gray-500">ServiceID: {_id}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt="Tee"
                  src={img}
                  className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />

                <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-teal-500 px-3 py-1.5 text-white">
                  <span className="ml-1.5 text-xs"> Editors choice </span>
                </div>
              </div>

              <ul className="mt-1 flex gap-1">
                <li>
                  <img
                    alt="Tee"
                    src={img}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={img}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={img}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src={img}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>
              </ul>
            </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold">
                    Rating: {rating}
                  </legend>
                  <div className="mt-2 flex gap-1">
                    <label htmlFor="color_green" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_green"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-yellow-500 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>
                    <label htmlFor="color_blue" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_blue"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-yellow-500 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label htmlFor="color_pink" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_pink"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-yellow-500 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label htmlFor="color_red" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_red"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-yellow-500 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label htmlFor="color_indigo" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_indigo"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-yellow-500 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-lg font-bold">Location</legend>

                  <div className="mt-2 flex gap-1">
                    <label htmlFor="material_cotton" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        className="peer sr-only"
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        Studio
                      </span>
                    </label>

                    <label htmlFor="material_wool" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_wool"
                        name="material"
                        className="peer sr-only"
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        Outdoor
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div className="rounded border bg-gray-100 p-4">
                  <p className="text-sm">
                    <span className="block">
                      {" "}
                      Pay as low as $3/mo with 0% APR.{" "}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">${price}</p>
                </div>

                <button
                  onClick={handleFeedback}
                  type="submit"
                  className="w-full rounded bg-teal-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Give Feedback
                </button>

                <button
                  onClick={handleNotify}
                  type="button"
                  className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Notify when on Discount
                </button>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews service={service} />
    </section>
  );
};

export default ServiceDetails;
