import React, { useContext } from "react";
import addProduct from "../../Assets/add-products.gif";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvier/UserContext";

const AddService = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.photoUrl.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const service = {
      name,
      img,
      price,
      rating,
      description,
      date: new Date(),
    };

    fetch("https://footeo-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("access-token"),
      },
      body: JSON.stringify(service),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut().then().catch();
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            text: "Service Added successfully!!",
          });
          navigate("/services");
        }
      });
  };
  return (
    <section className="bg-gray-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Footea - Add Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <img src={addProduct} alt="" />
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Photo Url
                </label>
                <input
                  className="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                  placeholder="Photo Url"
                  type="text"
                  name="photoUrl"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    price
                  </label>
                  <input
                    className="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                    placeholder="Price"
                    type="text"
                    name="price"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Rating
                  </label>
                  <input
                    className="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                    placeholder="Rating"
                    type="text"
                    name="rating"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Description
                </label>
                <textarea
                  className="w-full rounded-lg shadow-md shadow-teal-200 outline-none p-3 text-sm"
                  placeholder="Description"
                  name="description"
                  required
                  rows="8"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-teal-300 px-5 py-3 text-white sm:w-auto"
                >
                  <span className="font-medium"> Add Service </span>

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

export default AddService;
