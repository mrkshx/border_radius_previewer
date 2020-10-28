import React, { useState } from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

import '../style/border_square.css';

const BorderSquare = () => {
  const [borderRadius, setBorderRadius] = useState(
  {
    topLeft: "30px",
    topRight: "10px",
    bottomLeft: "90px",
    bottomRight: "40px",
  });

  return <div style={{borderTopLeftRadius: borderRadius.topLeft, borderTopRightRadius: borderRadius.topRight, borderBottomLeftRadius: borderRadius.bottomLeft, borderBottomRightRadius: borderRadius.bottomRight}} id="border_square">
    <Slider className="sliderTopLeft" />
    <Slider className="sliderTopRight" />
    <Slider className="sliderBottomLeft" />
    <Slider className="sliderBottomRíght" />
  </div>
};


export default BorderSquare;
