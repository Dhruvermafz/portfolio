import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "Open Source Contributer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    ></Typewriter>
  );
}

export default Type;
