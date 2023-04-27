import React, { useState } from "react";
import GroupDetails from "../components/GroupDetails";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

export type Member = {
  name: String;
  image: String;
};

const groupData = [
  {
    name: "group name",
    "company name": "company name",
    members: [
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
    ],
  },
  {
    name: "group name",
    "company name": "company name",
    members: [
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
    ],
  },
  {
    name: "group name",
    "company name": "company name",
    members: [
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
    ],
  },
  {
    name: "group name",
    "company name": "company name",
    members: [
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
      { name: "fasdf", image: "src/assets/pfp.jpg" },
    ],
  },
];

function Group() {
  // const [detailsVisibility, setDetailsVisibility] = useState(false);
  const [DetailsData, setDetailsData] = useState<Member[]>([
    { name: "fasdf", image: "src/assets/pfp.jpg" },
    { name: "fasdf", image: "src/assets/pfp.jpg" },
  ]);

  const navigate = useNavigate();

  return (
    <section className="pt-24 lg:mx-80 pb-10">
      <Routes>
        <Route
          path="details"
          element={
            <GroupDetails data={DetailsData} />
          }
        />
      </Routes>
      <div className="flex flex-col gap-4">
        {groupData.map((data) => (
          <div className="flex flex-col gap-4 bg-white rounded-2xl shadow-lg p-5 hover:scale-[1.02]">
            <span>{data["name"]}</span>
            <span>{data["company name"]}</span>
            <div className="flex flex-row">
              {data.members.slice(0, 4).map((data) => (
                <img src={data.image} className="lg:w-8 h-8 rounded-full" />
              ))}
              <button
                onClick={() => {
                  // setDetailsVisibility(!detailsVisibility);
                  setDetailsData(data.members);
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
      {/* <GroupDetails data={DetailsData} visibility={detailsVisibility} /> */}
    </section>
  );
}

export default Group;
