import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../AuthProvier/UserContext";
import loader from "../../Assets/loader.gif";
import { Helmet } from "react-helmet";

const Services = () => {
  const [services, setServices] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://footeo-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [setLoading]);
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
    </section>
  );
};

export default Services;
