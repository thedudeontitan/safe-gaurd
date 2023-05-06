import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiAngleDoubleRight } from "react-icons/tfi";

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

  return (
    <section className="pt-24 lg:mx-80 pb-10">
      <div className="flex flex-col gap-4">
        <div className="h-full shadow-md rounded-md p-5">
          <span>details</span>
        </div>
        <div className="flex flex-col h-full shadow-md rounded-md p-5">
          <span className="text-lg">Recent Transaction</span>
          <div className="divide-y-2 pt-4">
            {txDetails.slice(0, 3).map((data) => (
              <div className="flex flex-col gap-2 py-2">
                <span>{data.hash}</span>
                <span>{data.date}</span>
              </div>
            ))}
          </div>
          <button onClick={() => navigate("transaction")} className="bg-button w-fit px-4 py-2 shadow-md rounded mx-auto hover:bg-purple-300 transition-all hover:scale-105 duration-300">
            <div className="flex flex-row items-center">
            <span className="mr-2">View more</span>
            <TfiAngleDoubleRight/>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
