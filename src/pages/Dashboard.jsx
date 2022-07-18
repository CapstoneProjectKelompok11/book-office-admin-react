import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import building from "../assets/building.png";
import axios from "axios";
import { Link } from "react-router-dom";
import PopUp from "../components/PopUp";
import Cookies from "js-cookie";
import LeftBar from "../components/LeftBar";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [isPopUpShow, setIsPopUpShow] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/admin/reservation/pending",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
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

  // useEffect(()=> {
  // })

  const [selectOrder, setSelectOrder] = useState();
  const filtered = data.filter((session) => {
    return session.id === selectOrder;
  });

  console.log("filtered", filtered.id);

  const handleSelectOrder = (id) => {
    setSelectOrder(id);
    console.log("id", id);
  };

  const handleOrder = (id) => {
    const SubmitData = {
      start_reservation: filtered[0].start_reservation,
      company: filtered[0].company,
      price: filtered[0].price,
      phone: filtered[0].phone,
      participant: filtered[0].participant,
      note: filtered[0].note,
    };

    axios
      .post(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/admin/reservation?reservationId=${id.reservationId}&floorId=${id.floorId}`,
        SubmitData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        alert("berhasil");
        console.log("res", res);
      });
  };

  const handleCancel = (id) => {
    axios
      .put(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/admin/reservation?reservationId=${id}&status=CANCELED`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log("res", res);
      });
  };

  return (
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
                    d="M21.675 9.0375C21.1479 7.78994 20.3838 6.6565 19.425 5.7C18.4685 4.74119 17.3351 3.97707 16.0875 3.45C14.7914 2.90156 13.418 2.625 12 2.625C10.582 2.625 9.20859 2.90156 7.9125 3.45C6.66494 3.97707 5.5315 4.74119 4.575 5.7C3.61619 6.6565 2.85207 7.78994 2.325 9.0375C1.77656 10.3336 1.5 11.707 1.5 13.125C1.5 16.2352 2.86641 19.1648 5.24766 21.1664L5.2875 21.1992C5.42344 21.3117 5.59453 21.375 5.77031 21.375H18.232C18.4078 21.375 18.5789 21.3117 18.7148 21.1992L18.7547 21.1664C21.1336 19.1648 22.5 16.2352 22.5 13.125C22.5 11.707 22.2211 10.3336 21.675 9.0375ZM17.8453 19.5938H6.15469C5.24905 18.7772 4.52524 17.7793 4.03021 16.6649C3.53518 15.5505 3.28001 14.3444 3.28125 13.125C3.28125 10.7953 4.18828 8.60625 5.83594 6.96094C7.48359 5.31328 9.67266 4.40625 12 4.40625C14.3297 4.40625 16.5188 5.31328 18.1641 6.96094C19.8117 8.60859 20.7188 10.7977 20.7188 13.125C20.7188 15.6 19.6758 17.9414 17.8453 19.5938ZM14.6133 9.87891C14.578 9.84401 14.5305 9.82444 14.4809 9.82444C14.4313 9.82444 14.3837 9.84401 14.3484 9.87891L12.368 11.8594C11.9297 11.7422 11.4445 11.8547 11.1 12.1992C10.978 12.321 10.8812 12.4657 10.8151 12.6249C10.749 12.7842 10.715 12.9549 10.715 13.1273C10.715 13.2998 10.749 13.4705 10.8151 13.6297C10.8812 13.789 10.978 13.9337 11.1 14.0555C11.2218 14.1775 11.3665 14.2743 11.5257 14.3404C11.685 14.4064 11.8557 14.4404 12.0281 14.4404C12.2005 14.4404 12.3713 14.4064 12.5305 14.3404C12.6898 14.2743 12.8344 14.1775 12.9562 14.0555C13.1195 13.8927 13.2369 13.6898 13.2965 13.4671C13.3562 13.2445 13.3561 13.0101 13.2961 12.7875L15.2766 10.807C15.3492 10.7344 15.3492 10.6148 15.2766 10.5422L14.6133 9.87891V9.87891ZM11.4844 7.5H12.5156C12.6188 7.5 12.7031 7.41563 12.7031 7.3125V5.4375C12.7031 5.33437 12.6188 5.25 12.5156 5.25H11.4844C11.3812 5.25 11.2969 5.33437 11.2969 5.4375V7.3125C11.2969 7.41563 11.3812 7.5 11.4844 7.5ZM17.5781 12.6094V13.6406C17.5781 13.7438 17.6625 13.8281 17.7656 13.8281H19.6406C19.7438 13.8281 19.8281 13.7438 19.8281 13.6406V12.6094C19.8281 12.5062 19.7438 12.4219 19.6406 12.4219H17.7656C17.6625 12.4219 17.5781 12.5062 17.5781 12.6094ZM17.8758 7.9875L17.1469 7.25859C17.1116 7.2237 17.064 7.20413 17.0145 7.20413C16.9649 7.20413 16.9173 7.2237 16.882 7.25859L15.5555 8.58516C15.5206 8.6204 15.501 8.66799 15.501 8.71758C15.501 8.76717 15.5206 8.81476 15.5555 8.85L16.2844 9.57891C16.357 9.65156 16.4766 9.65156 16.5492 9.57891L17.8758 8.25234C17.9484 8.17969 17.9484 8.06016 17.8758 7.9875ZM7.12734 7.25859C7.0921 7.2237 7.04452 7.20413 6.99492 7.20413C6.94533 7.20413 6.89774 7.2237 6.8625 7.25859L6.13359 7.9875C6.0987 8.02274 6.07913 8.07033 6.07913 8.11992C6.07913 8.16952 6.0987 8.2171 6.13359 8.25234L7.46016 9.57891C7.53281 9.65156 7.65234 9.65156 7.725 9.57891L8.45391 8.85C8.52656 8.77734 8.52656 8.65781 8.45391 8.58516L7.12734 7.25859ZM6.14062 12.4219H4.26562C4.1625 12.4219 4.07812 12.5062 4.07812 12.6094V13.6406C4.07812 13.7438 4.1625 13.8281 4.26562 13.8281H6.14062C6.24375 13.8281 6.32812 13.7438 6.32812 13.6406V12.6094C6.32812 12.5062 6.24375 12.4219 6.14062 12.4219Z"
                    fill="black"
                  />
                </svg>
              </span>
              <p>Dashboard</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex">
        <LeftBar />
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
                      Dashboard
                    </th>
                  </tr>

                  <tr>
                    <th className="text-white bg-[#4D89FF] border border-black text-left py-2 px-3 w-[250px]">
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
                  {data?.map((admin) => (
                    <tr>
                      <td className="p-2 border border-black">
                        <div className="flex items-start">
                          {admin.building.images.slice(0, 1).map((image) => (
                            <img
                              className="w-24 h-24"
                              src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${image.fileName}`}
                              alt=""
                            />
                          ))}
                          <div className="p-1">
                            <h1 className="font-semibold">
                              {admin.building.name}
                            </h1>
                            <p>{admin.building.complex.complex_name}</p>{" "}
                            <p>{admin.building.complex.city.city_name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 border border-black">
                        <div className="flex">
                          <div>
                            <img className="m-auto " src={user} alt="" />{" "}
                          </div>
                          <div className="p-1">
                            <h1 className="font-semibold">
                              {admin.user.first_name}
                            </h1>
                            <p>{admin.user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 border border-black w-56">
                        <div className="flex justify-between">
                          <p className="font-semibold">Booking ID</p>
                          <p className="text-right">{admin.id}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Phone</p>
                          <p className="text-right">{admin.user.phone}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Floor</p>
                          <p className="text-right">{admin.floor.name}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Type</p>
                          <p className="text-right">{admin.floor.type}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Participant</p>
                          <p className="text-right">{admin.participant}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Date Book</p>
                          <p className="text-right">
                            {admin.start_reservation}
                          </p>
                        </div>
                      </td>
                      <td className="p-2 border border-black text-center ">
                        <Link to="/Inbox">
                          <button
                            type="button"
                            class="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Message
                          </button>
                        </Link>
                      </td>
                      <td className="p-2 border border-black text-center w-56">
                        <button
                          type="button"
                          class="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          onClick={() => {
                            setIsPopUpShow(true);
                            handleSelectOrder(admin.id);
                          }}
                        >
                          Add Order
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          onClick={() => {
                            handleCancel(admin.id);
                          }}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      {isPopUpShow ? (
        <PopUp
          show={isPopUpShow}
          handleOrder={handleOrder}
          items={filtered}
          onClose={() => setIsPopUpShow(false)}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default Dashboard;
