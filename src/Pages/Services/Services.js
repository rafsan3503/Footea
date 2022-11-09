import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import loader from "../../Assets/loader.gif";
import { Helmet } from "react-helmet";

const Services = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(3);
  const [page, setPage] = useState(0);
  // loader state
  const [loading, setLoading] = useState(true);

  // get services data
  useEffect(() => {
    fetch(`https://footeo-server.vercel.app/services?size=${size}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        setCount(data.count);
        setLoading(false);
      });
  }, [setLoading, page, size]);

  // pages for pagination
  const pages = Math.ceil(count / size);

  // spinner div
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <img src={loader} alt="" />
      </div>
    );
  }
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Footea - Service</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <span className="inline-block h-1 w-12 bg-teal-700"></span>

          <h2 className="mt-1 text-2xl text-teal-400 font-extrabold uppercase tracking-wide lg:text-3xl">
            Services
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              href="#"
              className="block shadow-lg shadow-teal-200 rounded-lg"
            >
              <PhotoProvider>
                <PhotoView src={service.img}>
                  <img
                    alt="Trainer"
                    src={service.img}
                    className="h-96 w-full object-cover"
                  />
                </PhotoView>
              </PhotoProvider>

              <div className="p-3">
                <h2 className="text-3xl font-bold text-teal-400 my-4">
                  {service.name}
                </h2>
                <div className="mt-4 flex items-center justify-between font-medium">
                  <p className="text-teal-400 font-semibold">
                    Price: ${service.price}
                  </p>

                  <p className="text-xs uppercase tracking-wide">
                    Ratings: {service.rating}
                  </p>
                </div>
                <div className="my-3">
                  <p>
                    {service.description.length > 80
                      ? service.description.slice(0, 80) + "..."
                      : service.description}
                  </p>
                </div>
                <Link
                  to={`/services/${service._id}`}
                  className="mt-6 inline-block rounded bg-teal-500 px-6 py-3 text-sm text-white"
                >
                  View Details &#8594;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ol className="flex justify-center gap-1 text-xs font-medium">
        {[...Array(pages).keys()].map((number) => (
          <li key={number}>
            <Link
              onClick={() => setPage(number)}
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
            >
              {number + 1}
            </Link>
          </li>
        ))}
        <li>
          <select
            className="block h-8 w-8 rounded border border-gray-100 outline-teal-200 text-center leading-8"
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
        </li>
      </ol>
    </section>
  );
};

export default Services;
