import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { SlArrowDown } from "react-icons/sl";
import home from "../assets/home.png";
import blockchain from "../assets/blockchain.png";

const txDetails = [
  {
    hash: "jasdfjoajsofjaojsofhjqowjeorqwer",
    date: "Saturday, 6 May 2023",
  },
  {
    hash: "jasdfjoajsofjaojsofhjqowjeorqwer",
    date: "Saturday, 6 May 2023",
  },
  {
    hash: "jasdfjoajsofjaojsofhjqowjeorqwer",
    date: "Saturday, 6 May 2023",
  },
  {
    hash: "jasdfjoajsofjaojsofhjqowjeorqwer",
    date: "Saturday, 6 May 2023",
  },
];

function Home() {
  const navigate = useNavigate();

  // const handleOnClick = () => {
  //   if (window.ethereum.isConnected()) {

  //   }
  // };

  return (
    <section className="pb-10 pt-10 lg:mx-20">
      <div>
        <div className="flex flex-col lg:h-screen items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <span className="text-7xl font-medium">
                A safe for your crypto assets
              </span>
              <span className="text-xl">
                Create secure vaults with multisig and manage transaction
              </span>
              <div className="flex flex-col lg:flex-row gap-4">
                <button
                  onClick={() => navigate("/profile")}
                  className="bg-button w-40 px-2 py-3 rounded-md text-xl shadow-md hover:bg-btnhigh transition-all"
                >
                  Launch Wallet
                </button>
                <button
                  onClick={() => navigate("/group")}
                  className="bg-button w-40 px-2 py-3 rounded-md text-xl shadow-md hover:bg-btnhigh transition-all"
                >
                  Create Safe
                </button>
              </div>
            </div>

            <img src={blockchain} alt="" className="lg:w-6/12" />
          </div>
          <div className="animate-pulse flex flex-col items-center">
            <span>Learn More</span>
            <SlArrowDown />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-full shadow-md rounded-md p-5 lg:w-2/4 bg-white">
            <span>details</span>
          </div>
          <div className="flex flex-col h-full lg:w-2/4 shadow-md rounded-md p-5 bg-white">
            <span className="text-lg">Recent Transaction</span>
            <div className="divide-y-2 pt-4">
              {txDetails.slice(0, 3).map((data) => (
                <div className="flex flex-col gap-2 py-2">
                  <span>{data.hash}</span>
                  <span>{data.date}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("transaction")}
              className="bg-button w-fit px-4 py-2 shadow-md rounded mx-auto hover:bg-purple-300 transition-all hover:scale-105 duration-300"
            >
              <div className="flex flex-row items-center">
                <span className="mr-2">View more</span>
                <TfiAngleDoubleRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
