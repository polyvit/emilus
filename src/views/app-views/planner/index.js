import React, { useState } from "react";
import { Card } from "antd";
import PicturesList from "./PicturesList";
import NewCanvas from "./NewCanvas";

const Planner = () => {
  const [addedImage, setAddedImage] = useState();

  return (
    <div>
      <Card bodyStyle={{ padding: "10px" }}>
        <PicturesList setAddedImage={setAddedImage} />
      </Card>
      <NewCanvas addedImage={addedImage} />
    </div>
  );
};

export default Planner;
