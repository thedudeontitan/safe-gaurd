import React from "react";
import { FaRegCopy } from "react-icons/fa";

const data = [
  {
    txid: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
    from: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
    to: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
  },
  {
    txid: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
    from: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
    to: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
  },
  {
    txid: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
    from: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
    to: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
  },
  {
    txid: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
    from: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
    to: "459f6c5248286db00464c4b6248e05a919083d8adeb1381689388506d6593fff",
  },
];

function Transaction() {
  return (
    <section className="pt-24 lg:mx-80 pb-10">
      <div className="flex flex-col lg:gap-5">
        <span className="text-xl font-medium">Transaction History</span>
        {data.map((d) => (
          <div className="shadow-md rounded-md flex flex-col p-3 bg-white gap-4 hover:scale-[1.02] transition-all">
            <div className="flex flex-row items-center">
              <span className="pr-2">Tx ID: </span>
              <button
                className="bg-gray-200 w-fit p-1 rounded-md flex flex-row"
                onClick={() => {
                  navigator.clipboard.writeText(d.txid);
                }}
              >
                {d.txid}
                <div className="text-xl m-1">
                  <FaRegCopy />
                </div>
              </button>
            </div>
            <div>
              <span className="pr-2">From:</span>
              <span>{d.from}</span>
            </div>
            <div>
              <span className="pr-2">To:</span>
              <span>{d.to}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Transaction;
