import React from "react";
import Objects from "../../../assets/data/furniture.data.json";

function randomInteger(min = 1, max = 100) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const Picture = ({ img, setAddedImage }) => {
  const addImage = () => {
    setAddedImage({ ...img, key: randomInteger() });
  };

  return (
    <>
      <img id={img.id} src={img.src} alt="image" width={80} height={80} />
      <button onClick={addImage}>+</button>
    </>
  );
};

const PicturesList = ({ setAddedImage }) => {
  return (
    <div style={{ display: "flex", gap: "10px", overflow: "scroll" }}>
      {Objects.map((img) => (
        <Picture key={img.id} img={img} setAddedImage={setAddedImage} />
      ))}
    </div>
  );
};

export default PicturesList;
