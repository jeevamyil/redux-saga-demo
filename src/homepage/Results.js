import React from "react";
import Card from "../sharedui/Card";


const Results = (props) => {
    
  if (props.data.length === 0)
    return (
      <div className="text-center">
        <h2>empty</h2>
      </div>
    );
  else {
    return (
      <div className="">
        {props.data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
      </div>
    );
  }
};

export default Results;
