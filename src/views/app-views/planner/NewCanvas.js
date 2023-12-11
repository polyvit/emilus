import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Image } from "react-konva";
import { Button } from "antd";
import useImage from "use-image";

const ImageComponent = ({ src, x, y }) => {
  const [image] = useImage(src);
  return <Image x={x} y={y} image={image} width={100} height={100} draggable />;
};

const NewCanvas = ({ addedImage }) => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [width, setWidth] = useState(0);
  const stageRef = useRef(null);

  useEffect(() => {
    if (addedImage) {
      setDroppedItems([
        ...droppedItems,
        {
          ...addedImage,
          x: 10,
          y: 10,
        },
      ]);
    }
  }, [addedImage?.key]);

  useEffect(() => {
    let canvas = document.querySelector("canvas");
    canvas.style.background = "white";
    setWidth(
      document.querySelector(".konvajs-content").parentElement.offsetWidth
    );
  }, []);

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, "planner.png");
  };

  return (
    <>
      <Stage width={width} height={500} ref={stageRef}>
        <Layer>
          {droppedItems.map((obj) => (
            <ImageComponent src={obj.src} x={obj.x} y={obj.y} />
          ))}
        </Layer>
      </Stage>
      <Button type="link" onClick={handleExport}>
        Export plan image
      </Button>
    </>
  );
};

export default NewCanvas;
