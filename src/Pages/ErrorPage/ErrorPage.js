import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorimg from "../../Assets/error.gif";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div class="grid min-h-screen place-content-center bg-white">
      <div class="text-center">
        <img src={errorimg} alt="" className="w-9/12 mx-auto" />

        <h1 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p class="mt-4 text-red-500">{error.message || error.statusText}</p>
        <Link
          to="/home"
          className="inline-block shrink-0 rounded-md border my-5 border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
