import logo from "../assets/logo.png";
import user from "../assets/user.png";
import building from "../assets/building.png";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LeftBar from "../components/LeftBar";

const ManageList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/buildings",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W3siaWQiOjIsIm5hbWUiOiJST0xFX0FETUlOIn1dLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1ODA0MzM2NCwiZXhwIjoxNjU4MTI5NzY0fQ.V6u6OigZ6l7Kqy58ihUjryamiWPXnGD60IauB8kkygg",
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
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.281 10.719C15.3508 10.7887 15.4062 10.8714 15.444 10.9625C15.4818 11.0537 15.5013 11.1513 15.5013 11.25C15.5013 11.3486 15.4818 11.4463 15.444 11.5374C15.4062 11.6286 15.3508 11.7113 15.281 11.781L10.781 16.281C10.7113 16.3508 10.6285 16.4063 10.5374 16.4441C10.4463 16.4819 10.3486 16.5013 10.25 16.5013C10.1513 16.5013 10.0536 16.4819 9.96252 16.4441C9.8714 16.4063 9.78864 16.3508 9.71897 16.281L7.46897 14.031C7.39924 13.9613 7.34392 13.8785 7.30619 13.7874C7.26845 13.6963 7.24902 13.5986 7.24902 13.5C7.24902 13.4014 7.26845 13.3037 7.30619 13.2126C7.34392 13.1215 7.39924 13.0387 7.46897 12.969C7.6098 12.8282 7.80081 12.7491 7.99997 12.7491C8.09859 12.7491 8.19624 12.7685 8.28735 12.8062C8.37846 12.844 8.46124 12.8993 8.53097 12.969L10.25 14.6895L14.219 10.719C14.2886 10.6492 14.3714 10.5937 14.4625 10.5559C14.5536 10.5181 14.6513 10.4987 14.75 10.4987C14.8486 10.4987 14.9463 10.5181 15.0374 10.5559C15.1285 10.5937 15.2113 10.6492 15.281 10.719Z"
                      fill="black"
                    />
                    <path
                      d="M5 2.25H3.5C2.70435 2.25 1.94129 2.56607 1.37868 3.12868C0.816071 3.69129 0.5 4.45435 0.5 5.25V21C0.5 21.7956 0.816071 22.5587 1.37868 23.1213C1.94129 23.6839 2.70435 24 3.5 24H18.5C19.2956 24 20.0587 23.6839 20.6213 23.1213C21.1839 22.5587 21.5 21.7956 21.5 21V5.25C21.5 4.45435 21.1839 3.69129 20.6213 3.12868C20.0587 2.56607 19.2956 2.25 18.5 2.25H17V3.75H18.5C18.8978 3.75 19.2794 3.90804 19.5607 4.18934C19.842 4.47064 20 4.85218 20 5.25V21C20 21.3978 19.842 21.7794 19.5607 22.0607C19.2794 22.342 18.8978 22.5 18.5 22.5H3.5C3.10218 22.5 2.72064 22.342 2.43934 22.0607C2.15804 21.7794 2 21.3978 2 21V5.25C2 4.85218 2.15804 4.47064 2.43934 4.18934C2.72064 3.90804 3.10218 3.75 3.5 3.75H5V2.25Z"
                      fill="black"
                    />
                    <path
                      d="M13.25 1.5C13.4489 1.5 13.6397 1.57902 13.7803 1.71967C13.921 1.86032 14 2.05109 14 2.25V3.75C14 3.94891 13.921 4.13968 13.7803 4.28033C13.6397 4.42098 13.4489 4.5 13.25 4.5H8.75C8.55109 4.5 8.36032 4.42098 8.21967 4.28033C8.07902 4.13968 8 3.94891 8 3.75V2.25C8 2.05109 8.07902 1.86032 8.21967 1.71967C8.36032 1.57902 8.55109 1.5 8.75 1.5H13.25ZM8.75 0C8.15326 0 7.58097 0.237053 7.15901 0.65901C6.73705 1.08097 6.5 1.65326 6.5 2.25V3.75C6.5 4.34674 6.73705 4.91903 7.15901 5.34099C7.58097 5.76295 8.15326 6 8.75 6H13.25C13.8467 6 14.419 5.76295 14.841 5.34099C15.2629 4.91903 15.5 4.34674 15.5 3.75V2.25C15.5 1.65326 15.2629 1.08097 14.841 0.65901C14.419 0.237053 13.8467 0 13.25 0L8.75 0Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <p>Manage List</p>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex">
          <LeftBar />
          <main className="flex-1 ml-80">
            <div className="px-10 pb-3">
              <div>
                <section className="text-gray-600 body-font">
                  <div className="container px-10 py-10 mx-auto"></div>
                </section>
                <div className="grid grid-cols-2 py-3 text-white bg-[#565656]">
                  <div className="text-left pl-10 my-auto w-full">
                    <p className="font-bold">Order Details</p>
                  </div>
                  <div className="my-auto ml-auto mr-6">
                    <div className="rounded-lg bg-[#4D89FF] w-fit flex py-2">
                      <div className="ml-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3ZM12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5Z"
                            fill="white"
                          />
                          <path
                            d="M18 11.25H12.75V6H11.25V11.25H6V12.75H11.25V18H12.75V12.75H18V11.25Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p className="text-base font-medium mx-3">
                        Add New Listing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 text-white bg-[#565656] ">
                  <div className="grid grid-cols-2 border-black border py-2 ">
                    <div className="font-medium w-full ml-6">
                      <p>Jakarta Pusat</p>
                    </div>
                    <div className="w-fit ml-auto mr-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8708 16.71L3.67676 8.487C2.82776 7.5195 3.51776 6 4.80626 6H19.1943C19.4826 5.99975 19.765 6.08263 20.0074 6.23871C20.2499 6.39479 20.4423 6.61746 20.5614 6.88004C20.6806 7.14262 20.7216 7.434 20.6794 7.71927C20.6373 8.00454 20.5138 8.27161 20.3238 8.4885L13.1298 16.7085C12.989 16.8696 12.8153 16.9987 12.6205 17.0872C12.4257 17.1757 12.2142 17.2215 12.0003 17.2215C11.7863 17.2215 11.5748 17.1757 11.38 17.0872C11.1852 16.9987 11.0116 16.8696 10.8708 16.7085V16.71Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-black border py-2 ">
                    <div className="font-medium w-full ml-6">
                      <p>Jakarta Utara</p>
                    </div>
                    <div className="w-fit ml-auto mr-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8708 16.71L3.67676 8.487C2.82776 7.5195 3.51776 6 4.80626 6H19.1943C19.4826 5.99975 19.765 6.08263 20.0074 6.23871C20.2499 6.39479 20.4423 6.61746 20.5614 6.88004C20.6806 7.14262 20.7216 7.434 20.6794 7.71927C20.6373 8.00454 20.5138 8.27161 20.3238 8.4885L13.1298 16.7085C12.989 16.8696 12.8153 16.9987 12.6205 17.0872C12.4257 17.1757 12.2142 17.2215 12.0003 17.2215C11.7863 17.2215 11.5748 17.1757 11.38 17.0872C11.1852 16.9987 11.0116 16.8696 10.8708 16.7085V16.71Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-black border py-2 w-full">
                    <div className="font-medium w-full ml-6">
                      <p>Jakarta Selatan</p>
                    </div>
                    <div className="w-fit ml-auto mr-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8708 16.71L3.67676 8.487C2.82776 7.5195 3.51776 6 4.80626 6H19.1943C19.4826 5.99975 19.765 6.08263 20.0074 6.23871C20.2499 6.39479 20.4423 6.61746 20.5614 6.88004C20.6806 7.14262 20.7216 7.434 20.6794 7.71927C20.6373 8.00454 20.5138 8.27161 20.3238 8.4885L13.1298 16.7085C12.989 16.8696 12.8153 16.9987 12.6205 17.0872C12.4257 17.1757 12.2142 17.2215 12.0003 17.2215C11.7863 17.2215 11.5748 17.1757 11.38 17.0872C11.1852 16.9987 11.0116 16.8696 10.8708 16.7085V16.71Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-black border py-2 ">
                    <div className="font-medium w-full ml-6">
                      <p>Jakarta Barat</p>
                    </div>
                    <div className="w-fit ml-auto mr-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8708 16.71L3.67676 8.487C2.82776 7.5195 3.51776 6 4.80626 6H19.1943C19.4826 5.99975 19.765 6.08263 20.0074 6.23871C20.2499 6.39479 20.4423 6.61746 20.5614 6.88004C20.6806 7.14262 20.7216 7.434 20.6794 7.71927C20.6373 8.00454 20.5138 8.27161 20.3238 8.4885L13.1298 16.7085C12.989 16.8696 12.8153 16.9987 12.6205 17.0872C12.4257 17.1757 12.2142 17.2215 12.0003 17.2215C11.7863 17.2215 11.5748 17.1757 11.38 17.0872C11.1852 16.9987 11.0116 16.8696 10.8708 16.7085V16.71Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-black border py-2 ">
                    <div className="font-medium w-full ml-6">
                      <p>Jakarta Timur</p>
                    </div>
                    <div className="w-fit ml-auto mr-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8708 16.71L3.67676 8.487C2.82776 7.5195 3.51776 6 4.80626 6H19.1943C19.4826 5.99975 19.765 6.08263 20.0074 6.23871C20.2499 6.39479 20.4423 6.61746 20.5614 6.88004C20.6806 7.14262 20.7216 7.434 20.6794 7.71927C20.6373 8.00454 20.5138 8.27161 20.3238 8.4885L13.1298 16.7085C12.989 16.8696 12.8153 16.9987 12.6205 17.0872C12.4257 17.1757 12.2142 17.2215 12.0003 17.2215C11.7863 17.2215 11.5748 17.1757 11.38 17.0872C11.1852 16.9987 11.0116 16.8696 10.8708 16.7085V16.71Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-6 text-white bg-[#565656]">
                  <div className="text-left pl-10 my-auto w-full  border border-black py-2">
                    <p className="font-medium">SCBD</p>
                  </div>
                  <div className="text-left pl-10 my-auto w-full  border border-black py-2">
                    <p className="font-medium">Kuningan</p>
                  </div>
                  <div className="text-left pl-10 my-auto w-full  border border-black py-2">
                    <p className="font-medium">Kemang</p>
                  </div>
                  <div className="text-left pl-10 my-auto w-full  border border-black py-2">
                    <p className="font-medium">Sudirman</p>
                  </div>
                  <div className="text-left pl-10 my-auto w-full  border border-black py-2">
                    <p className="font-medium">Senayan</p>
                  </div>
                  <div className="text-left pl-10 my-auto w-full  border border-black py-2">
                    <p className="font-medium">Blok M</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10 mb-8">
                <div className="relative">
                  <div className="z-10 absolute bottom-0 left-0 h-28 w-full  bg-black/80">
                    <div className="text-xs font-normal text-white mx-5 my-2">
                      <p>SCBD</p>
                      <p className="text-base font-medium">Equity Tower</p>
                      <p>
                        SCBD Lot 9 Jl. Jenderal Sudirman Kav. 52-53, RT.5/RW.3,
                        Senayan
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                    alt=""
                    className="w-[9999px]"
                  />
                </div>
                <div className="relative">
                  <div className="z-10 absolute bottom-0 left-0 h-28 w-full  bg-black/80">
                    <div className="text-xs font-normal text-white mx-5 my-2">
                      <p>SCBD</p>
                      <p className="text-base font-medium">Equity Tower</p>
                      <p>
                        SCBD Lot 9 Jl. Jenderal Sudirman Kav. 52-53, RT.5/RW.3,
                        Senayan
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                    alt=""
                    className="w-[9999px]"
                  />
                </div>
                <div className="relative">
                  <div className="z-10 absolute bottom-0 left-0 h-28 w-full  bg-black/80">
                    <div className="text-xs font-normal text-white mx-5 my-2">
                      <p>SCBD</p>
                      <p className="text-base font-medium">Equity Tower</p>
                      <p>
                        SCBD Lot 9 Jl. Jenderal Sudirman Kav. 52-53, RT.5/RW.3,
                        Senayan
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                    alt=""
                    className="w-[9999px]"
                  />
                </div>
                <div className="relative">
                  <div className="z-10 absolute bottom-0 left-0 h-28 w-full  bg-black/80">
                    <div className="text-xs font-normal text-white mx-5 my-2">
                      <p>SCBD</p>
                      <p className="text-base font-medium">Equity Tower</p>
                      <p>
                        SCBD Lot 9 Jl. Jenderal Sudirman Kav. 52-53, RT.5/RW.3,
                        Senayan
                      </p>
                    </div>
                  </div>
                  <img
                    src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                    alt=""
                    className="w-[9999px]"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ManageList;
