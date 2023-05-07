import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import pfp from "../assets/pfp.jpg";


function Profile() {
  const [alertVisible, setAlertVisible] = useState(true);

  if (window.ethereum) {
    console.log("eth wallet");
  }
  return (
    <section className="pt-24 lg:mx-80 mx-5 pb-10">
      {!window.ethereum && alertVisible && (
        <div className="rounded-md bg-red-300 p-4 bg-opacity-50 text-red-900 my-5 flex">
          OOPS! Looks like you dont have <span>Metamask</span> installed.{" "}
          <button
            onClick={() => setAlertVisible(false)}
            className="ml-auto text-xl"
          >
            <RxCross2 />
          </button>
        </div>
      )}
      <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4">
        <div className="shadow-md rounded-md bg-white p-5 flex flex-col gap-4  flex-grow">
          <img src={pfp} className="rounded-full w-20 h-20" />
          <span className="text-xl font-medium">John Doe</span>
          <button
            className="break-all text-left flex flex-row w-fit items-center bg-gray-100 rounded-md p-1"
            onClick={() => {
              navigator.clipboard.writeText(
                "0x3b09c119901Bb0C9QWERQ4134123136C3"
              );
            }}
          >
            0x3b09c119901Bb0C9QWERQ4134123136C3
            <div className="text-xl m-1">
              <FaRegCopy />
            </div>
          </button>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <span>Tokens</span>
              <span className="text-2xl font-semibold mx-auto">2</span>
            </div>
            <div className="flex flex-col">
              <span>Tokens</span>
              <span className="text-2xl font-semibold mx-auto">2</span>
            </div>
            <button className="bg-button px-2 py-4 rounded-md shadow-md ml-auto">
              View Assests
            </button>
          </div>
        </div>
        <div className="p-5 shadow-md rounded-md w-2/5 bg-white">
          <div className="flex flex-col gap-2">
            <span className="text-xl">Current Wallet Details</span>
            {window.ethereum && (
              <div className="">
                <div className="flex flex-row items-center">
                  <img
                    src="https://raw.githubusercontent.com/MetaMask/brand-resources/cb6fd847f3a9cc5e231c749383c3898935e62eab/SVG/metamask-fox.svg"
                    alt=""
                    className="w-12 h-12 mr-2"
                  />
                  <span className="text-lg">MetaMask</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
