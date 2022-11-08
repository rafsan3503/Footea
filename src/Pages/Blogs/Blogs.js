import React from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Footea - Blogs</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      ;
      <article class="flex bg-white transition hover:shadow-xl my-5">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 class="font-bold uppercase text-gray-900">
                Difference between SQL and NoSQL
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
          </div>
        </div>
      </article>
      <article class="flex bg-white transition hover:shadow-xl my-5">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--9Eyi8mVf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h70g99gmnoy0boni6j9q.png"
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 class="font-bold uppercase text-gray-900">
                What is JWT, and how does it work?
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP)
            </p>
          </div>
        </div>
      </article>
      <article class="flex bg-white transition hover:shadow-xl my-5">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png"
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 class="font-bold uppercase text-gray-900">
                What is the difference between javascript and Node JS?
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language
            </p>
          </div>
        </div>
      </article>
      <article class="flex bg-white transition hover:shadow-xl my-5">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src="https://amicohoops.net/wp-content/uploads/2021/08/2400%D1%851260-rw-blog-node-js.png"
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 class="font-bold uppercase text-gray-900">
                How does node handle multiple requests at the same time?
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
