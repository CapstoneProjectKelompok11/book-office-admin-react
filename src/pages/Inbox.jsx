import logo from "../assets/logo.png";
import user from "../assets/user.png";
import building from "../assets/building.png";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LeftBar from "../components/LeftBar";

const Inbox = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/admin/reservation",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W3siaWQiOjIsIm5hbWUiOiJST0xFX0FETUlOIn1dLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1Nzk0ODkwNywiZXhwIjoxNjU4MDM1MzA3fQ.6tDl3XGuiS_QQafYKIy1DcYq-9hhubGqrwB3-4wnWOk",
          },
        }
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  console.log("data", data);

  return (
    <div>
      <div>
        <nav className="bg-white px-2 sm:px-4 py-2 fixed w-full shadow-lg">
          <div className="md:px-20 px-10 flex flex-wrap justify-between items-center mx-auto">
            <div className="grid grid-cols-2 content-center">
              <div className="relative flex pl-60 text-xl text-black pt-1">
                <span className="pr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.30435 6.132C3.50184 5.24358 3.9964 4.44907 4.70636 3.87965C5.41632 3.31022 6.29925 2.99993 7.20935 3H16.7914C17.7015 2.99993 18.5844 3.31022 19.2943 3.87965C20.0043 4.44907 20.4989 5.24358 20.6964 6.132L20.8434 6.794C21.6054 10.2228 21.6054 13.7772 20.8434 17.206L20.6964 17.868C20.4989 18.7564 20.0043 19.5509 19.2943 20.1204C18.5844 20.6898 17.7015 21.0001 16.7914 21H7.21035C6.30025 21.0001 5.41732 20.6898 4.70736 20.1204C3.9974 19.5509 3.50284 18.7564 3.30535 17.868L3.15835 17.206C2.39644 13.7771 2.39644 10.2229 3.15835 6.794L3.30535 6.132H3.30435Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 13H8.838C8.838 14 9.811 16 12.243 16C14.676 16 15.649 14 15.649 13H21.5"
                      stroke="black"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p>Inbox</p>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex">
          <LeftBar />
          <main className="flex-1 ml-80"></main>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
