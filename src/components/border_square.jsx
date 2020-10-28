import React, { useState } from "react";

import '../style/border_square.css';

const BorderSquare = () => {
  const [borderRadius, setBorderRadius] = useState(
  {
    topLeft: "30px",
    topRight: "10px",
    bottomLeft: "90px",
    bottomRight: "40px",
  });
 return <div style={{borderTopLeftRadius: borderRadius.topLeft, borderTopRightRadius: borderRadius.topRight, borderBottomLeftRadius: borderRadius.bottomLeft, borderBottomRightRadius: borderRadius.bottomRight}} id="border_square"></div>
};


export default BorderSquare;
