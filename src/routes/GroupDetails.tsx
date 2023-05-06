import React, { useEffect, useState } from "react";
import { Group } from "./Group";
import { useNavigate } from "react-router-dom";

function GroupDetails(props: { data: Group | undefined; visibility: boolean }) {
  const info = props.data;

  const navigate = useNavigate();

  useEffect(() => {
    if (props.data === undefined) {
      navigate("/group");
    }
  }, [props.data]);

  return (
    <section>
      <div className="">
        <div className="mb-5">
          <span className="text-3xl ">Group Details</span>
        </div>
        <div className="bg-white w-full flex flex-col gap-2 p-5 shadow rounded-md mb-5">
          <span>Group Name: {info?.name}</span>
          <span>description: {info?.description}</span>
          <span>company name: {info?.["company name"]}</span>
        </div>
        <div>
          {/* <div className="w-full shadow rounded-md">
            <div>
              <span>Add New Safe</span>
              <div>
                
              </div>
            </div>
          </div> */}
        </div>
        <div className="mb-5">
          <span className="text-2xl ">Members</span>
        </div>
        <div className="flex flex-col gap-5">
          {info?.members.map((i) => (
        <div className="w-full shadow rounded-md bg-white pt-5">
            <div className="flex flex-row pb-5 items-center">
              <img
                src={"../" + i.image}
                className="lg:w-12 h-12 rounded-full mx-5"
              />
              <span>{i.name}</span>
            </div>
        </div>
          ))}
          </div>
      </div>
    </section>
  );
}

export default GroupDetails;
