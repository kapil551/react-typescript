import React from "react";

// objects
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
