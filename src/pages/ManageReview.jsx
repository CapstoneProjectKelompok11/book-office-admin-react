import logo from "../assets/logo.png";
import user from "../assets/user.png";
import building from "../assets/building.png";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LeftBar from "../components/LeftBar";

const ManageReview = () => {
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
                      d="M12.229 5.642L13.141 7.495L15.185 7.79C15.395 7.82 15.478 8.07801 15.327 8.22501L13.848 9.665L14.198 11.701C14.2061 11.7479 14.2009 11.7962 14.183 11.8403C14.1651 11.8844 14.1352 11.9226 14.0967 11.9506C14.0582 11.9786 14.0126 11.9952 13.9651 11.9987C13.9176 12.0021 13.8701 11.9922 13.828 11.97L12 11.008L10.173 11.97C10.1309 11.9922 10.0834 12.0021 10.0359 11.9987C9.98842 11.9952 9.94285 11.9786 9.90434 11.9506C9.86584 11.9226 9.83594 11.8844 9.81803 11.8403C9.80012 11.7962 9.79492 11.7479 9.803 11.701L10.153 9.66601L8.673 8.226C8.63861 8.19279 8.61424 8.15058 8.60269 8.10418C8.59114 8.05778 8.59287 8.00907 8.60767 7.9636C8.62248 7.91814 8.64977 7.87776 8.68643 7.84706C8.72309 7.81636 8.76764 7.79659 8.815 7.79L10.859 7.495L11.771 5.642C11.792 5.59916 11.8246 5.56306 11.8651 5.53782C11.9055 5.51257 11.9523 5.49918 12 5.49918C12.0477 5.49918 12.0945 5.51257 12.1349 5.53782C12.1754 5.56306 12.208 5.59916 12.229 5.642ZM19 9C19.0002 7.85183 18.7179 6.72124 18.1781 5.70788C17.6382 4.69452 16.8574 3.82951 15.9044 3.18909C14.9515 2.54866 13.8556 2.15248 12.7134 2.03547C11.5712 1.91846 10.4177 2.0842 9.3547 2.5181C8.29167 2.952 7.35168 3.64072 6.6176 4.52357C5.88351 5.40642 5.37786 6.45629 5.14521 7.58065C4.91256 8.70501 4.96005 9.86933 5.28351 10.971C5.60696 12.0727 6.19644 13.0779 7 13.898V21.25L7.008 21.355C7.02596 21.4823 7.07632 21.6028 7.15425 21.7049C7.23217 21.8071 7.33505 21.8876 7.45301 21.9386C7.57097 21.9896 7.70005 22.0094 7.82788 21.9962C7.95571 21.9829 8.07799 21.9371 8.183 21.863L11.999 19.176L15.818 21.864L15.907 21.918C16.0214 21.9766 16.1489 22.0048 16.2773 22C16.4057 21.9951 16.5307 21.9574 16.6404 21.8903C16.75 21.8232 16.8406 21.7291 16.9034 21.617C16.9662 21.5049 16.9991 21.3785 16.999 21.25L17.001 13.898C18.2845 12.5911 19.0025 10.8318 19 9ZM15.5 15.064V19.805L12.43 17.645L12.33 17.585C12.2091 17.5256 12.0745 17.4998 11.9403 17.5104C11.806 17.5209 11.6771 17.5674 11.567 17.645L8.501 19.805V15.064C9.56445 15.6789 10.7716 16.0018 12 16C13.275 16 14.47 15.66 15.5 15.064ZM6.5 9C6.5 7.54131 7.07946 6.14237 8.11091 5.11092C9.14236 4.07947 10.5413 3.5 12 3.5C13.4587 3.5 14.8576 4.07947 15.8891 5.11092C16.9205 6.14237 17.5 7.54131 17.5 9C17.5 10.4587 16.9205 11.8576 15.8891 12.8891C14.8576 13.9205 13.4587 14.5 12 14.5C10.5413 14.5 9.14236 13.9205 8.11091 12.8891C7.07946 11.8576 6.5 10.4587 6.5 9Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <p>Manage Review</p>
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

export default ManageReview;
