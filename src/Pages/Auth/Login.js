import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../Assets/login.gif";
import { AuthContext } from "../../AuthProvier/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const { userLogIn, googleLogIn, twitterLogIn, githubLogIn } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.password_confirmation.value;
    if (password !== confirm) {
      toast.error("password does not match", { autoClose: 500 });
      return;
    }

    const user = {
      email,
    };

    userLogIn(email, password)
      .then((res) => {
        navigate(from, { replace: true });
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("access-token", data.token);
          });
        navigate(from, { replace: true });
        toast.success("Log in success!!", { autoClose: 500 });
      })
      .catch((err) => {
        toast.error(err.message, { autoClose: 500 });
      });
  };
  // google log in
  const handleGoogle = () => {
    googleLogIn().then((res) => {
      const email = res.user.email;
      const user = {
        email,
      };
      fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("access-token", data.token);
        });
      navigate(from, { replace: true });
      toast.success("Google log in success", { autoClose: 500 });
    });
  };

  // twitter log in
  const handleTwitter = () => {
    twitterLogIn().then((res) => {
      const userId = res.user.uid;
      const email = `${userId}@gmail.com`;
      const user = {
        email,
      };
      fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("access-token", data.token);
        });
      navigate(from, { replace: true });
      toast.success("Twitter log in success", { autoClose: 500 });
    });
  };

  // github log in
  const handleGithub = () => {
    githubLogIn().then((res) => {
      const userId = res.user.uid;
      const email = `${userId}@gmail.com`;
      const user = {
        email,
      };
      fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("access-token", data.token);
        });

      navigate(from, { replace: true });
      toast.success("Github log in success", { autoClose: 500 });
    });
  };
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src={login}
            class="absolute inset-0 h-full w-full object-cover"
          />
        </section>

        <main
          aria-label="Main"
          class="flex items-center justify-center pb-16 sm:px-12 lg:col-span-7 xl:col-span-6 shadow-lg shadow-teal-200 rounded-lg"
        >
          <div class="max-w-xl lg:max-w-3xl">
            <h2 className="text-teal-400 font-bold text-center my-4 text-3xl">
              Login Now
            </h2>

            <div className="my-6 space-y-4">
              <button
                onClick={handleGoogle}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center shadow-md shadow-teal-100 text-teal-400 w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
              <Link
                onClick={handleGithub}
                aria-label="Login with GitHub"
                role="button"
                className="flex items-center justify-center shadow-md shadow-teal-100 text-teal-400 w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
                <p>Login with GitHub</p>
              </Link>
              <Link
                onClick={handleTwitter}
                aria-label="Login with Twitter"
                role="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 shadow-md shadow-teal-100 text-teal-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
                <p>Login with Twitter</p>
              </Link>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-400" />
              <p className="px-3 dark:text-gray-400">OR</p>
              <hr className="w-full dark:text-gray-400" />
            </div>
            <form onSubmit={handleSubmit} class="mt-8 grid grid-cols-6 gap-6">
              <div class="col-span-6">
                <label
                  for="Email"
                  class="block text-sm font-medium text-teal-400"
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  class="mt-1 w-full rounded-md border-teal-200 p-3 outline-none bg-white text-sm text-teal-700 shadow-md shadow-teal-100"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Password"
                  class="block text-sm font-medium text-teal-400"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  required
                  class="mt-1 w-full rounded-md border-teal-200 p-3 outline-none bg-white text-sm text-teal-700 shadow-md shadow-teal-100"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="PasswordConfirmation"
                  class="block text-sm font-medium text-teal-400"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  required
                  class="mt-1 w-full rounded-md border-teal-200 p-3 outline-none bg-white text-sm text-teal-700 shadow-md shadow-teal-100"
                />
              </div>
              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button class="inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500">
                  Log In
                </button>

                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Dont have an account?
                  <Link to="/signup" class="text-gray-700 underline">
                    Sign Up
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
