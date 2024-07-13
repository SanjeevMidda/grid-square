import React, { useState } from "react";

const Block = ({ gridRow, gridColumn }) => {
  const [move, setMove] = useState(false);

  let blockStyles = {
    gridColumn: gridColumn,
    gridRow: gridRow,
  };
  return (
    <div className="blockContainer" style={blockStyles}>
      <div className="square"></div>
    </div>
  );
};

export default Block;
