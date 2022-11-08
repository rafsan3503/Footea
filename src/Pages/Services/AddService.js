import React from "react";
import addProduct from "../../Assets/add-products.gif";

const AddService = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.photoUrl.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    console.log(name);

    const service = {
      name,
      img,
      price,
      rating,
      description,
      date: new Date(),
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  };
  return (
    <section class="bg-gray-100">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <img src={addProduct} alt="" />
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleAddProduct} class="space-y-4">
              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  class="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div>
                <label class="sr-only" for="phone">
                  Photo Url
                </label>
                <input
                  class="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                  placeholder="Photo Url"
                  type="text"
                  name="photoUrl"
                  required
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    price
                  </label>
                  <input
                    class="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                    placeholder="Price"
                    type="text"
                    name="price"
                    required
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Rating
                  </label>
                  <input
                    class="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                    placeholder="Rating"
                    type="text"
                    name="rating"
                    required
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">
                  Description
                </label>
                <textarea
                  class="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                  placeholder="Description"
                  name="description"
                  required
                  rows="8"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-flex w-full items-center justify-center rounded-lg bg-teal-300 px-5 py-3 text-white sm:w-auto"
                >
                  <span class="font-medium"> Add Service </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
