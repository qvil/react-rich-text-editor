import React from "react";

const Img = () => (
  <img
    alt="img"
    src="//ddragon.leagueoflegends.com/cdn/9.10.1/img/champion/Braum.png"
  />
);
const PlainEditor = () => {
  const handleClick = () => {};

  return (
    <>
      <div contentEditable={true}>
        TextArea <Img />
      </div>
      <button onClick={handleClick}>Insert Image</button>
    </>
  );
};

export default PlainEditor;
