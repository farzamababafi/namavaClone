import React, { useRef, useEffect } from "react";
import "./Info.css";
const Info = (props) => {
  const inner = useRef();
  useEffect(() => {
    props.change(inner.current.offsetTop);
  });

  return (
    <div
      className={
        props.isActive === props.id ? "info-container null" : "info-container"
      }
      ref={inner}
    >
      <div className="img">
        <img src={props.file} alt={props.name} />
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        <p>
          Lorem ipsum dolor sit amet. Eos tempore delectus 33 accusamus quod ad
          soluta nihil eos consequatur consequatur. Vel ipsam libero non animi
          iure ut velit repellendus eum asperiores voluptatum. Eum consequuntur
          quibusdam est magni omnis ut sequi natus.
        </p>
      </div>
    </div>
  );
};

export default Info;
