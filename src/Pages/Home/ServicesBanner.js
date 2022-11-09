import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesBanner = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://footeo-server.vercel.app/services?resize=3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 lg:items-stretch">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-teal-500 sm:text-4xl">
              Services
            </h2>

            <p className="mt-4 text-black sm:text-xl">
              The art or process of producing images by the action of radiant
              energy and especially light on a sensitive surface
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
            {services.map((service) => (
              <div
                key={service._id}
                href="#"
                className="block shadow-lg shadow-teal-200 rounded-lg"
              >
                <div className="flex justify-center">
                  <strong className="relative h-6 bg-teal-400 px-4 text-xs uppercase leading-6 text-white">
                    Featured
                  </strong>
                </div>

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

          <div className="text-center">
            <Link
              to="/services"
              className="mt-6 inline-block rounded border-2 border-teal-200 font-medium text-teal-500 hover:bg-teal-500 px-6 py-3 text-lg hover:text-white"
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
