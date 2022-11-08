import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvier/UserContext";
import Swal from "sweetalert2";
import reviewNotFound from "../../Assets/review-not-found.gif";
import { Link } from "react-router-dom";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email || `${user.uid}@gmail.com`;
  console.log(reviews.length);
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [email]);

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
        fetch(`http://localhost:5000/myreviews/${review._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = reviews.filter((rvw) => rvw._id !== review._id);
              setReviews(remaining);
            }
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
  return (
    <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
      <table class="min-w-full divide-y divide-gray-200 text-sm">
        <thead class="bg-gray-100">
          <tr>
            <th class="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left"></th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div class="flex items-center gap-2">
                Date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div class="flex items-center gap-2">
                Service Name
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div class="flex items-center gap-2">
                Review
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              <div class="flex items-center gap-2">
                ReviewId
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          {reviews.map((review) => (
            <tr>
              <td
                onClick={() => handleDelete(review)}
                class="sticky inset-y-0 left-0 bg-white px-4 py-2"
              >
                <strong class="rounded bg-red-100 text-xs font-medium text-red-700">
                  <FaTrash />
                </strong>
              </td>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {review.date.slice(0, 10)}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {review.serviceName}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {review.review.slice(0, 20) + "..."}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {review.serviceId}
              </td>
              <td class="whitespace-nowrap px-4 py-2 flex items-center">
                <strong class="rounded bg-teal-100 text-xs font-medium text-teal-400 p-2 cursor-pointer">
                  Update
                </strong>
              </td>
            </tr>
          ))}
          {/* {reviews || (
            <img src={reviewNotFound} className="w-11/12 mx-auto" alt="" />
          )} */}
        </tbody>
      </table>
      {reviews.length === 0 && (
        <div className="text-center">
          <img src={reviewNotFound} alt="" className="w-1/2 mx-auto" />
          <h2 className="text-red-500 font-bold">
            No Review Found!! please add some{" "}
          </h2>
          <Link
            to="/services"
            class="my-6 inline-block rounded border-2 border-teal-200 font-medium text-teal-500 hover:bg-teal-500 px-6 py-3 text-lg hover:text-white"
          >
            Go to services &#8594;
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyReview;
