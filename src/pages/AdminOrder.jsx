import React from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import building from "../assets/building.png";

const AdminOrder = () => {
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
                      d="M14.25 0C14.4489 0 14.6397 0.0790176 14.7803 0.21967C14.921 0.360322 15 0.551088 15 0.75C15 0.948912 15.079 1.13968 15.2197 1.28033C15.3603 1.42098 15.5511 1.5 15.75 1.5C15.9489 1.5 16.1397 1.57902 16.2803 1.71967C16.421 1.86032 16.5 2.05109 16.5 2.25V3C16.5 3.19891 16.421 3.38968 16.2803 3.53033C16.1397 3.67098 15.9489 3.75 15.75 3.75H8.25C8.05109 3.75 7.86032 3.67098 7.71967 3.53033C7.57902 3.38968 7.5 3.19891 7.5 3V2.25C7.5 2.05109 7.57902 1.86032 7.71967 1.71967C7.86032 1.57902 8.05109 1.5 8.25 1.5C8.44891 1.5 8.63968 1.42098 8.78033 1.28033C8.92098 1.13968 9 0.948912 9 0.75C9 0.551088 9.07902 0.360322 9.21967 0.21967C9.36032 0.0790176 9.55109 0 9.75 0L14.25 0Z"
                      fill="black"
                    />
                    <path
                      d="M4.5 3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H6C6.19891 3 6.38968 2.92098 6.53033 2.78033C6.67098 2.63968 6.75 2.44891 6.75 2.25C6.75 2.05109 6.67098 1.86032 6.53033 1.71967C6.38968 1.57902 6.19891 1.5 6 1.5H5.25C4.65326 1.5 4.08097 1.73705 3.65901 2.15901C3.23705 2.58097 3 3.15326 3 3.75V21.75C3 22.3467 3.23705 22.919 3.65901 23.341C4.08097 23.7629 4.65326 24 5.25 24H18.75C19.3467 24 19.919 23.7629 20.341 23.341C20.7629 22.919 21 22.3467 21 21.75V3.75C21 3.15326 20.7629 2.58097 20.341 2.15901C19.919 1.73705 19.3467 1.5 18.75 1.5H18C17.8011 1.5 17.6103 1.57902 17.4697 1.71967C17.329 1.86032 17.25 2.05109 17.25 2.25C17.25 2.44891 17.329 2.63968 17.4697 2.78033C17.6103 2.92098 17.8011 3 18 3H18.75C18.9489 3 19.1397 3.07902 19.2803 3.21967C19.421 3.36032 19.5 3.55109 19.5 3.75V21.75C19.5 21.9489 19.421 22.1397 19.2803 22.2803C19.1397 22.421 18.9489 22.5 18.75 22.5H5.25C5.05109 22.5 4.86032 22.421 4.71967 22.2803C4.57902 22.1397 4.5 21.9489 4.5 21.75V3.75Z"
                      fill="black"
                    />
                    <path
                      d="M15 10.5C15 10.1022 15.158 9.72064 15.4393 9.43934C15.7206 9.15804 16.1022 9 16.5 9C16.8978 9 17.2794 9.15804 17.5607 9.43934C17.842 9.72064 18 10.1022 18 10.5V18C18 18.3978 17.842 18.7794 17.5607 19.0607C17.2794 19.342 16.8978 19.5 16.5 19.5C16.1022 19.5 15.7206 19.342 15.4393 19.0607C15.158 18.7794 15 18.3978 15 18V10.5ZM6 16.5C6 16.1022 6.15804 15.7206 6.43934 15.4393C6.72064 15.158 7.10218 15 7.5 15C7.89782 15 8.27936 15.158 8.56066 15.4393C8.84196 15.7206 9 16.1022 9 16.5V18C9 18.3978 8.84196 18.7794 8.56066 19.0607C8.27936 19.342 7.89782 19.5 7.5 19.5C7.10218 19.5 6.72064 19.342 6.43934 19.0607C6.15804 18.7794 6 18.3978 6 18V16.5ZM12 12C11.6022 12 11.2206 12.158 10.9393 12.4393C10.658 12.7206 10.5 13.1022 10.5 13.5V18C10.5 18.3978 10.658 18.7794 10.9393 19.0607C11.2206 19.342 11.6022 19.5 12 19.5C12.3978 19.5 12.7794 19.342 13.0607 19.0607C13.342 18.7794 13.5 18.3978 13.5 18V13.5C13.5 13.1022 13.342 12.7206 13.0607 12.4393C12.7794 12.158 12.3978 12 12 12Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <p>Order Details</p>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex">
          <aside className="w-80 fixed left-0 top-0 h-screen bg-white drop-shadow-lg ">
            <div className="overflow-y-auto custom-bg-tosca h-full rounded">
              <div>
                <ul>
                  <li>
                    <div className="py-6 bg-[#4D89FF] text-center">
                      <img className="m-auto" src={logo} alt="" />{" "}
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="space-y-2 py-4 px-6">
                <li>
                  <a
                    href="#"
                    className="hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 flex mt-10 items-center px-6 py-4 text-base font-normal text-white bg-[#565656] rounded-lg "
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.675 9.0375C21.1479 7.78994 20.3838 6.6565 19.425 5.7C18.4685 4.74119 17.3351 3.97707 16.0875 3.45C14.7914 2.90156 13.418 2.625 12 2.625C10.582 2.625 9.20859 2.90156 7.9125 3.45C6.66494 3.97707 5.5315 4.74119 4.575 5.7C3.61619 6.6565 2.85207 7.78994 2.325 9.0375C1.77656 10.3336 1.5 11.707 1.5 13.125C1.5 16.2352 2.86641 19.1648 5.24766 21.1664L5.2875 21.1992C5.42344 21.3117 5.59453 21.375 5.77031 21.375H18.232C18.4078 21.375 18.5789 21.3117 18.7148 21.1992L18.7547 21.1664C21.1336 19.1648 22.5 16.2352 22.5 13.125C22.5 11.707 22.2211 10.3336 21.675 9.0375ZM17.8453 19.5938H6.15469C5.24905 18.7772 4.52524 17.7793 4.03021 16.6649C3.53518 15.5505 3.28001 14.3444 3.28125 13.125C3.28125 10.7953 4.18828 8.60625 5.83594 6.96094C7.48359 5.31328 9.67266 4.40625 12 4.40625C14.3297 4.40625 16.5188 5.31328 18.1641 6.96094C19.8117 8.60859 20.7188 10.7977 20.7188 13.125C20.7188 15.6 19.6758 17.9414 17.8453 19.5938ZM14.6133 9.87891C14.578 9.84401 14.5305 9.82444 14.4809 9.82444C14.4313 9.82444 14.3837 9.84401 14.3484 9.87891L12.368 11.8594C11.9297 11.7422 11.4445 11.8547 11.1 12.1992C10.978 12.321 10.8812 12.4657 10.8151 12.6249C10.749 12.7842 10.715 12.9549 10.715 13.1273C10.715 13.2998 10.749 13.4705 10.8151 13.6297C10.8812 13.789 10.978 13.9337 11.1 14.0555C11.2218 14.1775 11.3665 14.2743 11.5257 14.3404C11.685 14.4064 11.8557 14.4404 12.0281 14.4404C12.2005 14.4404 12.3713 14.4064 12.5305 14.3404C12.6898 14.2743 12.8344 14.1775 12.9562 14.0555C13.1195 13.8927 13.2369 13.6898 13.2965 13.4671C13.3562 13.2445 13.3561 13.0101 13.2961 12.7875L15.2766 10.807C15.3492 10.7344 15.3492 10.6148 15.2766 10.5422L14.6133 9.87891ZM11.4844 7.5H12.5156C12.6187 7.5 12.7031 7.41563 12.7031 7.3125V5.4375C12.7031 5.33437 12.6187 5.25 12.5156 5.25H11.4844C11.3813 5.25 11.2969 5.33437 11.2969 5.4375V7.3125C11.2969 7.41563 11.3813 7.5 11.4844 7.5ZM17.5781 12.6094V13.6406C17.5781 13.7437 17.6625 13.8281 17.7656 13.8281H19.6406C19.7437 13.8281 19.8281 13.7437 19.8281 13.6406V12.6094C19.8281 12.5063 19.7437 12.4219 19.6406 12.4219H17.7656C17.6625 12.4219 17.5781 12.5063 17.5781 12.6094ZM17.8758 7.9875L17.1469 7.25859C17.1116 7.2237 17.064 7.20413 17.0145 7.20413C16.9649 7.20413 16.9173 7.2237 16.882 7.25859L15.5555 8.58516C15.5206 8.6204 15.501 8.66799 15.501 8.71758C15.501 8.76717 15.5206 8.81476 15.5555 8.85L16.2844 9.57891C16.357 9.65156 16.4766 9.65156 16.5492 9.57891L17.8758 8.25234C17.9484 8.17969 17.9484 8.06016 17.8758 7.9875ZM7.12734 7.25859C7.0921 7.2237 7.04452 7.20412 6.99492 7.20413C6.94533 7.20412 6.89774 7.2237 6.8625 7.25859L6.13359 7.9875C6.0987 8.02274 6.07912 8.07033 6.07913 8.11992C6.07912 8.16952 6.0987 8.2171 6.13359 8.25234L7.46016 9.57891C7.53281 9.65156 7.65234 9.65156 7.725 9.57891L8.45391 8.85C8.52656 8.77734 8.52656 8.65781 8.45391 8.58516L7.12734 7.25859ZM6.14062 12.4219H4.26562C4.1625 12.4219 4.07812 12.5063 4.07812 12.6094V13.6406C4.07812 13.7437 4.1625 13.8281 4.26562 13.8281H6.14062C6.24375 13.8281 6.32812 13.7437 6.32812 13.6406V12.6094C6.32812 12.5063 6.24375 12.4219 6.14062 12.4219Z"
                        fill="white"
                      />
                    </svg>
                    <span className="ml-3 custom-text-maroon font-semibold">
                      Dashboard
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 flex mt-3 items-center px-6 py-4 text-base font-normal rounded-lg text-white bg-[#565656]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.25 0C14.4489 0 14.6397 0.0790176 14.7803 0.21967C14.921 0.360322 15 0.551088 15 0.75C15 0.948912 15.079 1.13968 15.2197 1.28033C15.3603 1.42098 15.5511 1.5 15.75 1.5C15.9489 1.5 16.1397 1.57902 16.2803 1.71967C16.421 1.86032 16.5 2.05109 16.5 2.25V3C16.5 3.19891 16.421 3.38968 16.2803 3.53033C16.1397 3.67098 15.9489 3.75 15.75 3.75H8.25C8.05109 3.75 7.86032 3.67098 7.71967 3.53033C7.57902 3.38968 7.5 3.19891 7.5 3V2.25C7.5 2.05109 7.57902 1.86032 7.71967 1.71967C7.86032 1.57902 8.05109 1.5 8.25 1.5C8.44891 1.5 8.63968 1.42098 8.78033 1.28033C8.92098 1.13968 9 0.948912 9 0.75C9 0.551088 9.07902 0.360322 9.21967 0.21967C9.36032 0.0790176 9.55109 0 9.75 0L14.25 0Z"
                        fill="white"
                      />
                      <path
                        d="M4.5 3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H6C6.19891 3 6.38968 2.92098 6.53033 2.78033C6.67098 2.63968 6.75 2.44891 6.75 2.25C6.75 2.05109 6.67098 1.86032 6.53033 1.71967C6.38968 1.57902 6.19891 1.5 6 1.5H5.25C4.65326 1.5 4.08097 1.73705 3.65901 2.15901C3.23705 2.58097 3 3.15326 3 3.75V21.75C3 22.3467 3.23705 22.919 3.65901 23.341C4.08097 23.7629 4.65326 24 5.25 24H18.75C19.3467 24 19.919 23.7629 20.341 23.341C20.7629 22.919 21 22.3467 21 21.75V3.75C21 3.15326 20.7629 2.58097 20.341 2.15901C19.919 1.73705 19.3467 1.5 18.75 1.5H18C17.8011 1.5 17.6103 1.57902 17.4697 1.71967C17.329 1.86032 17.25 2.05109 17.25 2.25C17.25 2.44891 17.329 2.63968 17.4697 2.78033C17.6103 2.92098 17.8011 3 18 3H18.75C18.9489 3 19.1397 3.07902 19.2803 3.21967C19.421 3.36032 19.5 3.55109 19.5 3.75V21.75C19.5 21.9489 19.421 22.1397 19.2803 22.2803C19.1397 22.421 18.9489 22.5 18.75 22.5H5.25C5.05109 22.5 4.86032 22.421 4.71967 22.2803C4.57902 22.1397 4.5 21.9489 4.5 21.75V3.75Z"
                        fill="white"
                      />
                      <path
                        d="M15 10.5C15 10.1022 15.158 9.72064 15.4393 9.43934C15.7206 9.15804 16.1022 9 16.5 9C16.8978 9 17.2794 9.15804 17.5607 9.43934C17.842 9.72064 18 10.1022 18 10.5V18C18 18.3978 17.842 18.7794 17.5607 19.0607C17.2794 19.342 16.8978 19.5 16.5 19.5C16.1022 19.5 15.7206 19.342 15.4393 19.0607C15.158 18.7794 15 18.3978 15 18V10.5ZM6 16.5C6 16.1022 6.15804 15.7206 6.43934 15.4393C6.72064 15.158 7.10218 15 7.5 15C7.89782 15 8.27936 15.158 8.56066 15.4393C8.84196 15.7206 9 16.1022 9 16.5V18C9 18.3978 8.84196 18.7794 8.56066 19.0607C8.27936 19.342 7.89782 19.5 7.5 19.5C7.10218 19.5 6.72064 19.342 6.43934 19.0607C6.15804 18.7794 6 18.3978 6 18V16.5ZM12 12C11.6022 12 11.2206 12.158 10.9393 12.4393C10.658 12.7206 10.5 13.1022 10.5 13.5V18C10.5 18.3978 10.658 18.7794 10.9393 19.0607C11.2206 19.342 11.6022 19.5 12 19.5C12.3978 19.5 12.7794 19.342 13.0607 19.0607C13.342 18.7794 13.5 18.3978 13.5 18V13.5C13.5 13.1022 13.342 12.7206 13.0607 12.4393C12.7794 12.158 12.3978 12 12 12Z"
                        fill="white"
                      />
                    </svg>

                    <span className="ml-3 custom-text-maroon font-semibold">
                      Order Details
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 flex mt-3 items-center px-6 py-4 text-base font-normal rounded-lg text-white bg-[#565656]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.281 10.719C16.3508 10.7887 16.4062 10.8714 16.444 10.9625C16.4818 11.0537 16.5013 11.1513 16.5013 11.25C16.5013 11.3486 16.4818 11.4463 16.444 11.5374C16.4062 11.6286 16.3508 11.7113 16.281 11.781L11.781 16.281C11.7113 16.3508 11.6285 16.4063 11.5374 16.4441C11.4463 16.4819 11.3486 16.5013 11.25 16.5013C11.1513 16.5013 11.0536 16.4819 10.9625 16.4441C10.8714 16.4063 10.7886 16.3508 10.719 16.281L8.46897 14.031C8.39924 13.9613 8.34392 13.8785 8.30619 13.7874C8.26845 13.6963 8.24902 13.5986 8.24902 13.5C8.24902 13.4014 8.26845 13.3037 8.30619 13.2126C8.34392 13.1215 8.39924 13.0387 8.46897 12.969C8.6098 12.8282 8.80081 12.7491 8.99997 12.7491C9.09859 12.7491 9.19624 12.7685 9.28735 12.8062C9.37846 12.844 9.46124 12.8993 9.53097 12.969L11.25 14.6895L15.219 10.719C15.2886 10.6492 15.3714 10.5937 15.4625 10.5559C15.5536 10.5181 15.6513 10.4987 15.75 10.4987C15.8486 10.4987 15.9463 10.5181 16.0374 10.5559C16.1285 10.5937 16.2113 10.6492 16.281 10.719V10.719Z"
                        fill="white"
                      />
                      <path
                        d="M6 2.25H4.5C3.70435 2.25 2.94129 2.56607 2.37868 3.12868C1.81607 3.69129 1.5 4.45435 1.5 5.25V21C1.5 21.7956 1.81607 22.5587 2.37868 23.1213C2.94129 23.6839 3.70435 24 4.5 24H19.5C20.2956 24 21.0587 23.6839 21.6213 23.1213C22.1839 22.5587 22.5 21.7956 22.5 21V5.25C22.5 4.45435 22.1839 3.69129 21.6213 3.12868C21.0587 2.56607 20.2956 2.25 19.5 2.25H18V3.75H19.5C19.8978 3.75 20.2794 3.90804 20.5607 4.18934C20.842 4.47064 21 4.85218 21 5.25V21C21 21.3978 20.842 21.7794 20.5607 22.0607C20.2794 22.342 19.8978 22.5 19.5 22.5H4.5C4.10218 22.5 3.72064 22.342 3.43934 22.0607C3.15804 21.7794 3 21.3978 3 21V5.25C3 4.85218 3.15804 4.47064 3.43934 4.18934C3.72064 3.90804 4.10218 3.75 4.5 3.75H6V2.25Z"
                        fill="white"
                      />
                      <path
                        d="M14.25 1.5C14.4489 1.5 14.6397 1.57902 14.7803 1.71967C14.921 1.86032 15 2.05109 15 2.25V3.75C15 3.94891 14.921 4.13968 14.7803 4.28033C14.6397 4.42098 14.4489 4.5 14.25 4.5H9.75C9.55109 4.5 9.36032 4.42098 9.21967 4.28033C9.07902 4.13968 9 3.94891 9 3.75V2.25C9 2.05109 9.07902 1.86032 9.21967 1.71967C9.36032 1.57902 9.55109 1.5 9.75 1.5H14.25ZM9.75 0C9.15326 0 8.58097 0.237053 8.15901 0.65901C7.73705 1.08097 7.5 1.65326 7.5 2.25V3.75C7.5 4.34674 7.73705 4.91903 8.15901 5.34099C8.58097 5.76295 9.15326 6 9.75 6H14.25C14.8467 6 15.419 5.76295 15.841 5.34099C16.2629 4.91903 16.5 4.34674 16.5 3.75V2.25C16.5 1.65326 16.2629 1.08097 15.841 0.65901C15.419 0.237053 14.8467 0 14.25 0L9.75 0Z"
                        fill="white"
                      />
                    </svg>

                    <span className="ml-3 custom-text-maroon font-semibold">
                      Managing Listing
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 flex mt-3 items-center px-6 py-4 text-base font-normal rounded-lg text-white bg-[#565656]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.229 5.642L13.141 7.495L15.185 7.79C15.395 7.82 15.478 8.07801 15.327 8.22501L13.848 9.665L14.198 11.701C14.2061 11.7479 14.2009 11.7962 14.183 11.8403C14.1651 11.8844 14.1352 11.9226 14.0967 11.9506C14.0582 11.9786 14.0126 11.9952 13.9651 11.9987C13.9176 12.0021 13.8701 11.9922 13.828 11.97L12 11.008L10.173 11.97C10.1309 11.9922 10.0834 12.0021 10.0359 11.9987C9.98842 11.9952 9.94285 11.9786 9.90434 11.9506C9.86584 11.9226 9.83594 11.8844 9.81803 11.8403C9.80012 11.7962 9.79491 11.7479 9.803 11.701L10.153 9.66601L8.673 8.226C8.63861 8.19279 8.61424 8.15058 8.60269 8.10418C8.59114 8.05778 8.59287 8.00907 8.60767 7.9636C8.62248 7.91814 8.64977 7.87776 8.68643 7.84706C8.72309 7.81636 8.76764 7.79659 8.815 7.79L10.859 7.495L11.771 5.642C11.792 5.59916 11.8246 5.56306 11.8651 5.53782C11.9055 5.51257 11.9523 5.49918 12 5.49918C12.0477 5.49918 12.0945 5.51257 12.1349 5.53782C12.1754 5.56306 12.208 5.59916 12.229 5.642V5.642ZM19 9C19.0002 7.85183 18.7179 6.72124 18.1781 5.70788C17.6382 4.69452 16.8574 3.82951 15.9044 3.18909C14.9515 2.54866 13.8556 2.15248 12.7134 2.03547C11.5712 1.91846 10.4177 2.0842 9.3547 2.5181C8.29167 2.952 7.35168 3.64072 6.6176 4.52357C5.88351 5.40642 5.37786 6.45629 5.14521 7.58065C4.91256 8.70501 4.96005 9.86933 5.28351 10.971C5.60696 12.0727 6.19644 13.0779 7 13.898V21.25L7.008 21.355C7.02596 21.4823 7.07632 21.6028 7.15425 21.7049C7.23217 21.8071 7.33505 21.8876 7.45301 21.9386C7.57097 21.9896 7.70005 22.0094 7.82788 21.9962C7.95571 21.9829 8.07799 21.9371 8.183 21.863L11.999 19.176L15.818 21.864L15.907 21.918C16.0214 21.9766 16.1489 22.0048 16.2773 22C16.4057 21.9951 16.5307 21.9574 16.6404 21.8903C16.75 21.8232 16.8406 21.7291 16.9034 21.617C16.9662 21.5049 16.9991 21.3785 16.999 21.25L17.001 13.898C18.2845 12.5911 19.0025 10.8318 19 9V9ZM15.5 15.064V19.805L12.43 17.645L12.33 17.585C12.2091 17.5256 12.0745 17.4998 11.9403 17.5104C11.806 17.5209 11.6771 17.5674 11.567 17.645L8.501 19.805V15.064C9.56445 15.6789 10.7716 16.0018 12 16C13.275 16 14.47 15.66 15.5 15.064ZM6.5 9C6.5 7.54131 7.07946 6.14237 8.11091 5.11092C9.14236 4.07947 10.5413 3.5 12 3.5C13.4587 3.5 14.8576 4.07947 15.8891 5.11092C16.9205 6.14237 17.5 7.54131 17.5 9C17.5 10.4587 16.9205 11.8576 15.8891 12.8891C14.8576 13.9205 13.4587 14.5 12 14.5C10.5413 14.5 9.14236 13.9205 8.11091 12.8891C7.07946 11.8576 6.5 10.4587 6.5 9V9Z"
                        fill="white"
                      />
                    </svg>

                    <span className="ml-3 custom-text-maroon font-semibold">
                      Manage Review
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 flex mt-3 items-center px-6 py-4 text-base font-normal rounded-lg text-white bg-[#565656]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.30435 6.132C3.50184 5.24358 3.9964 4.44907 4.70636 3.87965C5.41632 3.31022 6.29925 2.99993 7.20935 3H16.7914C17.7015 2.99993 18.5844 3.31022 19.2943 3.87965C20.0043 4.44907 20.4989 5.24358 20.6964 6.132L20.8434 6.794C21.6054 10.2228 21.6054 13.7772 20.8434 17.206L20.6964 17.868C20.4989 18.7564 20.0043 19.5509 19.2943 20.1204C18.5844 20.6898 17.7015 21.0001 16.7914 21H7.21035C6.30025 21.0001 5.41732 20.6898 4.70736 20.1204C3.9974 19.5509 3.50284 18.7564 3.30535 17.868L3.15835 17.206C2.39644 13.7771 2.39644 10.2229 3.15835 6.794L3.30535 6.132H3.30435Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.5 13H8.838C8.838 14 9.811 16 12.243 16C14.676 16 15.649 14 15.649 13H21.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className="ml-3 custom-text-maroon font-semibold">
                      Inbox/Massage
                    </span>
                  </a>
                </li>
              </ul>
              <div>
                <ul>
                  <li className="relative flex py-6 mt-64 bg-[#565656] text-center text-white">
                    <a
                      href="/"
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <div>
                        <img className="pl-16 m-auto" src={user} alt="" />{" "}
                      </div>
                    </a>
                    <p className="m-auto ml-1">Rizqi Hidayat</p>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <main className="flex-1 ml-80">
            <div className="pt-20 px-10 pb-3">
              <div>
                <table className="w-full border border-slate-500">
                  <tbody>
                    <tr>
                      <th
                        colSpan={5}
                        className="text-left pl-10 py-3 text-white bg-[#565656] border border-black"
                      >
                        Order Details
                      </th>
                    </tr>
                    <tr>
                      <th className="text-white bg-[#4D89FF] border border-black text-left py-2 px-3">
                        Building
                      </th>
                      <th className="text-white bg-[#4D89FF] border border-black text-left py-2 px-3">
                        User
                      </th>
                      <th className="text-white bg-[#4D89FF] border border-black text-left py-2 px-3">
                        Details
                      </th>
                      <th className="text-white bg-[#4D89FF] border border-black text-left py-2 px-3">
                        Status
                      </th>
                      <th className="text-white bg-[#4D89FF] border border-black text-left py-2 px-3">
                        Manage
                      </th>
                    </tr>
                    <tr>
                      <td className="p-2 border border-black">
                        <div className="flex items-start">
                          <div>
                            <img className="m-auto" src={building} alt="" />{" "}
                          </div>
                          <div className="p-1">
                            <h1 className="font-semibold">Equity Tower</h1>
                            <p>SCBD, Jakarta Selatan</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 border border-black">
                        <div className="flex">
                          <div>
                            <img className="m-auto" src={user} alt="" />{" "}
                          </div>
                          <div className="p-1">
                            <h1 className="font-semibold">Fatih Safaat</h1>
                            <p>fatihsafat@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 border border-black w-56">
                        <div className="flex justify-between">
                          <p className="font-semibold">Booking ID</p>
                          <p className="text-right">01</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Phone</p>
                          <p className="text-right">081299094828</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Floor</p>
                          <p className="text-right">48th</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Type</p>
                          <p className="text-right">Serviced Office</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Participant</p>
                          <p className="text-right">8 People</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Date Book</p>
                          <p className="text-right">20 juni 2022</p>
                        </div>
                      </td>
                      <td className="p-2 border border-black text-center ">
                        <button
                          type="button"
                          class="m-auto text-white bg-[#FBCD0A] hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                        >
                          Order Inactive
                        </button>
                      </td>
                      <td className="p-2 border border-black text-center w-56">
                        <button
                          type="button"
                          class="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Details
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Massage
                        </button>
                        <div className="pt-4">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            View Payment
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-black">
                        <div className="flex items-start">
                          <div>
                            <img className="m-auto" src={building} alt="" />{" "}
                          </div>
                          <div className="p-1">
                            <h1 className="font-semibold">Equity Tower</h1>
                            <p>SCBD, Jakarta Selatan</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 border border-black">
                        <div className="flex">
                          <div>
                            <img className="m-auto" src={user} alt="" />{" "}
                          </div>
                          <div className="p-1">
                            <h1 className="font-semibold">Fatih Safaat</h1>
                            <p>fatihsafat@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 border border-black w-56">
                        <div className="flex justify-between">
                          <p className="font-semibold">Booking ID</p>
                          <p className="text-right">01</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Phone</p>
                          <p className="text-right">081299094828</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Floor</p>
                          <p className="text-right">48th</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Type</p>
                          <p className="text-right">Serviced Office</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Participant</p>
                          <p className="text-right">8 People</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Date Book</p>
                          <p className="text-right">20 juni 2022</p>
                        </div>
                      </td>
                      <td className="p-2 border border-black text-center">
                        <button
                          type="button"
                          class="m-auto text-white bg-[#FBCD0A] hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                        >
                          Order Inactive
                        </button>
                      </td>
                      <td className="p-2 border border-black text-center w-56">
                        <button
                          type="button"
                          class="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Details
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Massage
                        </button>
                        <div className="pt-4">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            View Payment
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;