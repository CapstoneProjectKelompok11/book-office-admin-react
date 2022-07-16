import React from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../networks/api"


const Login = () => {

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isUserExist, setUserExist] = useState("");
  const [isAllValid, setAllValid] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isMessage, setMessage] = useState({
    message: "",
  });

  const handleEmail = (e) => {
    const email = e.target.value;
    console.log("value", email);

    setEmail(email);
    if (
      email
    ) {
      setEmailValid(true);
      setDataForm((state) => ({ ...state, email }));
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (
      password
    ) {
      setPasswordValid(true);
      setDataForm((state) => ({ ...state, password }));
    } else {
      setPasswordValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    if (isEmailValid && isPasswordValid) {
      setLoading(true);

      axiosInstance
        .post("/login", {
          email: dataForm.email,
          password: dataForm.password,
        })
        .then((response) => {
          setUserExist("exists");
          setAllValid("valid");
          setLoading(false);
          console.log("response", response)
          navigate("/Dashboard");
          Cookies.set("token", response.data.data.token);
        })
        .catch((error) => {
          setUserExist("doesn't exist");
          setAllValid("valid");
          setLoading(false);
          console.log(error);
        });
    } else {
      setAllValid("not valid");
      setUserExist("");
    }
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center h-[60px] px-3 py-3 text-white bg-[#4D89FF]">
        <div className="flex items-center">
          <div className="w-28 h-10 ml-20">
            <img src={logo} alt="" />{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-[#868686]">
        <div className="mt-4 text-left bg-white shadow-lg rounded-xl">
          <div className="rounded-t-xl py-4 bg-[#4D89FF] text-center">
            <img className="m-auto" src={logo} alt="" />{" "}
          </div>
          <div className="px-8 py-6">
            <h3 className="text-xl font-bold text-center">Admin Portal</h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <div>
                  <label className="block text-base" htmlFor="email">
                    Email
                    <label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={(e) => {
                          handleEmail(e);
                        }}
                        validators={[isEmailValid, isAllValid]}
                      />
                    </label>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="block text-base">
                    Password
                    <label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        onChange={(e) => {
                          handlePassword(e);
                        }}
                        validators={[isPasswordValid, isAllValid]}
                      />
                    </label>
                  </label>
                </div>
                <div className="flex items-baseline justify-between">
                  <button className="px-6 py-2 mt-4 text-white bg-[#4D89FF] rounded-lg hover:bg-blue-900 m-auto"
                   type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
