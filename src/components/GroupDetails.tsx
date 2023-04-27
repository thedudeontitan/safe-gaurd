import React from "react";
import { Member } from "../routes/Group";

function GroupDetails(props: { data: Array<Member> }) {
  const info = props.data;
  return (
    <section>
      <div className="pt-22">
        {info.map(() => (
          <div>hello</div>
        ))}
      </div>
    </section>
  );
}

export default GroupDetails;
