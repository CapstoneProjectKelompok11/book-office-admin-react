import React from "react";

export default function PopUp({ show, onClose, handleOrder }) {
  return (
    <div className="w-[550px] mx-auto">
      <div>
        <p className="text-center text-xl font-medium">Request Booking</p>
      </div>
      <div>
        <p className="text-xl font-medium my-3">Type Office</p>
        <form className="flex items-center max-w-[700px] mx-auto w-full border-2 p-1 rounded-md text-black bg-white border-black">
          <div className="flex items-center w-full ">
            <select
              id="location"
              name="location"
              className="bg-transparent w-full focus:outline-none mx-2 text-black "
            >
              <option value="jakarta barat">Jakarta Barat Floor</option>
              <option value="jakarta pusat">Jakarta Pusat</option>
              <option value="jakarta selatan">Jakarta Selatan</option>
              <option value="jakarta timur">Jakarta Timur</option>
              <option value="jakarta utara">Jakarta Utara</option>
            </select>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="">
          <p className="text-xl font-medium my-3">Start Booking</p>
          <input
            type="date"
            name="reservation"
            id=""
            className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
            //   value={dataForm.reservation}
            //   onChange={handleInput}
          />
        </div>
        <div>
          <p className="text-xl font-medium my-3">Participant</p>
          <form className="flex items-center max-w-[700px] mx-auto w-full border-2 p-1 rounded-md text-black bg-white border-black">
            <div className="flex items-center w-full ">
              <select
                id=""
                name="participant"
                className="bg-transparent w-full focus:outline-none mx-2 text-black "
                //   value={dataForm.participant}
                //   onChange={handleInput}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
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
          // value={dataForm.company}
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
          // value={dataForm.phone}
          // onChange={handleInput}
        />
      </div>
      <div>
        <p className="text-xl font-medium my-3">Quick Message</p>
        {/* <textarea className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                      name="note"
                      value={dataForm.note}
                      onChange={handleInput}>
                        
                      </textarea> */}
      </div>

      <div>
        <div className="w-full">
          <div className="text-center my-10">
            <button
              className="text-xl font-normal py-2 text-white bg-blue-500 shadow-sm rounded-lg w-full"
              type="button"
              onClick={handleOrder}
            >
              Request a Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
