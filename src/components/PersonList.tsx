import React from "react";

// array of objects
type PersonListProps = {
    nameList: {
        first: string
        last: string
    }[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
     {
         props.nameList.map((name) => {

            return (

                <h2> {name.first} {name.last}</h2>
            )
         })
     }
    </div>
  );
};

export default PersonList;
