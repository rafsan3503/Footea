import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvier/UserContext";

const AddReview = ({ id, setReviews, serviceName }) => {
  const { user } = useContext(AuthContext);

  // submit review
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const review = form.review.value;

    // creare review object

    const userReview = {
      name: name,
      imgUrl: photoUrl,
      email: email,
      review: review,
      serviceId: id,
      serviceName: serviceName,
      userId: user.uid,
      date: new Date(),
    };

    // post review
    fetch("https://footeo-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review added!", { autoClose: 500 });
          fetch(`https://footeo-server.vercel.app/reviews/${id}`)
            .then((res) => res.json())
            .then((data) => {
              setReviews(data);

              form.reset();
            });
        }
      });
  };
  return (
    <section className="bg-gray-100 my-10">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-teal-200 outline-none shadow-md shadow-teal-100 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-teal-200 outline-none shadow-md shadow-teal-100 p-3 text-sm"
                    placeholder={
                      user.email
                        ? "Email Address"
                        : "No Email found for this user, Please type your email!"
                    }
                    type="email"
                    name="email"
                    defaultValue={
                      user.email ? user.email : `${user.uid}@gmail.com`
                    }
                    readOnly
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Photo Url
                  </label>
                  <input
                    className="w-full rounded-lg border-teal-200 outline-none shadow-md shadow-teal-100 p-3 text-sm"
                    placeholder="Photo Url"
                    type="text"
                    name="photoUrl"
                    defaultValue={user.photoURL}
                    id="phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Review
                </label>
                <textarea
                  className="w-full rounded-lg border-teal-200 outline-none shadow-md shadow-teal-100 p-3 text-sm"
                  placeholder="Review"
                  rows="8"
                  id="message"
                  name="review"
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-teal-300 px-5 py-3 text-white sm:w-auto"
                >
                  <span className="font-medium"> Add Review </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
