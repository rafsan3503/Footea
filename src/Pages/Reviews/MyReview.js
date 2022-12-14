import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvier/UserContext";
import Swal from "sweetalert2";
import reviewNotFound from "../../Assets/review-not-found.gif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import loader from "../../Assets/loader.gif";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  // email for protected api
  const email = user.email || `${user.uid}@gmail.com`;

  // set loader
  const [loading, setLoading] = useState(true);

  // get reviews with jwt empliment
  useEffect(() => {
    fetch(`https://footeo-server.vercel.app/myreviews?email=${email}`, {
      headers: {
        authorization: localStorage.getItem("access-token"),
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut().then().catch();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [email, logOut]);

  // delete review

  const handleDelete = (review) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete this review ${review.serviceName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://footeo-server.vercel.app/myreviews/${review._id}`, {
          method: "DELETE",
          headers: {
            authorization: localStorage.getItem("access-token"),
          },
        })
          .then((res) => {
            if (res.status === 401 || res.status === 403) {
              logOut().then().catch();
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              // update all review
              const remaining = reviews.filter((rvw) => rvw._id !== review._id);
              setReviews(remaining);
            }
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  // update review
  const handleUpdate = async (review) => {
    const { value: text } = await Swal.fire({
      title: "Update This review",
      input: "textarea",
      background: "none",
      color: "aqua",
      backdrop: "blur(10px)",
      text: review.review,
      imageWidth: 100,
      imageHeight: 100,
      inputValue: review.review,
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
      confirmButtonText: "Update",
    });

    const userReview = {
      review: text,
    };

    if (text) {
      // update all reviews
      fetch(`https://footeo-server.vercel.app/myreviews/${review._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("access-token"),
        },
        body: JSON.stringify(userReview),
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logOut().then().catch();
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            fetch(`https://footeo-server.vercel.app/myreviews?email=${email}`)
              .then((res) => res.json())
              .then((data) => {
                setReviews(data);
              });
          }

          // update single review

          fetch(`https://footeo-server.vercel.app/myreviews?email=${email}`, {
            headers: {
              authorization: localStorage.getItem("access-token"),
            },
          })
            .then((res) => {
              if (res.status === 401 || res.status === 403) {
                logOut().then().catch();
              }
              return res.json();
            })
            .then((data) => {
              setReviews(data);
            });
        });

      Swal.fire({
        icon: "success",
        text: "Review updated successfully!",
      });
    }
  };

  // spinner div
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <img src={loader} alt="" />
      </div>
    );
  }
  return (
    <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Footea - My Reviews</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left"></th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div className="flex items-center gap-2">
                Date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div className="flex items-center gap-2">
                Service Name
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div className="flex items-center gap-2">
                Review
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div className="flex items-center gap-2">
                ReviewId
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {reviews.map((review) => (
            <tr key={review._id}>
              <td
                onClick={() => handleDelete(review)}
                className="sticky inset-y-0 left-0 bg-white px-4 py-2"
              >
                <strong className="rounded bg-red-100 text-xs font-medium text-red-700">
                  <FaTrash />
                </strong>
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {review.date.slice(0, 10)}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {review.serviceName}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {review.review.length > 20
                  ? review.review.slice(0, 20) + "..."
                  : review.review}
                <Link
                  to={`/services/${review.serviceId}`}
                  className="inline-block rounded bg-teal-500 px-2 py-2 mx-3 text-sm text-white"
                >
                  View
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {review.serviceId}
              </td>
              <td
                onClick={() => handleUpdate(review)}
                className="whitespace-nowrap px-4 py-2 flex items-center"
              >
                <strong className="rounded bg-teal-100 text-xs font-medium text-teal-400 p-2 cursor-pointer">
                  Update
                </strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {reviews.length === 0 && (
        <div className="text-center">
          <img src={reviewNotFound} alt="" className="w-1/2 mx-auto" />
          <h2 className="text-red-500 font-bold">No Review were added </h2>
          <Link
            to="/services"
            className="my-6 inline-block rounded border-2 border-teal-200 font-medium text-teal-500 hover:bg-teal-500 px-6 py-3 text-lg hover:text-white"
          >
            Go to services &#8594;
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyReview;
