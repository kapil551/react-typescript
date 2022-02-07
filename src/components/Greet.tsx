import React from "react";

// defining the structure/type of the props
type GreetProps = {
  name: string
  messageCount: Number
  isLoggedIn: boolean
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {
          props.isLoggedIn 
            ? ` Welcome {props.name}! You have {props.messageCount} unread messages`
            : `Welcome guest`

        }
      </h2>
    </div>
  );
};

export default Greet;
