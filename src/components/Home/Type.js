import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Engineer", "MERN Stack Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    ></Typewriter>
  );
}

export default Type;
