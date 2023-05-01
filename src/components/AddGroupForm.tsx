import React, { useState } from "react";

type memberInfo = {
  name: string;
  image: string;
  hash: string;
};

function AddGroupForm(props: { onClose: any; visibility: boolean }) {
  const [formStep, setFormStep] = useState(1);
  const [numMembers, setnumMembers] = useState(3);
  const [memberData, setMemberData] = useState<memberInfo[]>([
    {
      name: "john doe",
      image: "src/assets/pfp.jpg",
      hash: "0xde76a4adf9d6e085962ecdacc86033f20ac1d365",
    },
  ]);

  if (!props.visibility) return null;

  const handleOnClose = (e: any) => {
    if (e.target.id == "container") props.onClose(false);
  };

  const memberInputs: any = [];
  for (let i = 0; i < numMembers; i++) {
    memberInputs.push(
      <label key={i}>
        {/* Member {i + 1}: */}
        {/* <input type="text" onChange={(event) => handleMemberNameChange(event, i)} /> */}
        <div className="flex lg:flex-row flex-col lg:gap-x-4 pb-2">
          <input className="p-2 bg-white my-2 lg:w-1/4" placeholder="Name" />
          <input
            className="p-2 bg-white my-2 lg:flex-grow"
            placeholder="Hash"
          />
        </div>
      </label>
    );
  }
  function Firststep() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row pb-2">
          <span className="font-semibold">New Vault</span>
          {/* <button onClick={} className="justify-end"><AiOutlineClose/></button> */}
        </div>
        <span className="">Name</span>
        <input className="p-2 bg-white my-2" placeholder="Name " />
        <span className="py-2">Number of Group Members</span>
        <input
          type="text"
          className="p-2 bg-white my-2"
          placeholder="Enter Number"
        />
        <div className="ml-auto">
          <button
            onClick={() => {
              setFormStep(formStep + 1);
            }}
            className="bg-button w-fit p-2 rounded mt-5"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function Secondstep() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row pb-2">
          <span className="font-semibold">Add Members</span>
          {/* <button onClick={} className="justify-end"><AiOutlineClose/></button> */}
        </div>
        <span className="">Add {numMembers} Members to the Vault</span>
        <div>{memberInputs}</div>
        <div className=" ml-auto flex gap-x-4">
          <button
            onClick={() => {
              setFormStep(formStep - 1);
            }}
            className="bg-button w-fit p-2 rounded mt-5"
          >
            Back
          </button>
          <button
            onClick={() => {
              setFormStep(formStep + 1);
            }}
            className="bg-button w-fit p-2 rounded mt-5"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function ThirdStep() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row pb-2">
          <span className="font-semibold">New Vault</span>
          {/* <button onClick={} className="justify-end"><AiOutlineClose/></button> */}
        </div>
        <span className="">Name</span>
        <div className="p-2 bg-white my-2">Polygon</div>
        <span className="">Network</span>
        <div className="p-2 bg-white my-2">Polygon</div>
        <span className="">Members</span>
        {memberData?.map((data) => (
          <div className="shadow rounded bg-white p-2 flex flex-row">
            <img src={data.image} className="lg:w-10 h-10 rounded-full mx-2" />
            <div className="flex flex-col">
              <span>{data.name}</span>
              <span>{data.hash}</span>
            </div>
          </div>
        ))}
        <div className="ml-auto flex gap-x-4">
          <button
            onClick={() => {
              setFormStep(formStep - 1);
            }}
            className="bg-button w-fit p-2 rounded mt-5"
          >
            Back
          </button>
          <button
            onClick={() => {}}
            className="bg-button w-fit p-2 rounded mt-5"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <section
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black backdrop-blur bg-opacity-30  flex justify-center items-center"
    >
      <div className="shadow-md rounded-md bg-back p-5 lg:w-[60vh]">
        {
          {
            1: <Firststep />,
            2: <Secondstep />,
            3: <ThirdStep />,
          }[formStep]
        }
      </div>
    </section>
  );
}

export default AddGroupForm;
