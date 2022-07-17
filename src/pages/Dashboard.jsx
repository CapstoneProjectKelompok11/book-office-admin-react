import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import building from "../assets/building.png";
import axios from "axios";

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
            'Authorization': `Bearer ${Cookies.get('token')}`
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
    // e.preventDefault();

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
        alert("berhasil")
        console.log("res", res);
      })
  };

  function handleDelete(e) {
    e.preventDefault();
  }

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
              <p>Pending Order</p>
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
                      Pending Order
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
                  {data?.map((admin) => (
                    <tr>
                      <td className="p-2 border border-black">
                        <div className="flex items-start">
                          <div>
                            <img className="m-auto" src={building} alt="" />{" "}
                          </div>
                          <div className="p-1">
                            <h1 className="font-semibold">
                              {admin.building.name}
                            </h1>
                            <p>{admin.building.complex.complex_name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 border border-black">
                        <div className="flex">
                          <div>
                            <img className="m-auto" src={user} alt="" />{" "}
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
                        <button
                          type="button"
                          class="m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Message
                        </button>
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
                          onClick={handleDelete}
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
      {isPopUpShow ? <PopUp
                show={isPopUpShow}
                handleOrder={handleOrder}
                items={filtered}
                onClose={() => setIsPopUpShow(false)}
              /> : <div/> }
    </div>
  );
};


export default Dashboard;
