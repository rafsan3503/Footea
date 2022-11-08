import React from "react";

const AddReview = ({ id }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const review = form.review.value;

    const userReview = {
      name: name,
      imgUrl: photoUrl,
      email: email,
      review: review,
      serviceId: id,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
        }
      });

    console.log(name, email, photoUrl, review);
  };
  return (
    <section class="bg-gray-100 my-10">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} class="space-y-4">
              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  class="w-full rounded-lg border-teal-200 outline-none shadow-md shadow-teal-100 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded-lg border-teal-200 outline-none shadow-md shadow-teal-100 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Photo Url
                  </label>
                  <input
                    class="w-full rounded-lg border-teal-200 outline-none shadow-md shadow-teal-100 p-3 text-sm"
                    placeholder="Photo Url"
                    type="text"
                    name="photoUrl"
                    id="phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">
                  Review
                </label>
                <textarea
                  class="w-full rounded-lg border-teal-200 outline-none shadow-md shadow-teal-100 p-3 text-sm"
                  placeholder="Review"
                  rows="8"
                  id="message"
                  name="review"
                  required
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-flex w-full items-center justify-center rounded-lg bg-teal-300 px-5 py-3 text-white sm:w-auto"
                >
                  <span class="font-medium"> Add Review </span>

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

export default AddReview;
