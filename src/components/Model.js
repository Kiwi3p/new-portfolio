import React from "react";
import Resume from "../images/Jack-Transue-Resume-v1.png";
import "./Model.css";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="up py-4 px-10 text-white bg-black rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        Resume
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="resume border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <img c src={Resume} alt="Resume" />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="up py-4 px-10 text-white bg-yellow-500 rounded-full lg:text-3xl md:text-2xl sm:text-xl hover:bg-yellow-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
