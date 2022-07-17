import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function PopUp({ show, onClose, handleOrder, items }) {
  console.log("items",items)

  return (
    <div>
       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="rounded-xl p-5 bg-white max-w-[800px] mx-auto border-2">
              <div className="mx-auto w-[650px] border-dashed border-2 border-black rounded-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="p-5">
                    <AiOutlineCloseCircle
                      className="ml-auto cursor-pointer"
                      size={25}
                      onClick={onClose}
                    />
                    <button
                      className="p-1 ml-auto bg-transparent text-black opacity-5 text-3xl leading-none font-semi bold outline-none focus:outline-none"
                      onClick={onClose}
                    ></button>
                  </div>
                  {/*body*/}
                  <form onSubmit={handleOrder}>
                  <div className="w-[550px] mx-auto">
                    <div>
                      <p className="text-center text-xl font-medium">
                        Request Booking
                      </p>
                    </div>
                    <div>
                      <p className="text-xl font-medium my-3">Username</p>
                      <input
                        type="text"
                        name="company"
                        id=""
                        className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                        value={items[0].user.first_name}
                      />
                    </div>

                    <div>
                      <p className="text-xl font-medium my-3">Building</p>
                      <input
                        type="text"
                        name="company"
                        id=""
                        className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                        value={items[0].company}
                      />
                    </div>

                    <div>
                      <p className="text-xl font-medium my-3">Type Office</p>
                      <form className="flex items-center max-w-[700px] mx-auto w-full border-2 p-1 rounded-md text-black bg-white border-black">
                        <div className="flex items-center w-full ">
                          <input
                            id="location"
                            name="location"
                            className="bg-transparent w-full focus:outline-none mx-2 text-black "
                            value={items[0].office_type}
                            >
                          </input>
                        </div>
                      </form>
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                      <div className="">
                        <p className="text-xl font-medium my-3">
                          Start Booking
                        </p>
                        <input
                          type="text"
                          name="reservation"
                          id=""
                          className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                          value={items[0].start_reservation}
                          // onChange={handleInput}
                        />
                      </div>
                      <div>
                        <p className="text-xl font-medium my-3">Participant</p>
                        <form className="flex items-center max-w-[700px] mx-auto w-full border-2 p-1 rounded-md text-black bg-white border-black">
                          <div className="flex items-center w-full ">
                            <input
                              id=""
                              name="participant"
                              className="bg-transparent w-full focus:outline-none mx-2 text-black "
                              value={items[0].participant}
                            >
                            </input>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div>
                      <p className="text-xl font-medium my-3">Company Name</p>
                      <input
                        type="text"
                        name="company"
                        id=""
                        className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                        value={items[0].company}
                        //   onChange={handleInput}
                      />
                    </div>
                    <div>
                      <p className="text-xl font-medium my-3">Phone Number</p>
                      <input
                        type="text"
                        name="phone"
                        id=""
                        className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                        value={items[0].phone}
                        // onChange={handleInput}
                      />
                    </div>
                  
                    
                    <div>
                      <div className="w-full">
                        <div className="text-center my-10">
                          <button
                            className="text-xl font-normal py-2 text-white bg-blue-500 shadow-sm rounded-lg w-full"
                           type="submit"

                          >
                            Add Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

    </div>
  );
}
