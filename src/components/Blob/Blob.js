import React from "react";
import BlobItem from "../BlobItem/BlobItem";

const Blob = ({
  technologyStack = [],
  backgroundColor = "#f2f2f2",
  title = "[Title Here]",
}) => {
  const renderBlobItems = technologyStack.map((item) => {
    return <BlobItem />;
  });

  return (
    <div style={{ backgroundColor: `${backgroundColor}` }}>
      <h2>{title}</h2>
      {renderBlobItems}
    </div>
  );
};

export default Blob;
