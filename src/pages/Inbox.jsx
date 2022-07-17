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
          <main className="flex-1 ml-80">
            <div className="px-10 pb-3">
              <div>
                <section className="text-gray-600 body-font">
                  <div className="container px-10 py-10 mx-auto"></div>
                </section>
                <div className="text-white bg-[#565656] rounded-tl-md rounded-tr-md flex w-fit">
                  <div className="text-left ml-5 py-3 my-auto w-fit">
                    <img src={user} alt="" className="rounded-md" />
                  </div>
                  <div className="py-3 ml-4 mr-5">
                    <p className="text-base font-bold">SCBD, Equity Tower</p>
                    <p className="text-base font-medium">Fatih Safaat</p>
                    <p className="text-xs font-normal">Hi !</p>
                  </div>
                </div>
                <div className="min-h-[560px] border border-black">
                  <div className="bg-gray-300 w-full py-2">
                    <div className="max-w-[900px] ml-8">
                      <div className="bg-white rounded-md w-fit">
                        <p className="text-base font-medium text-left mt-3 mb-1 py-1 px-2">
                          Assalamualaikum
                        </p>
                      </div>
                      <p className="text-xs mb-1">June 18 2022, 14:46</p>
                    </div>
                  </div>
                  <div className="bg-white w-full py-2">
                    <div className="max-w-[900px] w-fit ml-auto mr-8">
                      <div className="bg-gray-300 rounded-md ">
                        <p className="text-base font-medium text-right mt-3 mb-1 py-1 px-2">
                          Waalaikumsalam
                        </p>
                      </div>
                      <p className="text-xs mb-1 text-right">
                        June 18 2022, 14:47
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-300 w-full py-2">
                    <div className="max-w-[900px] ml-8">
                      <div className="bg-white rounded-md w-fit">
                        <p className="text-base font-medium text-left mt-3 mb-1 py-1 px-2">
                          Ada apa ?
                        </p>
                      </div>
                      <p className="text-xs mb-1 ">June 18 2022, 14:47</p>
                    </div>
                  </div>
                  <div className="bg-white w-full py-2">
                    <div className="max-w-[900px] w-fit ml-auto mr-8">
                      <div className="bg-gray-300 rounded-md w-fit">
                        <p className="text-base font-medium text-right mt-3 mb-1 py-1 px-2">
                          Lahhhh -_- Situ yang ngechat duluannnn
                        </p>
                      </div>
                      <p className="text-xs mb-1 text-right">
                        June 18 2022, 14:47
                      </p>
                    </div>
                  </div>
                  <div className="bg-white w-full py-2">
                    <div className="max-w-[900px] w-fit ml-auto mr-8">
                      <div className="bg-gray-300 rounded-md ">
                        <p className="text-base font-medium text-right mt-3 mb-1 py-1 px-2">
                          Bismillah Headshot
                        </p>
                      </div>
                      <p className="text-xs mb-1 text-right">
                        June 18 2022, 14:47
                      </p>
                    </div>
                  </div>
                  <div className="bg-white w-full py-2">
                    <div className="max-w-[900px] w-fit ml-auto mr-8">
                      <div className="bg-gray-300 rounded-md ">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLYy8mYRaAG9xKwWQdGVUS2TOOYG22vDWgw&usqp=CAU"
                          alt=""
                          className="text-base font-medium text-left mt-3 mb-1 py-1 px-2"
                        />
                      </div>
                      <p className="text-xs mb-1 text-right">
                        June 18 2022, 14:48
                      </p>
                    </div>
                  </div>
                  <div className="w-full border border-black h-32 ">
                    <div className="mx-2 my-1 h-[100px] w-full">
                      <textarea
                        className="focus:outline-none"
                        name=""
                        cols="117"
                        rows="5"
                        style={{ resize: "none" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full bg-[#4D89FF] grid grid-cols-2">
                    <div className="bg-white rounded-md items-center text-[#4D89FF] flex w-fit mx-10 my-2 px-5 py-1">
                      <div>
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.19292 14.4999C5.64214 14.4973 5.09738 14.3851 4.59035 14.1699C4.08333 13.9548 3.62417 13.6409 3.23959 13.2466C2.8579 12.8848 2.55129 12.4514 2.33731 11.971C2.12333 11.4906 2.00618 10.9727 1.99255 10.447C1.97893 9.92131 2.06911 9.39807 2.25792 8.90725C2.44674 8.41642 2.73048 7.96765 3.09292 7.58661L7.99959 2.63327C8.26162 2.37173 8.57393 2.16599 8.91768 2.02849C9.26142 1.891 9.62947 1.82459 9.99959 1.83327C10.3961 1.83462 10.7883 1.9149 11.1534 2.06942C11.5186 2.22394 11.8493 2.44961 12.1263 2.73327C12.6776 3.2641 12.9973 3.99095 13.016 4.75606C13.0348 5.52117 12.751 6.26278 12.2263 6.81994L7.29292 11.7733C7.13491 11.9324 6.94688 12.0585 6.73974 12.1443C6.5326 12.2301 6.31048 12.274 6.08626 12.2733C5.84404 12.2736 5.60421 12.2254 5.38094 12.1315C5.15766 12.0376 4.95545 11.8999 4.78626 11.7266C4.44808 11.3992 4.25277 10.9515 4.24279 10.4809C4.2328 10.0103 4.40894 9.55475 4.73292 9.21327L9.28626 4.63994C9.41584 4.55388 9.57145 4.51584 9.72613 4.53242C9.88081 4.549 10.0248 4.61914 10.1332 4.73071C10.2416 4.84229 10.3076 4.98826 10.3197 5.14335C10.3318 5.29844 10.2893 5.45288 10.1996 5.57994L5.64626 10.1533C5.57033 10.2447 5.53337 10.3624 5.54335 10.4809C5.55332 10.5993 5.60943 10.7091 5.69959 10.7866C5.7934 10.8811 5.91986 10.9359 6.05292 10.9399C6.10221 10.9406 6.15116 10.9316 6.19692 10.9133C6.24269 10.895 6.28438 10.8678 6.31959 10.8333L11.2463 5.87994C11.5228 5.57273 11.6673 5.16903 11.6486 4.75611C11.6299 4.34319 11.4494 3.95422 11.1463 3.67327C10.8646 3.3809 10.4817 3.20758 10.0762 3.18898C9.67067 3.17038 9.27345 3.30791 8.96626 3.57327L4.03959 8.49994C3.80002 8.75726 3.6137 9.0594 3.49134 9.389C3.36899 9.7186 3.31301 10.0691 3.32664 10.4204C3.34028 10.7718 3.42324 11.1169 3.57077 11.436C3.71829 11.7552 3.92747 12.042 4.18626 12.2799C4.44578 12.549 4.7563 12.7636 5.0997 12.9112C5.44309 13.0589 5.81247 13.1366 6.18626 13.1399C6.50854 13.1426 6.82816 13.0815 7.12676 12.9602C7.42536 12.8389 7.69706 12.6599 7.92626 12.4333L12.8529 7.47994C12.9146 7.41778 12.988 7.36839 13.0688 7.33458C13.1496 7.30077 13.2363 7.28321 13.3239 7.2829C13.4115 7.28259 13.4983 7.29954 13.5793 7.33278C13.6604 7.36601 13.7341 7.41489 13.7963 7.47661C13.8584 7.53833 13.9078 7.61169 13.9416 7.6925C13.9754 7.77331 13.993 7.85999 13.9933 7.94758C13.9936 8.03518 13.9767 8.12198 13.9434 8.20303C13.9102 8.28407 13.8613 8.35778 13.7996 8.41994L8.87292 13.3733C8.52313 13.7293 8.10608 14.0122 7.646 14.2056C7.18593 14.399 6.692 14.4991 6.19292 14.4999Z"
                            fill="#4D89FF"
                          />
                        </svg>
                      </div>
                      <p>Attach File</p>
                    </div>
                    <div className="bg-white rounded-md text-[#4D89FF] flex w-fit ml-auto mr-10 my-2 px-10 py-1">
                      <p className="text-center">Send</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
