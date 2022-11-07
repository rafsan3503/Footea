import React from "react";

const Gallery = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <h2 className="text-3xl font-bold text-teal-500 sm:text-4xl text-center py-6">
        Our Gallery
      </h2>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://images.unsplash.com/photo-1533146303127-f2ef440cfeb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt=""
          className="w-full h-full col-span-2 row-span-2 object-cover rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 border-4 border-teal-200 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded object-cover shadow-sm border-4 border-teal-200 min-h-48 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80"
        />
        <img
          alt=""
          className="w-full h-full rounded object-cover shadow-sm border-4 border-teal-200 min-h-48 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1575436575914-3722bf068859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm border-4 object-cover border-teal-200 min-h-48 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm border-4 object-cover border-teal-200 min-h-48 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm border-4 border-teal-200 object-cover min-h-48 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm border-4 border-teal-200 object-cover min-h-48 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1614375516536-ee3b08717d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 object-cover border-4 border-teal-200 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 object-cover border-4 border-teal-200 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1615439935188-5e488fc6b764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <img
          src="https://images.unsplash.com/photo-1574695272952-ef1eafc76515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-full border-4 border-teal-200 h-full object-cover col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};

export default Gallery;
