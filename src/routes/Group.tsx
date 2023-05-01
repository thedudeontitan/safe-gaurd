import React, { useState } from "react";
import GroupDetails from "./GroupDetails";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AddGroupForm from "../components/AddGroupForm"

export type Group = {
  name: string;
  description: string;
  "company name": string;
  members: {
    name: string;
    image: string;
    hash: string;
  }[];
};
const groupData = [
  {
    name: "group name",
    description: "sdf asdf asdf asdf ",
    "company name": "company name",
    members: [
      { name: "john doe1", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
    ],
  },
  {
    name: "group name",
    description: "sdf asdf asdf asdf ",
    "company name": "company name",
    members: [
      { name: "john doe2", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
    ],
  },
  {
    name: "group name",
    description: "sdf asdf asdf asdf ",
    "company name": "company name",
    members: [
      { name: "john doe3", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
    ],
  },
  {
    name: "group name",
    description: "sdf asdf asdf asdf ",
    "company name": "company name",
    members: [
      { name: "john doe4", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
      { name: "john doe", image: "src/assets/pfp.jpg" , hash:"0xde76a4adf9d6e085962ecdacc86033f20ac1d365"},
    ],
  },
];

function Group() {
  const [detailsVisibility, setDetailsVisibility] = useState(false);
  const [DetailsData, setDetailsData] = useState<Group>();
  const [formVisibility, setFormVisibility] = useState(false);

  const navigate = useNavigate();

  const handleOnClose = () =>{
    setFormVisibility(false)
  }
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
          <button onClick={()=>{setFormVisibility(true)}} className=" shadow-md rounded-md p-4 mb-10 hover:scale-105 bg-button">
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
                    className="bg-button w-fit p-2 rounded lg:ml-auto"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <AddGroupForm onClose={handleOnClose} visibility={formVisibility} />
        </div>
      )}
    </section>
  );
}

export default Group;
