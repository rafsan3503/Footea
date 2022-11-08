import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.gif";
import { AuthContext } from "../../AuthProvier/UserContext";
import userImg from "../../Assets/user.gif";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // log out
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log out success!!", { autoClose: 500 });
    });
  };
  return (
    <div className="px-4 py-6 mx-auto lg:py-8">
      <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
        <Link
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <div className="flex text-teal-400 items-center">
            <span className="text-5xl font-bold">FO</span>
            <img src={logo} className="w-20" alt="" />
            <span className="text-5xl font-bold">TEA</span>
          </div>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              aria-label="Our product"
              title="Home"
              className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              aria-label="Our product"
              title="Home"
              className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Services
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link
                  to="/myreviews"
                  aria-label="Our product"
                  title="My Review"
                  className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/addservice"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Add Service
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              to="/blogs"
              aria-label="About us"
              title="Blogs"
              className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blogs
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <div className="relative flex-shrink-0">
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 rounded-full text-gray-100"></span>
                  <img
                    src={user.photoURL ? user.photoURL : userImg}
                    alt=""
                    className="w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
              </li>
              <li>
                <Link
                  onClick={handleLogOut}
                  href="#"
                  className="inline-block rounded bg-teal-500 px-6 py-3 text-sm text-white"
                >
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/Login"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Log In
              </Link>
            </li>
          )}
        </ul>
        <div className="lg:hidden z-10">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex text-teal-400 items-center">
                      <span className="text-5xl font-bold">FO</span>
                      <img src={logo} className="w-20" alt="" />
                      <span className="text-5xl font-bold">TEA</span>
                    </div>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Our product"
                        title="Home"
                        className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        aria-label="Our product"
                        title="Home"
                        className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Services
                      </Link>
                    </li>
                    {user && (
                      <>
                        <li>
                          <Link
                            to="/myreviews"
                            aria-label="Our product"
                            title="My Review"
                            className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            My Reviews
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/addservice"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Add Service
                          </Link>
                        </li>
                      </>
                    )}
                    <li>
                      <Link
                        to="/blogs"
                        aria-label="About us"
                        title="Blogs"
                        className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blogs
                      </Link>
                    </li>
                    {user ? (
                      <>
                        <li>
                          <div className="relative flex-shrink-0">
                            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 rounded-full text-gray-100"></span>
                            <img
                              src={user.photoURL ? user.photoURL : userImg}
                              alt=""
                              className="w-12 h-12 rounded-full bg-gray-500"
                            />
                          </div>
                        </li>
                        <li>
                          <Link
                            onClick={handleLogOut}
                            href="#"
                            className="inline-block rounded bg-teal-500 px-6 py-3 text-sm text-white"
                          >
                            Log Out
                          </Link>
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link
                          to="/Login"
                          aria-label="Sign in"
                          title="Sign in"
                          className="font-medium tracking-wide text-teal-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Log In
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
