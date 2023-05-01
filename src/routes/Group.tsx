import React, { useState } from "react";
import GroupDetails from "./GroupDetails";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

export type Group = {
  name: string;
  description: string;
  "company name": string;
  members: {
    name: string;
    image: string;
  }[];
};
const groupData = [
  {
    name: "group name",
    description: "sdf asdf asdf asdf ",
    "company name": "company name",
    members: [
      { name: "fasdf1", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
    ],
  },
  {
    name: "group name",
    description: "sdf asdf asdf asdf ",
    "company name": "company name",
    members: [
      { name: "fasdf2", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
    ],
  },
  {
    name: "group name",
    description: "sdf asdf asdf asdf ",
    "company name": "company name",
    members: [
      { name: "fasdf3", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
    ],
  },
  {
    name: "group name",
    description: "sdf asdf asdf asdf ",
    "company name": "company name",
    members: [
      { name: "fasdf4", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
    ],
  },
];

function Group() {
  const [detailsVisibility, setDetailsVisibility] = useState(false);
  const [DetailsData, setDetailsData] = useState<Group>();

  const navigate = useNavigate();

  return (
    <section className="pt-24 lg:mx-80 pb-10">
      <Routes>
        <Route
          path="details"
          element={
            <GroupDetails data={DetailsData} visibility={detailsVisibility} />
          }
        />
      </Routes>

      {window.location.pathname === "/group" && (
        <div>
          <div className="w-full flex justify-end">
          <button className=" shadow-md rounded-md p-4 mb-10 hover:scale-105 bg-slate-300">
            <span className="text-xl ">Create New Safe</span>
            <div></div>
          </button>
          </div>
          <div className="flex flex-col gap-4">
            {groupData.map((d) => (
              <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-lg p-5 hover:scale-[1.02]">
                <span>{d["name"]}</span>
                <span>{d["company name"]}</span>
                <div className="flex flex-row">
                  {d.members.slice(0, 4).map((data) => (
                    <img src={data.image} className="lg:w-8 h-8 rounded-full" />
                  ))}
                  <button
                    onClick={() => {
                      setDetailsVisibility(true);
                      setDetailsData(d);
                      navigate("details");
                    }}
                    className="bg-slate-300 w-fit p-2 rounded lg:ml-auto"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Group;
